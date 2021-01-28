<template>
  <div>
    <NavBar />
    <StepSection :stepInfo="stepInfo" />
    <div class="flex flex-row justify-center m-8">
      <div class="p-4 shadow">
        <div>
          <div class="flex flex-row">
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
          </div>
          <div class="flex flex-row">
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
          </div>
          <div class="flex flex-row">
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
            <SeatTypeA />
          </div>
        </div>
        <div>
          <div class="flex flex-row">
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
          </div>
          <div class="flex flex-row">
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
          </div>
          <div class="flex flex-row">
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
          </div>
          <div class="flex flex-row">
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
            <div class="m-4"></div>
            <SeatTypeB />
            <SeatTypeB />
            <SeatTypeB />
          </div>
        </div>
        <div class="py-3 text-center">
          <button
            class="p-2 text-sm font-medium tracking-wide text-white bg-green-700 rounded-md"
            @click="selectSeats()"
          >
            Select Seats
          </button>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import NavBar from "../layouts/NavBar";
import StepSection from "../layouts/StepSection";
import SeatTypeA from "../layouts/SeatTypeA";
import SeatTypeB from "../layouts/SeatTypeB";
import FooterSection from "../layouts/FooterSection";
export default {
  components: {
    NavBar,
    StepSection,
    SeatTypeA,
    SeatTypeB,
    FooterSection,
  },
  data() {
    return {
      stepTitle: "Select Seats",
      stepNumber: 2,
      stepInfo: null,
    };
  },
  mounted() {
    this.stepInfo = {
      stepTitle: this.stepTitle,
      stepNumber: this.stepNumber,
    };
  },
  methods: {
    selectSeats() {
      const ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
      var ticketData =
        ticketDataStored == null ? [] : ticketDataStored.ticketData;
      const seatNumbers = ["34A", "33A", "35A"];
      ticketData.seatNumbers = seatNumbers;
      localStorage.setItem(
        "ticketData",
        JSON.stringify({ ticketData: ticketData })
      );
      Swal.fire("Step 2 of 4 Completed!", "Seat Chosen", "success");
      this.$router.push("/details");
    },
  },
};
</script>

<style scoped>
</style>
