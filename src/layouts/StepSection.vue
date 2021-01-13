<template>
  <div class="mx-8 mt-6">
    <span style="font-weight: bold">{{ stepInfo.stepTitle }}</span>
    <span style="float: right; font-weight: bold">Step {{ stepInfo.stepNumber }} of 4</span>
    <hr style="width: 100%; background-color: black" />
  </div>
</template>

<script>
import "../../public/vendor/tailwind.min.css";

export default {
  name: "step-section",
  props: {
    stepInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
