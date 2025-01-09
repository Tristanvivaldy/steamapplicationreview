<template>
  <div>
    <div class="grid grid-cols-6">
      <div class="col-span-1 min-h-screen">
        <Navbar />
      </div>
      <div class="col-span-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "AdminPage",
  components: { Navbar },
};
</script>

<style>
</style>