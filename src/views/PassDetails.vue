<template>
  <div>
    <NavBar />
    <div id="passenger-details" class="my-1">
      <div class="container py-5">
        <div class="card card1 col-sm-8">
          <div class="mt-4">
            <h3 style="float: left">Passenger One</h3>
            <div
              class="text-white card col-sm-3"
              style="float: right; background-color: #e91d24; height: 30px"
            >
              <p class="mx-auto card-text">Ksh 70,000</p>
            </div>
          </div>
          <form class="mx-3">
            <label>Name</label>
            <div class="mb-3 form-row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Second name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="mb-3 form-row">
              <div class="form-group col-md-6">
                <label for="inputGender">Gender</label>
                <select id="inputGender" class="form-control">
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputID">ID/passport No.</label>
                <input type="text" class="form-control" id="inputID" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPhone">Phone No</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="mb-3 form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Country</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>Kenya</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
          </form>
          <h2 class="mt-4 mb-3">Baggage and Pets</h2>
          <form action="" class="mx-3">
            <div class="mb-3">
              <p>Number of Bags between 23 & 35kgs:</p>
              <label
                for="inputbaggage"
                class="mr-2"
                style="color: grey; float: left"
                >2,500 per bag</label
              >
              <input
                type="number"
                class="form-control col-md-3"
                id="inputbaggage"
              />
            </div>
            <div class="mb-3">
              <p>Number of Pets:</p>
              <label
                for="inputPet"
                class="mr-2"
                style="color: grey; float: left"
                >1000 per pet</label
              >
              <input
                type="number"
                class="form-control col-md-3"
                id="inputPet"
              />
            </div>
          </form>

          <div class="mb-4">
            <a href="" style="float: left; color: black"
              >&#60; Back to Select flight</a
            >
            <div
              class="text-white card col-sm-3"
              style="float: right; background-color: #e91d24; height: 30px"
            >
              <p class="mx-auto card-text">Proceed to payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import "../../public/vendor/bootstrap.min.css";
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
.card1 {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
}
#passenger-details {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("../../public/img/hero.webp") center center no-repeat;
  background-size: cover;
}
</style>
