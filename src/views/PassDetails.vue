<template>
  <div>
    <NavBar />
    <div id="passenger-details" class="my-1">
      <StepSectionWhite :stepInfo="stepInfo" />
      <div class="container py-5">
        <div class="card card1 col-sm-8">
          <div class="mt-4">
            <h3 style="float: left">Passenger {{ passengerNumber }}</h3>
          </div>
          <form class="mx-3" @submit.prevent="nextPassenger">
            <div class="form-group w-100">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="inputName"
              />
            </div>
            <div class="form-group w-100">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                required
                v-model="email"
              />
            </div>
            <div class="form-group w-100">
              <label>Phone Number</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="phoneNumber"
              />
            </div>
            <div class="form-group w-100">
              <label>ID/Passport No.</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="passport"
              />
            </div>
            <div class="form-group w-100">
              <label>Date Of Birth</label>
              <input type="date" class="form-control" required v-model="dob" />
            </div>
            <div class="form-group w-100">
              <label>City</label>
              <input type="text" class="form-control" required v-model="city" />
            </div>
            <div class="form-group w-100">
              <label>Country</label>
              <input
                type="text"
                class="form-control"
                required
                v-model="country"
              />
            </div>
            <div class="mb-3">
              <button type="submit" class="mr-3 btn btn-light">
                Next Passenger
              </button>
              <button
                type="button"
                class="btn btn-dark"
                @click="doneWithPassengers()"
              >
                Done
              </button>
            </div>
          </form>
          <h2 class="mt-4 mb-3">Baggage and Pets</h2>
          <form action="" class="mx-3">
            <div class="mb-3">
              <div>Number of Bags between 23 & 35kgs</div>
              <div style="color: grey">2,500 per bag</div>
              <input type="number" class="form-control w-100" v-model="bags" />
            </div>
            <div class="mb-3">
              <div>Number of Pets:</div>
              <div style="color: grey">1000 per pet</div>
              <input type="number" class="form-control w-100" v-model="pets" />
            </div>
            <div class="mb-3">
              <button
                type="button"
                class="btn btn-dark"
                @click="doneWithBaggageAndPets()"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "../../public/vendor/bootstrap.min.css";
import NavBar from "../layouts/NavBar";
import StepSectionWhite from "../layouts/StepSectionWhite";
import FooterSection from "../layouts/FooterSection";

export default {
  components: {
    NavBar,
    StepSectionWhite,
    FooterSection,
  },
  data() {
    return {
      stepTitle: "Passenger Details, Baggage and Pets",
      stepNumber: 3,
      stepInfo: null,
      ticketData: null,
      inputName: null,
      email: null,
      phoneNumber: null,
      passport: null,
      dob: null,
      city: null,
      country: null,
      savePassengerData: [],
      passengerNumber: 1,
      bags: null,
      pets: null,
    };
  },
  mounted() {
    this.stepInfo = {
      stepTitle: this.stepTitle,
      stepNumber: this.stepNumber,
    };
    const ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
    this.ticketData =
      ticketDataStored == null ? [] : ticketDataStored.ticketData;
  },
  methods: {
    nextPassenger() {
      this.savePassengerData[this.savePassengerData.length] = {
        name: this.inputName,
        dob: this.dob,
        phoneNumber: this.phoneNumber,
        email: this.email,
      };
      this.clearForm();
      let timerInterval;
      Swal.fire({
        title: "Saving Passenger...",
        timer: 1000,
        timerProgressBar: false,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getContent();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then(() => {});
      this.passengerNumber++;
    },
    clearForm() {
      this.inputName = null;
      this.email = null;
      this.phoneNumber = null;
      this.passport = null;
      this.dob = null;
      this.city = null;
      this.country = null;
    },
    doneWithPassengers() {
      this.ticketData.passengerData = this.savePassengerData;
      localStorage.setItem(
        "ticketData",
        JSON.stringify({ ticketData: this.ticketData })
      );
      this.clearForm();
      let timerInterval;
      Swal.fire({
        title: "All Passengers Saved!",
        timer: 1000,
        timerProgressBar: false,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getContent();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then(() => {});
    },
    doneWithBaggageAndPets() {
      this.ticketData.petCount = this.pets;
      localStorage.setItem(
        "ticketData",
        JSON.stringify({ ticketData: this.ticketData })
      );
      Swal.fire("Done!", "Passenger Details Entered!", "success");
      this.$router.push("/pay");
    },
  },
};
</script>

<style scoped>
.card1 {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
}
#passenger-details {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("../../public/img/hero.webp") center center no-repeat;
  background-size: cover;
}
</style>
