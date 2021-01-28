<template>
  <div>
    <NavBar />
    <div id="pay-form" class="my-1">
      <StepSectionWhite :stepInfo="stepInfo" />
      <div class="flex flex-row items-center justify-center">
        <div class="container max-w-xs p-8 m-8 bg-white shadow-lg">
          <div class="pl-2 text-2xl">Pay with Visa</div>
          <form @submit.prevent="payWithVisa">
            <div class="p-2 mt-4 mb-4">
              <div class="mb-2">Card Type</div>
              <input
                class="mr-1"
                type="radio"
                name="debitOrCredit"
                @change="debitOrCredit(true)"
              />
              <span class="mr-2">Debit</span>
              <input
                class="mr-1"
                type="radio"
                name="debitOrCredit"
                @change="debitOrCredit(false)"
              />
              <span class="mr-2">Credit</span>
            </div>
            <div class="p-2 mt-4 mb-4">
              <div class="mb-2">Card Number</div>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="text"
                minlength="12"
                maxlength="16"
                autocomplete
                required
                v-model="cardNumber"
              />
            </div>
            <div class="p-2 mt-4 mb-4">
              <div class="mb-2">Name</div>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="text"
                minlength="4"
                maxlength="50"
                autocomplete
                required
                v-model="nameInput"
              />
            </div>
            <div class="p-2 mt-4 mb-4">
              <div class="mb-2">Date</div>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="date"
                required
                v-model="dateInput"
              />
            </div>
            <div class="p-2 mt-4 mb-4">
              <div class="mb-2">CVC</div>
              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="text"
                minlength="3"
                maxlength="3"
                required
                v-model="cvc"
              />
            </div>
            <div class="flex flex-row">
              <button
                class="p-2 ml-3 text-sm font-medium tracking-wide text-white bg-black rounded-md hover:bg-black"
                type="submit"
              >
                Pay
              </button>
              <div>
                <div class="p-2">Cancel</div>
              </div>
            </div>
          </form>
        </div>
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
import StepSectionWhite from "../layouts/StepSectionWhite";
import FooterSection from "../layouts/FooterSection";

export default {
  name: "pass-pay",
  components: {
    NavBar,
    StepSectionWhite,
    FooterSection,
  },
  data() {
    return {
      stepTitle: "Pay With Visa",
      stepNumber: 4,
      stepInfo: null,
      paymentData: null,
      cardNumber: null,
      nameInput: null,
      dateInput: null,
      cvc: null,
      debitOrCreditChosen: null,
    };
  },
  mounted() {
    this.stepInfo = {
      stepTitle: this.stepTitle,
      stepNumber: this.stepNumber,
    };
  },
  methods: {
    debitOrCredit(debitOrCredit) {
      this.debitOrCreditChosen = debitOrCredit;
    },
    payWithVisa() {
      const ticketDataStored = JSON.parse(localStorage.getItem("ticketData"));
      const ticketData =
        ticketDataStored == null ? [] : ticketDataStored.ticketData;
      this.paymentData = {
        debitOrCredit: this.debitOrCreditChosen,
        cardNumber: this.cardNumber,
        name: this.nameInput,
        date: this.dateInput,
        cvc: this.cvc,
      };
      ticketData.paymentData = this.paymentData;
      localStorage.setItem(
        "ticketData",
        JSON.stringify({ ticketData: ticketData })
      );
      Swal.fire("Done!", "Flight Paid For!", "success");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#pay-form {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("../../public/img/hero.webp") center center no-repeat;
  background-size: cover;
}
</style>
