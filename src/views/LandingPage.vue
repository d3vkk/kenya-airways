<template>
  <div>
    <NavBar />
    <div class="mt-1">
      <img
        class="relative"
        src="img/hero.webp"
        alt="Kenya Airways Hero"
        style="filter: grayscale(50%)"
      />
      <div>
        <div id="hero-title" class="absolute">Kenya Airways</div>
        <div id="hero-slogan" class="absolute">The Pride of Africa</div>
      </div>
    </div>
    <div class="my-8 flex flex-row justify-center items-center">
      <form
        @submit.prevent="searchFlight()"
        class="shadow-lg p-4 bg-white absolute"
        style="top: 26rem"
      >
        <div class="flex flex-row">
          <div class="mb-4 mt-4 p-2 w-1/3">
            <div class="mb-2">From</div>
            <input type="text" autocomplete required v-model="fromLocation" />
          </div>
          <div class="mb-4 mt-4 p-2 w-1/3">
            <div class="mb-2">To</div>
            <input type="text" autocomplete required v-model="toLocation" />
          </div>
          <div class="mb-4 mt-4 p-2 w-1/3">
            <div class="mb-2">Depart</div>
            <input type="time" autocomplete required v-model="departTime" />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-4 p-2 w-1/3">
            <span class="mr-2">Adults</span>
            <button class="px-2 mr-2 font-bold bg-black text-white rounded">
              -
            </button>
            <span ref="adultsCount">1</span>
            <button class="px-2 ml-2 font-bold bg-black text-white rounded">
              +
            </button>
          </div>
          <div class="mb-4 mt-4 p-2 w-1/3">
            <span class="mr-2">Children</span>
            <button class="px-2 mr-2 font-bold bg-black text-white rounded">
              -
            </button>
            <span ref="childrenCount">1</span>
            <button class="px-2 ml-2 font-bold bg-black text-white rounded">
              +
            </button>
          </div>
          <div class="mb-4 mt-4 p-2 w-1/3">
            <span class="mr-2">Infants</span>
            <input type="checkbox" name="infants" v-model="infants" />
          </div>
        </div>
        <div class="text-center">
          <button
            class="p-2 bg-black rounded-md text-white font-medium tracking-wide hover:bg-red-800 ml-3 text-sm"
            type="submit"
          >
            Search Flight
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "landing-page",
  components: {
    NavBar,
  },
  data() {
    return {
      fromLocation: null,
      toLocation: null,
      departTime: null,
      infants: false,
    };
  },
};
</script>

<style scoped>
input[type="time"],
input[type="text"],
select {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}
select {
  @apply bg-white text-black;
}
</style>
