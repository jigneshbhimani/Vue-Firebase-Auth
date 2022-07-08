<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1 class="heading">Register</h1>
        <form class="form" @submit.prevent="register">
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              v-model="email"
            />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-outline-primary mb-2">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully Registered! Please Login.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style>
.container {
  padding: 20px;
}
.heading {
  color: chocolate;
  cursor: pointer;
  text-decoration: underline;
}
.form {
  padding: 20px;
  margin-top: 40px;
}
.form-label {
  cursor: pointer;
}
#form2Example1,
#form2Example2 {
  width: 50%;
  box-shadow: 1px 1px 1px #333333;
  padding: 5px;
  margin-left: 16rem;
}
</style>
