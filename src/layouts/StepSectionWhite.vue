<template>
  <div class="px-8 pt-6 text-white">
    <span style="font-weight: bold">{{ stepInfo.stepTitle }}</span>
    <span style="float: right; font-weight: bold"
      >Step {{ stepInfo.stepNumber }} of 4</span
    >
    <hr style="width: 100%; background-color: white" />
  </div>
</template>

<script>
import "../../public/vendor/tailwind.min.css";

export default {
  name: "step-section-white",
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
