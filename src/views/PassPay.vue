<template>
  <div id="pay-form">
    <NavBar />
    <div class="flex flex-row justify-center items-center">
      <div class="container max-w-xs p-8 m-8 shadow-lg bg-white">
        <div class="pl-2 text-2xl">Pay with Visa</div>
        <form @submit.prevent="payWithVisa">
          <div class="mb-4 mt-4 p-2">
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
          <div class="mb-4 mt-4 p-2">
            <div class="mb-2">Card Number</div>
            <input
              type="text"
              minlength="12"
              maxlength="16"
              autocomplete
              required
              v-model="cardNumber"
            />
          </div>
          <div class="mb-4 mt-4 p-2">
            <div class="mb-2">Name</div>
            <input
              type="text"
              minlength="4"
              maxlength="50"
              autocomplete
              required
              v-model="nameInput"
            />
          </div>
          <div class="mb-4 mt-4 p-2">
            <div class="mb-2">Date</div>
            <input type="date" required v-model="dateInput" />
          </div>
          <div class="mb-4 mt-4 p-2">
            <div class="mb-2">CVC</div>
            <input
              type="text"
              minlength="3"
              maxlength="3"
              required
              v-model="cvc"
            />
          </div>
          <div class="flex flex-row">
            <button
              class="p-2 bg-black rounded-md text-white font-medium tracking-wide hover:bg-black ml-3 text-sm"
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
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "pass-pay",
  components: {
    NavBar,
  },
  data() {
    return {
      paymentData: null,
      cardNumber: null,
      nameInput: null,
      dateInput: null,
      cvc: null,
      debitOrCreditChosen: null,
    };
  },
  methods: {
    debitOrCredit(debitOrCredit) {
      this.debitOrCreditChosen = debitOrCredit;
      console.log(
        "debitOrCredit -> this.debitOrCreditChosen",
        this.debitOrCreditChosen
      );
    },
    payWithVisa() {
      this.paymentData = {
        debitOrCredit: this.debitOrCreditChosen,
        cardNumber: this.cardNumber,
        name: this.nameInput,
        date: this.dateInput,
        cvc: this.cvc,
      };
      console.log("payWithVisa -> this.paymentData", this.paymentData);
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="date"],
select {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}
select {
  @apply bg-white text-black;
}

#pay-form {
  background: url("../../public/img/hero.webp") center center;
}
</style>
