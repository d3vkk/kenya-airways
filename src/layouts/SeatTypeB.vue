<template>
  <div
    class="p-1 seat-type-b"
    @click="chosenSeat()"
    :class="{ isChosen: isChosen }"
  >
    <img
      src="../../public/img/seat-black.png"
      alt=""
      style="width: 5rem; height: 5rem"
    />
  </div>
</template>

<script>
import "../../public/vendor/tailwind.min.css";

export default {
  data() {
    return {
      isChosen: false,
    };
  },
  methods: {
    chosenSeat() {
      if (this.isChosen) {
        this.isChosen = false;
      } else {
        this.isChosen = true;
      }
    },
  },
};
</script>

<style scoped>
.seat-type-b:hover {
  background-color: #e91d24;
}

.isChosen {
  background-color: #e91d24;
}
</style>
