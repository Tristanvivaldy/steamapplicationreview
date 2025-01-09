<template>
  <div class="flex justify-center items-center bg-loginBg w-screen h-screen">
    <div class="bg-white rounded-lg shadow-lg">
      <div class="grid grid-cols-2">
        <div class="p-20">
          <p class="text-3xl font-bold">Welcome</p>
          <p class="mt-2">Silahkan masukan data untuk masuk</p>
          <div class="mt-10">
            <div class="mb-4">
              <span>Email</span>
              <input
                v-model="email"
                type="text"
                class="mt-2 block w-full px-3 py-2 border border-darkBrown rounded-lg focus:outline-none focus:border-semiLightBrown"
              />
            </div>
            <div>
              <span>Password</span>
              <input
                v-model="password"
                type="password"
                class="mt-2 block w-full px-3 py-2 border border-darkBrown rounded-lg focus:outline-none focus:border-semiLightBrown"
              />
            </div>
          </div>
          <div class="mt-12 flex justify-center items-center">
            <input
              @click="login"
              type="submit"
              value="Login"
              class="py-2 px-28 bg-darkBrown text-white font-semibold rounded-lg cursor-pointer hover:bg-semiLightBrown"
            />
          </div>
          <div class="mt-3 flex justify-center items-center">
            <router-link
              to="/"
              class="py-2 px-28 bg-yellow-950 text-white font-semibold rounded-lg cursor-pointer hover:bg-yellow-800"
            >
              Guest
            </router-link>
          </div>
        </div>
        <div>
          <div class="relative">
            <img
              src="../assets/images/landing-login.jpg"
              alt="landing-login"
              width="460"
              class="rounded-r-lg"
            />
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="../assets/images/logo-login.jpg"
                width="150"
                alt="logo-login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      Axios.post(`http://localhost:8080/login`, {
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          localStorage.setItem("token", response.data.data.token);
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>