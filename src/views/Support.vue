<template>
    <div id="app">
      <section>
        <div class="formcontainer">
          <div class="container">
            <label for="uname">
              <strong>Full Name</strong>
            </label><br />
            <input
              v-model="full_name"
              required
              type="text"
              placeholder="John Doe"
              name="uname"
            /><br />
            <label for="email">
              <strong>Email Address</strong>
            </label><br />
            <input
              v-model="email"
              required
              type="text"
              placeholder="you@email.com"
              name="email"
            /><br />
            <label for="amount">
              <strong>Amount</strong>
            </label><br />
            <input
              v-model.number="amount"
              type="number"
              placeholder="1000"
              name="amount"
              required
            />
            <br />
            <br />
            <br />
            <paystack
              buttonClass="'button-class btn btn-primary'"
              buttonText="Pay Online"
              :publicKey="PUBLIC_KEY"
              :email="email"
              :amount="amount * 100"
              :reference="reference"
              :onSuccess="onSuccessfulPayment"
              :onCanel="onCancelledPayment"
            >
            </paystack>
          </div>
        </div>
      </section>
      <img style="max-width: 200px" alt="Vue logo" src="../assets/pstk.png" />
    </div>
  </template>
    
    <script>
  import paystack from "vue3-paystack";
  import router from "../router";
  
  export default {
    name: "Support",
    components: {
      paystack,
    },
    computed: {
      reference() {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
  
        return text;
      },
    },
    methods: {
      processPayment: () => {
        window.alert("Payment recieved");
      },
      onSuccessfulPayment: () => {
        // alert("SUCCESSFUL PAYMENT");
        router.push('/success')
      },
      onCancelledPayment: () => {
        alert("PAYMENT CANCELLED")
      },
      close: () => {
        console.log("You closed checkout page");
      },
    },
    data: () => {
      return {
        amount: 0,
        full_name: "",
        email: "",
        PUBLIC_KEY: "pk_live_216edbe4137aa0470e7ec10bb1d090daba36e652",
      };
    },
  };
  </script>
    
    <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  html,
  body {
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
  }
  label {
    float: left;
  }
  input {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  button {
    background-color: #8ebf42;
    color: white;
    padding: 14px 0;
    margin: 10px auto;
    border: none;
    cursor: pointer;
    width: 80%;
  }
  
  button:hover {
    opacity: 0.8;
  }
  .formcontainer {
    text-align: center;
    margin: 50px auto 12px;
    padding: 40px;
    width: 70%;
  }
  .container {
    padding: 16px 0;
    text-align: center;
  }
  span.psw {
    float: right;
    padding-top: 0;
    padding-right: 15px;
  }
  @media screen and (max-width: 600px) {
    .formcontainer {
        width: 90%;
    }
  }
  /* Change styles for span on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
  }
  </style>
    