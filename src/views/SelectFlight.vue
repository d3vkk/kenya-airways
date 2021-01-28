<template>
  <div>
    <NavBar />
    <div class="container" style="font-family: 'Lato', sans-serif">
      <StepSection :stepInfo="stepInfo" />
      <div class="mb-3 ml-4 mr-0 card-deck col">
        <div class="card card1" @click="selectFlight()">
          <div
            class="card-header"
            style="border-radius: 15px 15px 0 0; height: 3.5rem"
          >
            <div style="float: left">01</div>
            <div class="img-contianer">
              <img
                src="../../public/img/logo.svg"
                alt=""
                style="max-width: 100%; max-height: 100%"
              />
            </div>
            <div style="float: right; padding-top: 0">
              <div style="font-size: x-small">B787</div>
              <div style="font-size: x-small">KQ 787E</div>
            </div>
          </div>
          <div class="card-body" style="height: 4rem">
            <div style="float: left">
              <div style="font-weight: bold; font-size: small">NBO</div>
              <div style="font-weight: bold; font-size: small">23:55</div>
            </div>
            <div style="float: left; margin-top: 0.5%">
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>
            </div>
            <hr style="width: 80%; background-color: black; float: left" />
            <div style="float: right">
              <div style="font-weight: bold; font-size: small">JFK</div>
              <div style="font-weight: bold; font-size: small">1:30</div>
            </div>
            <div class="dot" style="float: left; margin-top: 3%"></div>
          </div>
          <div
            class="card-footer"
            style="border-radius: 0 0 15px 15px; height: 3.5rem"
          >
            <div style="float: right">
              <span style="font-size: small">from</span>
              <span style="font-weight: bold; font-size: small"
                >Kes 43,000</span
              >
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: black"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: black">
              Economy
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 46</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 30,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #0099ff"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #0099ff">
              Business
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 50</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 40,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #e91d24"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #e91d24">
              First Class
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 18</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 70,000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 ml-4 mr-0 card-deck col">
        <div class="card card1" @click="selectFlight()">
          <div
            class="card-header"
            style="border-radius: 15px 15px 0 0; height: 3.5rem"
          >
            <div style="float: left">02</div>
            <div class="img-contianer">
              <img
                src="../../public/img/logo.svg"
                alt=""
                style="max-width: 100%; max-height: 100%"
              />
            </div>
            <div style="float: right; padding-top: 0">
              <div style="font-size: x-small">B787</div>
              <div style="font-size: x-small">KQ 787E</div>
            </div>
          </div>
          <div class="card-body" style="height: 4rem">
            <div style="float: left">
              <div style="font-weight: bold; font-size: small">NBO</div>
              <div style="font-weight: bold; font-size: small">23:55</div>
            </div>
            <div style="float: left; margin-top: 0.5%">
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>
            </div>
            <hr style="width: 80%; background-color: black; float: left" />
            <div style="float: right">
              <div style="font-weight: bold; font-size: small">JFK</div>
              <div style="font-weight: bold; font-size: small">1:30</div>
            </div>
            <div class="dot" style="float: left; margin-top: 3%"></div>
          </div>
          <div
            class="card-footer"
            style="border-radius: 0 0 15px 15px; height: 3.5rem"
          >
            <div style="float: right">
              <span style="font-size: small">from</span>
              <span style="font-weight: bold; font-size: small"
                >Kes 43,000</span
              >
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: black"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: black">
              Economy
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 46</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 30,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #0099ff"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #0099ff">
              Business
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 50</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 40,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #e91d24"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #e91d24">
              First Class
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 18</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 70,000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 ml-4 mr-0 card-deck col">
        <div class="card card1" @click="selectFlight()">
          <div
            class="card-header"
            style="border-radius: 15px 15px 0 0; height: 3.5rem"
          >
            <div style="float: left">03</div>
            <div class="img-contianer">
              <img
                src="../../public/img/logo.svg"
                alt=""
                style="max-width: 100%; max-height: 100%"
              />
            </div>
            <div style="float: right; padding-top: 0">
              <div style="font-size: x-small">B787</div>
              <div style="font-size: x-small">KQ 787E</div>
            </div>
          </div>
          <div class="card-body" style="height: 4rem">
            <div style="float: left">
              <div style="font-weight: bold; font-size: small">NBO</div>
              <div style="font-weight: bold; font-size: small">23:55</div>
            </div>
            <div style="float: left; margin-top: 0.5%">
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>
            </div>
            <hr style="width: 80%; background-color: black; float: left" />
            <div style="float: right">
              <div style="font-weight: bold; font-size: small">JFK</div>
              <div style="font-weight: bold; font-size: small">1:30</div>
            </div>
            <div class="dot" style="float: left; margin-top: 3%"></div>
          </div>
          <div
            class="card-footer"
            style="border-radius: 0 0 15px 15px; height: 3.5rem"
          >
            <div style="float: right">
              <span style="font-size: small">from</span>
              <span style="font-weight: bold; font-size: small"
                >Kes 43,000</span
              >
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: black"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: black">
              Economy
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 46</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 30,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #0099ff"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #0099ff">
              Business
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 50</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 40,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #e91d24"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #e91d24">
              First Class
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 18</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 70,000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 ml-4 mr-0 card-deck col">
        <div class="card card1" @click="selectFlight()">
          <div
            class="card-header"
            style="border-radius: 15px 15px 0 0; height: 3.5rem"
          >
            <div style="float: left">04</div>
            <div class="img-contianer">
              <img
                src="../../public/img/logo.svg"
                alt=""
                style="max-width: 100%; max-height: 100%"
              />
            </div>
            <div style="float: right; padding-top: 0">
              <div style="font-size: x-small">B787</div>
              <div style="font-size: x-small">KQ 787E</div>
            </div>
          </div>
          <div class="card-body" style="height: 4rem">
            <div style="float: left">
              <div style="font-weight: bold; font-size: small">NBO</div>
              <div style="font-weight: bold; font-size: small">23:55</div>
            </div>
            <div style="float: left; margin-top: 0.5%">
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>
            </div>
            <hr style="width: 80%; background-color: black; float: left" />
            <div style="float: right">
              <div style="font-weight: bold; font-size: small">JFK</div>
              <div style="font-weight: bold; font-size: small">1:30</div>
            </div>
            <div class="dot" style="float: left; margin-top: 3%"></div>
          </div>
          <div
            class="card-footer"
            style="border-radius: 0 0 15px 15px; height: 3.5rem"
          >
            <div style="float: right">
              <span style="font-size: small">from</span>
              <span style="font-weight: bold; font-size: small"
                >Kes 43,000</span
              >
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: black"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: black">
              Economy
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 46</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 30,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #0099ff"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #0099ff">
              Business
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 50</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 40,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #e91d24"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #e91d24">
              First Class
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 18</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 70,000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 ml-4 mr-0 card-deck col">
        <div class="card card1" @click="selectFlight()">
          <div
            class="card-header"
            style="border-radius: 15px 15px 0 0; height: 3.5rem"
          >
            <div style="float: left">05</div>
            <div class="img-contianer">
              <img
                src="../../public/img/logo.svg"
                alt=""
                style="max-width: 100%; max-height: 100%"
              />
            </div>
            <div style="float: right; padding-top: 0">
              <div style="font-size: x-small">B787</div>
              <div style="font-size: x-small">KQ 787E</div>
            </div>
          </div>
          <div class="card-body" style="height: 4rem">
            <div style="float: left">
              <div style="font-weight: bold; font-size: small">NBO</div>
              <div style="font-weight: bold; font-size: small">23:55</div>
            </div>
            <div style="float: left; margin-top: 0.5%">
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>
            </div>
            <hr style="width: 80%; background-color: black; float: left" />
            <div style="float: right">
              <div style="font-weight: bold; font-size: small">JFK</div>
              <div style="font-weight: bold; font-size: small">1:30</div>
            </div>
            <div class="dot" style="float: left; margin-top: 3%"></div>
          </div>
          <div
            class="card-footer"
            style="border-radius: 0 0 15px 15px; height: 3.5rem"
          >
            <div style="float: right">
              <span style="font-size: small">from</span>
              <span style="font-weight: bold; font-size: small"
                >Kes 43,000</span
              >
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: black"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: black">
              Economy
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 46</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 30,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #0099ff"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #0099ff">
              Business
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 50</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 40,000</p>
            </div>
          </div>
        </div>
        <div
          class="card card2"
          style="border-color: #e91d24"
          @click="selectFlight()"
        >
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold; color: #e91d24">
              First Class
            </h5>
            <div style="margin-top: 3rem">
              <p style="font-weight: bold; margin-bottom: 0%">Seats 18</p>
              <p style="font-weight: bold; margin-top: 0%">Kes 70,000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-4 mt-5 mb-4">
        <h3>Fare conditions</h3>
        Note: Upgrade prices and seat selection are only applicable to Kenya
        airways operated flights. View our seat selection rules and rates.
        Important: Change fees will be charged in addition to any applicable
        fare difference. The amounts quoted for refunds, change fees, Miles
        earned or upgrades are per person. Upgrades with Miles are subject to
        availability on Emirates operated flights only.
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "../../public/vendor/bootstrap.min.css";
import NavBar from "../layouts/NavBar";
import StepSection from "../layouts/StepSection";
import FooterSection from "../layouts/FooterSection";

