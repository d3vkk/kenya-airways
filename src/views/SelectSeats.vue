<template>
  <div>
    <NavBar />
    <StepSection />
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
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
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
};
</script>

<style scoped>
</style>
