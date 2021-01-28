<template>
  <div>
    <NavBar />
    <div id="passenger-details" class="my-1">
      <StepSectionWhite :stepInfo="stepInfo" />
      <div class="container py-5">
        <div class="card card1 col-sm-8">
          <div class="mt-4">
            <h3 style="float: left">Passenger One</h3>
          </div>
          <form class="mx-3">
            <div class="form-group w-100">
              <label>Name</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group w-100">
              <label>Email</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="form-group w-100">
              <label>Phone Number</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group w-100">
              <label>ID/Passport No.</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group w-100">
              <label>Date Of Birth</label>
              <input type="date" class="form-control" required />
            </div>
            <div class="form-group w-100">
              <label>City</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group w-100">
              <label>Country</label>
              <input type="text" class="form-control" id="inputState" />
            </div>
            <div class="mb-3">
              <button type="button" class="mr-3 btn btn-dark">
                Next Passenger
              </button>
              <button type="button" class="btn btn-success">Done</button>
            </div>
          </form>
          <h2 class="mt-4 mb-3">Baggage and Pets</h2>
          <form action="" class="mx-3">
            <div class="mb-3">
              <div>Number of Bags between 23 & 35kgs</div>
              <div style="color: grey">2,500 per bag</div>
              <input
                type="number"
                class="form-control w-100"
                id="inputbaggage"
              />
            </div>
            <div class="mb-3">
              <div>Number of Pets:</div>
              <div style="color: grey">1000 per pet</div>
              <input type="number" class="form-control w-100" id="inputPet" />
            </div>
            <div class="mb-3">
              <button type="button" class="btn btn-success">Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
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
    };
  },
  mounted() {
    this.stepInfo = {
      stepTitle: this.stepTitle,
      stepNumber: this.stepNumber,
    };
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
