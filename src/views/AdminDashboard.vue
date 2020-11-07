<template>
  <div class="flex h-screen font-roboto">
    <div
      :class="sidebarOpen ? 'block' : 'hidden'"
      @click="sidebarOpen = false"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>

    <div
      :class="
        sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
      "
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-red-800 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="text-center mt-4">
        <router-link class="text-white text-xl uppercase fo" to="/"
          >Kenya Airways</router-link
        >
      </div>
      <nav>
        <div class="flex items-center mt-4 py-2 px-6 text-white">
          <span class="mx-4">Bookings</span>
        </div>
        <div class="flex items-center mt-4 py-2 px-6 text-white">
          <span class="mx-4">Logout</span>
        </div>
      </nav>
    </div>
    <div class="flex-1 flex flex-col">
      <header
        class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-red-700"
      >
        <div class="flex items-center">
          <button
            @click="sidebarOpen = true"
            class="text-gray-500 focus:outline-none lg:hidden"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="uppercase">Admin Dashboard</div>
        <div>
          <a href="tel:0711188890" class="mx-4">Phone</a>
          <a href="mailto:contact@kenyaairways.com" class="mx-4">Email</a>
        </div>
      </header>
      <div class="mt-8 flex flex-col mt-6">
        <div class="my-2 py-2 overflow-x-auto sm:mx-6 sm:px-6 lg:mx-1 lg:px-1">
          <div
            class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Seat Number</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin-dashboard",
  data() {
    return {
      sidebarOpen: false,
    };
  },
};
</script>

<style scoped>
</style>
