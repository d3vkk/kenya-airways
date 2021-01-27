<template>
  <div class="flex h-screen font-roboto">
    <div class="flex flex-col flex-1">
      <header
        class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-red-800"
      >
        <div class="flex items-center">
          <router-link to="/">
            <img
              src="img/logo.svg"
              alt="Kenya Airways"
              style="height: 2.2rem; width: 2.2rem"
            />
          </router-link>
        </div>
        <div class="uppercase">Dashboard</div>
        <div>
          <a href="tel:0711188890" class="mx-4">Call us</a>
          <a href="mailto:contact@kenyaairways.com" class="mx-4">Email us</a>
        </div>
      </header>
      <div class="flex flex-col mt-8">
        <div class="py-2 my-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-1 lg:px-1">
          <div class="my-2 text-gray-600">
            To add or delete a booking, please contact us via phone or email
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
                  <th>Seat</th>
                  <th>Edit</th>
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
                      @click="editBooking(passengerIndex)"
                    >
                      Edit
                    </div>
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
import "../../public/vendor/tailwind.min.css";

export default {
  name: "pass-dashboard",
  data() {
    return {
      ticketData: null,
      passengerData: {},
      seatNumbers: null,
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
};
</script>

<style scoped>
</style>