export default {
  components: {
    NavBar,
    StepSection,
    FooterSection,
  },
  data() {
    return {
      stepTitle: "Select Flight",
      stepNumber: 1,
      stepInfo: null,
    };
  },
  mounted() {
    this.stepInfo = {
      stepTitle: this.stepTitle,
      stepNumber: this.stepNumber,
    };
  },
  methods: {
    selectFlight() {
      Swal.fire("Step 1 of 4 Completed!", "Flight Chosen", "success");
      this.$router.push("/selectseats");
    },
  },
};
</script>

<style scoped>
.card1 {
  box-shadow: 0 14px 80 rgba(34, 35, 58, 0.5);
  max-width: 30rem;
  border-radius: 25px;
}

.card-header {
  background-color: white;
}

.card-footer {
  background-color: white;
}

.card-body {
  background-color: rgba(0, 0, 0, 0.03);
}

.img-contianer {
  width: 30.98px;
  height: 30.65px;
  float: right;
}

.dot {
  height: 6px;
  width: 6px;
  background-color: black;
  border-radius: 50%;
}

.card2 {
  max-height: 11rem;
  max-width: 9rem;
  background-color: white;
  box-shadow: 0 14px 80 rgba(34, 35, 58, 0.5);
}

.card2 > .card-body {
  background-color: white;
}

@media screen and (max-width: 1005px) {
  div.card2 {
    display: none;
  }
}
</style>
