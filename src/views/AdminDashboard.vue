<template>
  <div class="flex h-screen font-roboto">
    <div
      :class="sidebarOpen ? 'block' : 'hidden'"
      @click="sidebarOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>

    <div
      :class="
        sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
      "
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-red-800 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="mt-4 text-center">
        <router-link class="text-xl text-white uppercase" to="/"
          >Kenya Airways</router-link
        >
      </div>
      <nav>
        <div class="flex items-center px-6 py-2 mt-4 text-white">
          <span class="mx-4">Bookings</span>
        </div>
        <div class="flex items-center px-6 py-2 mt-4 text-white">
          <span class="mx-4">Logout</span>
        </div>
      </nav>
    </div>
    <div class="flex flex-col flex-1">
      <header
        class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-red-800"
      >
        <div class="flex items-center">
          <button
            @click="sidebarOpen = true"
            class="text-gray-500 focus:outline-none lg:hidden"
          >
            <svg
              class="w-6 h-6"
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
      <div class="flex flex-col mt-6 mt-8">
        <div class="py-2 my-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-1 lg:px-1">
          <div class="flex flex-row justify-between items-end">
            <div class="my-2">
              <b>Ticket Number:</b> #{{ ticketData.ticketId }}
            </div>
            <router-link
              class="px-3 py-1 my-3 ml-3 font-medium tracking-wide text-white bg-black rounded-md hover:bg-red-800"
              to="/createbooking"
            >
              Create Booking
            </router-link>
          </div>
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead class="bg-gray-300">
                <tr>
                  <th>Name</th>
                  <th>D.O.B</th>
                  <th>Contacts</th>
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
                          class="text-sm font-medium leading-5 text-gray-900"
                          v-html="passenger.name"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="m-4">
                        <div
                          class="text-sm font-medium leading-5 text-gray-900"
                          v-html="passenger.dob"
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="m-4">
                        <div
                          class="text-sm font-medium leading-5 text-gray-900"
                          v-html="passenger.phoneNumber"
                        ></div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ passenger.email }}
                        </div>
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
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >{{ seatNumber }}</span
                    >
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200"
                  >
                    <div
                      class="text-indigo-600 hover:text-indigo-900"
                      @click="editBooking()"
                    >
                      Edit
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200"
                    @click="deleteBooking(passengerIndex)"
                  >
                    <div class="text-red-600 hover:text-red-900">Delete</div>
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200"
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
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "../../public/vendor/tailwind.min.css";
import { jsPDF } from "jspdf";

export default {
  name: "admin-dashboard",
  data() {
    return {
      sidebarOpen: false,
      ticketData: null,
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
    this.ticketData = ticketDataStored.ticketData;
    this.passengerData = this.ticketData.passengerData;
    this.seatNumbers = this.ticketData.seatNumbers;
  },
  methods: {
    editBooking() {
      localStorage.setItem(
        "adminEditPassengerData",
        JSON.stringify({
          editPassengerData: {
            seatNumbers: this.seatNumbers,
          },
        })
      );
      this.$router.push("/admineditbooking");
    },
    deleteBooking(passengerIndex) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#E91D24",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.passengerData.splice(passengerIndex, 1);
          localStorage.setItem(
            "passengerData",
            JSON.stringify({
              ticketData: {
                tripId: this.ticketData.tripId,
                ticketId: this.ticketData.ticketId,
                seatNumbers: this.ticketData.seatNumbers,
                infants: this.ticketData.infants,
                petCount: this.ticketData.petCount,
                price: this.ticketData.price,
                passengerData: this.passengerData,
                paymentData: this.ticketData.paymentData,
              },
            })
          );
          Swal.fire("Deleted!", "The record has been deleted.", "success");
        }
      });
    },
    printBooking(passengerIndex) {
      const printPassenger = this.passengerData[passengerIndex];
      const timeNow = new Date();
      const printText = `
        Kenya Airways - The Pride Of Africa
        Time: ${timeNow}
        Name: ${printPassenger.name}
        Seat Count: ${this.seatNumbers.length}
        Seat Numbers: ${this.seatNumbers.join(", ")}
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
