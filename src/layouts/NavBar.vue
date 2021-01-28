<template>
  <div
    class="flex flex-row items-center justify-between px-3 bg-white shadow-md"
  >
    <router-link to="/">
      <img
        src="img/logo.svg"
        alt="Kenya Airways"
        style="height: 3rem; width: 3rem"
      />
    </router-link>
    <div class="flex flex-row items-center justify-between">
      <a class="mr-3" href="tel:0789889456">About us</a>
      <a href="mailto:hi@kq.com">Email us</a>
    </div>
  </div>
</template>

<script>
import "../../public/vendor/tailwind.min.css";

export default {};
</script>

<style scoped>
a {
  color: black;
}
</style>
