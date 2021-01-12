<template>
  <div class="container max-w-xs p-8">
    <div class="pl-2 text-2xl">Create Booking</div>
    <form @submit.prevent="createBooking">
      <div class="p-2 mt-4 mb-4">
        <div class="mb-2">Passenger Name</div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          maxlength="50"
          autocomplete
          required
          v-model="passengerName"
        />
      </div>
      <div class="p-2 mt-4 mb-4">
        <div class="mb-2">Seat Numbers</div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          autocomplete
          required
          v-model="seatNumbers"
        />
      </div>
      <div class="flex flex-row">
        <button
          class="p-2 ml-3 text-sm font-medium tracking-wide text-white bg-black rounded-md hover:bg-red-800"
          type="submit"
        >
          Create
        </button>
        <router-link class="p-2" to="/admin">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import "../../public/vendor/tailwind.min.css";

export default {
  name: "admin-booking-create",
  data() {
    return {
      createPassengerData: {},
      passengerName: null,
      seatNumbers: null,
      passengerData: null,
    };
  },
  methods: {
    createBooking() {
      const passengerDataStored = JSON.parse(
        localStorage.getItem("passengerData")
      );
      this.passengerData =
        passengerDataStored == null ? [] : passengerDataStored.passengerData;
      const passengerDataLength = this.passengerData.length;

      this.passengerData[passengerDataLength] = {
        name: this.passengerName,
        seatNumbers: this.seatNumbers.split(","),
      };
      localStorage.setItem(
        "passengerData",
        JSON.stringify({ passengerData: this.passengerData })
      );
      this.$router.push("/admin");
    },
  },
};
</script>

<style scoped>
</style>
