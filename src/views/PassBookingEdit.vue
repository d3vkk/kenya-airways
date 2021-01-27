<template>
  <div class="container max-w-xs p-8">
    <div class="pl-2 text-2xl">Edit Booking</div>
    <form @submit.prevent="editBooking">
      <div class="p-2 mt-4 mb-4">
        <div class="mb-2">Name</div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          autocomplete
          required
          v-model="nameInput"
        />
      </div>
      <div class="p-2 mt-4 mb-4">
        <div class="mb-2">Date of Birth</div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="date"
          autocomplete
          required
          v-model="dob"
        />
      </div>
      <div class="p-2 mt-4 mb-4">
        <div class="mb-2">Phone Number</div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          autocomplete
          required
          v-model="phoneNumber"
        />
      </div>
      <div class="p-2 mt-4 mb-4">
        <div class="mb-2">Email</div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
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
</template>

<script>
import "../../public/vendor/tailwind.min.css";

export default {
  name: "pass-booking-edit",
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
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style scoped>
</style>
