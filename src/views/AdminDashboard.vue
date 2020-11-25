<template>
  <div class="flex h-screen font-roboto">
    <div
      :class="sidebarOpen ? 'block' : 'hidden'"
      @click="sidebarOpen = false"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>

    <div
      :class="
        sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
      "
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-red-800 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="text-center mt-4">
        <router-link class="text-white text-xl uppercase" to="/"
          >Kenya Airways</router-link
        >
      </div>
      <nav>
        <div class="flex items-center mt-4 py-2 px-6 text-white">
          <span class="mx-4">Bookings</span>
        </div>
        <div class="flex items-center mt-4 py-2 px-6 text-white">
          <span class="mx-4">Logout</span>
        </div>
      </nav>
    </div>
    <div class="flex-1 flex flex-col">
      <header
        class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-red-800"
      >
        <div class="flex items-center">
          <button
            @click="sidebarOpen = true"
            class="text-gray-500 focus:outline-none lg:hidden"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="uppercase">Admin Dashboard</div>
        <div>
          <a href="tel:0711188890" class="mx-4">Call us</a>
          <a href="mailto:contact@kenyaairways.com" class="mx-4">Email us</a>
        </div>
      </header>
      <div class="mt-8 flex flex-col mt-6">
        <div class="my-2 py-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-1 lg:px-1">
          <div class="flex flex-row justify-end items-end">
            <router-link
              class="px-3 py-1 bg-black rounded-md text-white font-medium tracking-wide hover:bg-red-800 ml-3 my-3"
              to="/createbooking"
            >
              Create Booking
            </router-link>
          </div>
          <div
            class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
          >
            <table class="min-w-full">
              <thead class="bg-gray-300">
                <tr>
                  <th>Name</th>
                  <th>Seat&nbsp;Count</th>
                  <th>Seat&nbsp;Numbers</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Print</th>
                </tr>
              </thead>
              <tbody
                class="bg-white"
                role="rowgroup"
                v-for="(passenger, passengerIndex) in passengerData"
                :key="passengerIndex"
              >
                <tr role="row">
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="m-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                          v-html="passenger.name"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div
                      class="text-sm leading-5 text-gray-900"
                      v-html="seatNumbers.length"
                    ></div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <span
                      v-for="(seatNumber, seatNumbersIndex) in seatNumbers"
                      :key="seatNumbersIndex"
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >{{ seatNumber }}</span
                    >
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <div
                      class="text-indigo-600 hover:text-indigo-900"
                      @click="editBooking()"
                    >
                      Edit
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                    @click="deleteBooking(passengerIndex)"
                  >
                    <div class="text-red-600 hover:text-red-900">Delete</div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                    @click="printBooking(passengerIndex)"
                  >
                    <div class="text-green-600 hover:text-green-900">Print</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
  name: "admin-dashboard",
  data() {
    return {
      sidebarOpen: false,
      passengerData: {},
    };
  },
  mounted() {
    var ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
    if (ticketDataStored == null) {
      localStorage.setItem(
        "ticketData",
        JSON.stringify({
          ticketData: {
            tripId: "21A",
            ticketId: "DSFDFA78",
            seatNumbers: ["34A", "33A", "35A"],
            infants: false,
            petCount: 2,
            price: 23000,
            passengerData: [
              {
                name: "Felicitas Otolo",
                dob: "1/11/1990",
                phoneNumber: "0756785234",
                email: "felicitas@gmail.com",
              },
              {
                name: "Gilbert Jirongo",
                dob: "4/2/1994",
                phoneNumber: "0766735464",
                email: "gilbert@gmail.com",
              },
              {
                name: "Martin Kiplimo",
                dob: "7/8/1974",
                phoneNumber: "0766869004",
                email: "martin@hotmail.com",
              },
            ],
            paymentData: {
              debitOrCredit: true,
              cardNumber: "4241313221",
              name: "Adaer",
              date: "21/3/2012",
              cvc: "3243",
            },
          },
        })
      );
      ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
    }
    this.passengerData = ticketDataStored.ticketData.passengerData;
    this.seatNumbers = ticketDataStored.ticketData.seatNumbers;
  },
  methods: {
    editBooking() {
      localStorage.setItem(
        "editPassengerData",
        JSON.stringify({
          editPassengerData: {
            seatNumbers: this.seatNumbers,
          },
        })
      );
      this.$router.push("/editbooking");
    },
    deleteBooking(passengerIndex) {
      this.passengerData.splice(passengerIndex, 1);
      localStorage.setItem(
        "passengerData",
        JSON.stringify({
          passengerData: this.passengerData,
        })
      );
    },
    printBooking(passengerIndex) {
      const printPassenger = this.passengerData[passengerIndex];
      const timeNow = new Date();
      const printText = `
        Kenya Airways - The Pride Of Africa
        Time: ${timeNow}
        Name: ${printPassenger.name}
        Seat Count: ${printPassenger.seatNumbers.length}
        Seat Numbers: ${printPassenger.seatNumbers.join(", ")}
      `;

      const pdf = new jsPDF();
      pdf.text(printText, 10, 10);
      pdf.save(`${printPassenger.name},${timeNow}.pdf`);
    },
  },
};
</script>

<style scoped>
</style>
