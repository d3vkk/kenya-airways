<template>
  <div
    class="p-1 mr-1 seat-type-a"
    @click="chosenSeat()"
    :class="{ isChosen: isChosen }"
  >
    <img
      src="../../public/img/seat-gray.png"
      alt=""
      style="width: 6rem; height: 6rem"
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
.seat-type-a:hover {
  background-color: #e91d24;
}

.isChosen {
  background-color: #e91d24;
}
</style>
