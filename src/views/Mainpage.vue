<template>
  <div id="home">
    <!-- <h1>GLORIA & IJEM</h1> -->
    <div class="picture">
      <!-- <img class="image1" src="../assets/ijimage.jpg" /> -->
    </div>
    <br />
    <h4>Please click on the button below to support.</h4>
    <router-link to="/support-page"><button>SUPPORT</button></router-link>
    <img
      style="max-width: 200px; display: block; margin: 20px auto"
      alt="Vue logo"
      src="../assets/pstk.png"
    />
  </div>
</template>

<script>
export default {
  name: "Mainpage",
  components: {},
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Aclonica&display=swap");

#home {
  background-image: url(../assets/aaa.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover cover;
  background-attachment: scroll;
  padding: 7.375rem 1.25rem;
}
/* h1 {
  font-family: "Aclonica", sans-serif;
  font-weight: bolder;
  font-size: 3.125rem;
  color: #993300;
} */
.picture {
  width: 50%;
  height: 37.5rem;
  border: 1px solid green;
  border-radius: 8px;
  margin: 1.125rem auto 3.125rem;
}
.image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
 
h4 {
  font-family: "Aclonica", sans-serif;
}
button {
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 5px;
  font-weight: bolder;
  background: #8ebf42;
  color: white;
  border: 0px;
}
button:hover {
  cursor: pointer;
  background-color: #8ebf99;
}

@media screen and (max-width: 600px) {
  #home {
  background-image: url(../assets/kkk.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover cover;
  background-attachment: scroll;
  padding: 4.375rem 1.25rem;
}
  .picture {
    width: 84%;
    height: 34.375rem;
    margin: 3.125rem auto 2.5rem;
  }
  h4 {
    font-size: 0.7rem
  }
}
</style>
