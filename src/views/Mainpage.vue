<template>
  <div id="home">
    <h1>GLORIA & IJEM</h1>
    <div class="picture">
      <img class="image1" src="../assets/ijimage.jpg" />
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

@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Princess+Sofia&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Sassy+Frass&display=swap'); */


/* @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap'); */



#home {
  background-image: url(../assets/lala.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover cover;
  background-attachment: scroll;
  padding: 80px 20px;
}
.picture {
  width: 50%;
  height: 600px;
  background: floralwhite;
  /* border: 1px solid green; */
  border-radius: 8px;
  margin: 50px auto 70px;
}
.image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
h1 {
  font-family: 'Aclonica', sans-serif;
  font-weight: bolder;
  font-size: 50px;
  color: #993300;
}
h4 {
  font-family: 'Aclonica', sans-serif;
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
    font-size: 42px;
  }
  .picture {
    width: 80%;
    height: 550px;
  }
}



</style>
