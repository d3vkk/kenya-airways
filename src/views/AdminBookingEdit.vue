<template>
  <div class="container max-w-xs p-8">
    <div class="text-2xl">Edit Booking</div>
    <form @submit.prevent="editBooking">
      <div class="mb-4 mt-4 p-2">
        <div class="mb-2">Seat Numbers</div>
        <input
          type="text"
          minlength="2"
          maxlength="20"
          autocomplete
          required
          v-model="seatNumbers"
        />
      </div>
      <div class="flex flex-row">
        <button
          class="p-2 bg-black rounded-md text-white font-medium tracking-wide hover:bg-black ml-3 text-sm"
          type="submit"
        >
          Submit
        </button>
        <router-link class="p-2" to="/admin">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "admin-booking-edit",
  data() {
    return {
      editPassengerData: {},
      seatNumbers: null,
      passengerData: null,
    };
  },
  mounted() {
    const editPassengerDataStored = JSON.parse(
      localStorage.getItem("editPassengerData")
    );
    if (editPassengerDataStored != null) {
      this.editPassengerData = editPassengerDataStored.editPassengerData;
      this.seatNumbers = this.editPassengerData.seatNumbers.join(",");
    }
  },
  methods: {
    editBooking() {
      const passengerDataStored = JSON.parse(
        localStorage.getItem("passengerData")
      );
      if (passengerDataStored != null) {
        this.passengerData = passengerDataStored.passengerData;
      }
      const passengerIndex = this.editPassengerData.passengerIndex;
      this.passengerData[passengerIndex] = {
        name: this.passengerData[passengerIndex].name,
        seatNumbers: this.seatNumbers.split(","),
      };
      localStorage.setItem(
        "passengerData",
        JSON.stringify({ passengerData: this.passengerData })
      );
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
