<template>
  <div class="home">
    <h1>GLORIA & IJEM</h1>
    <div class="picture">
      <!-- <img class="image1" src="../assets/ijem2.jpg" /> -->
    </div>
    <p>Please click on the button below to support.</p>
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
.home {
  background-image: url(../assets/ijem2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover cover;
  background-attachment: scroll;
  padding: 50px 20px;
}
.picture {
  width: 50%;
  height: 400px;
  background: rgb(215, 150, 126);
  border: 1px solid blue;
  border-radius: 3px;
  margin: 50px auto 50px;
}
.image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h1 {
  font-size: 60px;
  color: green;
}
button {
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background: #8ebf42;
  color: white;
  border: 0px;
}
button:hover {
  cursor: pointer;
  background-color: #8ebf42;
}


@media screen and (max-width: 600px) {
  h1 {
    font-size: 40px;
  }
  .picture {
    width: 80%;
  }
}



</style>
