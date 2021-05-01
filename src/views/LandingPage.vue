<template>
  <div>
    <NavBar />
    <div id="hero-image" class="flex flex-col items-center my-1">
      <div class="p-4">
        <div id="hero-title">Kenya Airways</div>
        <div id="hero-slogan">The Pride of Africa</div>
      </div>
      <div class="flex flex-row items-center justify-center my-8">
        <form
          @submit.prevent="searchFlight()"
          class="p-2 bg-white rounded-lg shadow-lg"
        >
          <div class="flex flex-row">
            <div class="w-1/3 p-2 mt-4 mb-4">
              <div class="mb-2">From</div>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="text"
                autocomplete
                required
                v-model="fromLocation"
              />
            </div>
            <div class="w-1/3 p-2 mt-4 mb-4">
              <div class="mb-2">To</div>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="text"
                autocomplete
                required
                v-model="toLocation"
              />
            </div>
            <div class="w-1/3 p-2 mt-4 mb-4">
              <div class="mb-2">Depart</div>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="time"
                autocomplete
                required
                v-model="departTime"
              />
            </div>
          </div>
          <div class="flex flex-row">
            <div class="w-1/3 p-2 mt-4 mb-4">
              <span class="mr-2">Adults</span>
              <button type="button" class="px-2 mr-2 font-bold text-white bg-black rounded">
                -
              </button>
              <span ref="adultsCount">1</span>
              <button type="button" class="px-2 ml-2 font-bold text-white bg-black rounded">
                +
              </button>
            </div>
            <div class="w-1/3 p-2 mt-4 mb-4">
              <span class="mr-2">Children</span>
              <button type="button" class="px-2 mr-2 font-bold text-white bg-black rounded">
                -
              </button>
              <span ref="childrenCount">1</span>
              <button type="button" class="px-2 ml-2 font-bold text-white bg-black rounded">
                +
              </button>
            </div>
            <div class="w-1/3 p-2 mt-4 mb-4">
              <span class="mr-2">Infants</span>
              <input type="checkbox" name="infants" v-model="infants" />
            </div>
          </div>
          <div class="text-center">
            <button
              class="p-2 ml-3 text-sm font-medium tracking-wide text-white bg-black rounded-md hover:bg-red-800"
              type="submit"
            >
              Search Flight
            </button>
          </div>
        </form>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "../../public/vendor/tailwind.min.css";
import NavBar from "../layouts/NavBar";
import FooterSection from "../layouts/FooterSection";
export default {
  name: "landing-page",
  components: {
    NavBar,
    FooterSection,
  },
  data() {
    return {
      fromLocation: null,
      toLocation: null,
      departTime: null,
      infants: false,
    };
  },
  methods: {
    searchFlight() {
      const ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
      var ticketData =
        ticketDataStored == null ? [] : ticketDataStored.ticketData;
      ticketData = {
        tripId: "21A",
        ticketId: "DSFDFA78",
        infants: this.infants,
        price: 23000,
      };
      localStorage.setItem(
        "ticketData",
        JSON.stringify({ ticketData: ticketData })
      );
      let timerInterval;
      Swal.fire({
        title: "Searching flights...",
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
      this.$router.push("/selectflight");
    },
  },
};
</script>

<style scoped>
</style>
