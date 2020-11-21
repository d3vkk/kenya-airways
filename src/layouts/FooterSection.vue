<template>
  <footer>
    <div
      id="first-footer"
      class="px-3 py-6 flex flex-col md:flex-row lg:flex-row"
    >
      <div class="w-full md:w-1/4 lg:w-1/4 pb-6">
        <div class="footer-title pb-1">Useful&nbsp;Links</div>
        <div class="pb-1"><router-link to="\careers">Career</router-link></div>
        <div class="pb-1"><a href="#book">Booking&nbsp;Inquiry</a></div>
        <div class="pb-1"><a href="#search">View&nbsp;Ticket</a></div>
      </div>
      <div class="w-full md:w-1/4 lg:w-1/4 pb-6">
        <div class="footer-title pb-1">More&nbsp;Info</div>
        <div class="pb-1">Baggage&nbsp;Information</div>
        <div class="pb-1">Pet&nbsp;Information</div>
        <div class="pb-1">Flight&nbsp;Information</div>
      </div>
      <div class="w-full md:w-1/4 lg:w-1/4 pb-6">
        <div class="footer-title pb-1">About&nbsp;Us</div>
        <div class="pb-1">
          <router-link to="/privacy-policy">Privacy&nbsp;Policy</router-link>
        </div>
        <div class="pb-1"><a href="tel:0711188890">Call&nbsp;Us</a></div>
        <div class="pb-1">
          <a href="mailto:contact@kenyaairways.com">Email&nbsp;Us</a>
        </div>
        <div class="pb-1">About&nbsp;Us</div>
      </div>
      <div class="w-full md:w-1/4 lg:w-1/4 pb-6">
        <div class="footer-title pb-1">Follow&nbsp;Us</div>
        <div class="pb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            /></svg
          >&nbsp;KenyaAirwaysKE
        </div>
        <div class="pb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
            /></svg
          >&nbsp;KenyaAirways
        </div>
        <div class="pb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            /></svg
          >&nbsp;officialkenyaairways
        </div>
        <div class="pb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            /></svg
          >&nbsp;kenya-airways
        </div>
      </div>
    </div>
    <div id="second-footer" class="flex flex-row justify-center p-3">
      <div class="pb-1">
        <router-link to="/">
          <img
            src="img/logo.svg"
            alt="Kenya Airways"
            style="height: 2rem; width: 2rem"
          />
        </router-link>
      </div>
      <div class="pb-1">
        &copy;&nbsp;2020&nbsp;Kenya&nbsp;Airways.&nbsp;All&nbsp;Rights&nbsp;Reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
