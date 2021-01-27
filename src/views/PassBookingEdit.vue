<template>
  <div>
    <NavBar />
    <div class="container max-w-xs p-8">
      <div class="pl-2 text-2xl">Edit Booking</div>
      <form @submit.prevent="editBooking">
        <div class="p-2 mt-4 mb-4">
          <div class="mb-2">Name</div>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
            type="text"
            autocomplete
            required
            v-model="nameInput"
          />
        </div>
        <div class="p-2 mt-4 mb-4">
          <div class="mb-2">Date of Birth</div>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
            type="date"
            autocomplete
            required
            v-model="dob"
          />
        </div>
        <div class="p-2 mt-4 mb-4">
          <div class="mb-2">Phone Number</div>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
            type="text"
            autocomplete
            required
            v-model="phoneNumber"
          />
        </div>
        <div class="p-2 mt-4 mb-4">
          <div class="mb-2">Email</div>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
            type="email"
            autocomplete
            required
            v-model="email"
          />
        </div>
        <div class="flex flex-row">
          <button
            class="p-2 ml-3 text-sm font-medium tracking-wide text-white bg-black rounded-md hover:bg-red-800"
            type="submit"
          >
            Edit
          </button>
          <router-link class="p-2" to="/dashboard">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "../../public/vendor/tailwind.min.css";
import NavBar from "../layouts/NavBar";

export default {
  name: "pass-booking-edit",
  components: {
    NavBar,
  },
  data() {
    return {
      editPassengerData: {},
      passengerIndex: null,
      nameInput: null,
      dob: null,
      phoneNumber: null,
      email: null,
    };
  },
  mounted() {
    const editPassengerDataStored = JSON.parse(
      localStorage.getItem("editPassengerData")
    );
    if (editPassengerDataStored != null) {
      this.editPassengerData =
        editPassengerDataStored.editPassengerData.passengerData;
      this.passengerIndex =
        editPassengerDataStored.editPassengerData.passengerIndex;
      this.nameInput = this.editPassengerData.name;
      this.dob = this.editPassengerData.dob;
      this.phoneNumber = this.editPassengerData.phoneNumber;
      this.email = this.editPassengerData.email;
    }
  },
  methods: {
    editBooking() {
      var ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
      if (ticketDataStored != null) {
        ticketDataStored = ticketDataStored.ticketData;
        ticketDataStored.passengerData[this.passengerIndex] = {
          name: this.nameInput,
          dob: this.dob,
          phoneNumber: this.phoneNumber,
          email: this.email,
        };
        localStorage.setItem(
          "ticketData",
          JSON.stringify({ ticketData: ticketDataStored })
        );
        Swal.fire("Done!", "Booking Edited!", "success");
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style scoped>
</style>
