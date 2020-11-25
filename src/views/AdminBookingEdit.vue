<template>
  <div class="container max-w-xs p-8">
    <div class="text-2xl">Edit Booking</div>
    <form @submit.prevent="editBooking">
      <div class="mb-4 mt-4 p-2">
        <div class="mb-2">Seat Numbers</div>
        <input type="text" autocomplete required v-model="seatNumbers" />
      </div>
      <div class="flex flex-row">
        <button
          class="p-2 bg-black rounded-md text-white font-medium tracking-wide hover:bg-red-800 ml-3 text-sm"
          type="submit"
        >
          Edit
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
      var ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
      if (ticketDataStored != null) {
        ticketDataStored = ticketDataStored.ticketData;
        ticketDataStored.seatNumbers = this.seatNumbers.split(",");
        localStorage.setItem(
          "ticketData",
          JSON.stringify({ ticketData: ticketDataStored })
        );
        this.$router.push("/admin");
      }
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
