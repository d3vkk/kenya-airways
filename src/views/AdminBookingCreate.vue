<template>
  <div class="container max-w-xs p-8">
    <div class="text-2xl">Create Booking</div>
    <form @submit.prevent="createBooking">
      <div class="mb-4 mt-4 p-2">
        <div class="mb-2">Passenger Name</div>
        <input
          type="text"
          maxlength="50"
          autocomplete
          required
          v-model="passengerName"
        />
      </div>
      <div class="mb-4 mt-4 p-2">
        <div class="mb-2">Seat Numbers</div>
        <input type="text" autocomplete required v-model="seatNumbers" />
      </div>
      <div class="flex flex-row">
        <button
          class="p-2 bg-black rounded-md text-white font-medium tracking-wide hover:bg-red-800 ml-3 text-sm"
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
input,
select {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}
select {
  @apply bg-white text-black;
}
</style>
