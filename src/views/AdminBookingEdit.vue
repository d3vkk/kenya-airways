<template>
  <div class="container max-w-xs p-8">
    <div class="pl-2 text-2xl">Edit Booking</div>
    <form @submit.prevent="editBooking">
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
          Edit
        </button>
        <router-link class="p-2" to="/admin">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import "../../public/vendor/tailwind.min.css";

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
      localStorage.getItem("adminEditPassengerData")
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
</style>
