<template>
  <div>
    <NavBar />
    <div>
      <header id="header" class="my-1 header">
        <div class="header-content">
          <div class="text-white">
            <h2 style="font-size: 2.5rem">Explore a world of opportunities</h2>
            <p class="px-10">
              The KQ Group offers a wide range of careers, whether you’re
              looking to join our pilots, engineering or cabin crew and air
              services teams. Browse our current vacancies and find out what
              it’s like to work for a dynamic and multicultural business.
            </p>
          </div>
        </div>
      </header>
      <div>
        <div class="px-3 py-6">
          <h1 style="font-size: 2.5rem">Jobs</h1>
          <div class="py-3 joblist">
            <router-link href="job.html"
              ><p>Pacific Coordination Center Senior Manager</p>
              <p>NARITA, Japan</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>
                Talent Acquisition Specialist - Applicant Tracking System
                Configuration
              </p>
              <p>ATLANTA, Georgia</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Lead Cargo Maintenance Technician</p>
              <p>LOS ANGELES, California</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Cargo Maintenance Technician</p>
              <p>DETROIT, Michigan</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Lead Cargo Maintenance Technician</p>
              <p>SEATTLE, Washington</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Cargo Maintenance Technician</p>
              <p>LOS ANGELES, California</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Lead Cargo Maintenance Technician</p>
              <p>MINNEAPOLIS, Minnesota</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Cargo Maintenance Technician</p>
              <p>SEATTLE, Washington</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Cargo Maintenance Technician</p>
              <p>ATLANTA, Georgia</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Lead Cargo Maintenance Technician</p>
              <p>ATLANTA, Georgia</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Lead Cargo Maintenance Technician</p>
              <p>SALT LAKE CITY, Utah</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Cargo Maintenance Technician</p>
              <p>SALT LAKE CITY, Utah</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Cargo Maintenance Technician</p>
              <p>MINNEAPOLIS, Minnesota</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Lead Cargo Maintenance Technician</p>
              <p>DETROIT, Michigan</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Senior Business Analyst, API</p>
              <p>ATLANTA, Georgia</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Senior Analyst- Government Affairs</p>
              <p>WASHINGTON, District Of Columbia</p>
            </router-link>
          </div>
          <div class="py-3 joblist">
            <router-link to="/job">
              <p>Stationary Ground Maintenance Technician, LGA</p>
              <p>NEW YORK, New York</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar";
import FooterSection from "../layouts/FooterSection";

export default {
  components: {
    NavBar,
    FooterSection,
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("../../public/img/careers-banner.jpg") center center no-repeat;
  background-size: cover;
  height: 500px;
}

.header .header-content {
  padding-top: 20rem;
  padding-bottom: 2.5rem;
  text-align: center;
}

.header h2 {
  margin-bottom: 0.5rem;
  color: #fff;
}

.header .p-large {
  margin-bottom: 2rem;
  color: #dfe5ec;
}

.header .btn-solid-lg {
  margin-right: 0.5rem;
  margin-bottom: 1.25rem;
}

.joblist a:hover {
  color: #e91d24;
}
</style>
