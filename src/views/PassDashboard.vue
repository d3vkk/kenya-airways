<template>
  <div class="flex h-screen font-roboto">
    <div class="flex-1 flex flex-col">
      <header
        class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-red-800"
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
      <div class="mt-8 flex flex-col">
        <div class="my-2 py-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-1 lg:px-1">
          <div class="my-2 text-gray-600">
            To add or delete a booking, please contact us via phone or email
          </div>
          <div
            class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
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
                          class="text-sm leading-5 font-medium text-gray-900"
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
                          class="text-sm leading-5 font-medium text-gray-900"
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
                          class="text-sm leading-5 font-medium text-gray-900"
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
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >{{ passenger.seatNumber }}</span
                    >
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <div
                      class="text-indigo-600 hover:text-indigo-900"
                      @click="editBooking(passengerIndex)"
                    >
                      Edit
                    </div>
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
export default {
  name: "pass-dashboard",
  data() {
    return {
      passengerData: {},
    };
  },
  mounted() {
    this.passengerData = [
      {
        name: "Felicitas Otolo",
        dob: "1/11/1990",
        phoneNumber: "0756785234",
        email: "felicitas@gmail.com",
        seatNumber: "34A",
      },
      {
        name: "Gilbert Jirongo",
        dob: "4/2/1994",
        phoneNumber: "0766735464",
        email: "gilbert@gmail.com",
        seatNumber: "36A",
      },
      {
        name: "Martin Kiplimo",
        dob: "7/8/1974",
        phoneNumber: "0766869004",
        email: "martin@hotmail.com",
        seatNumber: "38A",
      },
    ];
  },
};
</script>

<style scoped>
</style>
