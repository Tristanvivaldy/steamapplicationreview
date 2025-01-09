<template>
  <nav class="bg-navBg min-h-full p-6">
    <div class="font-semibold text-2xl p-2">Navigation</div>
    <div class="mt-10">
      <router-link
        to="/admin"
        class="flex p-4 rounded-lg items-center gap-3 cursor-pointer hover:bg-slate-50 hover:p-4 hover:transition hover:duration-500"
      >
        <div>
          <HomeIcon :width="30" :height="30" />
        </div>
        <div class="font-semibold">Home</div>
      </router-link>
      <router-link
        to="/admin/manage"
        class="flex p-4 rounded-lg items-center gap-3 cursor-pointer hover:bg-slate-50 hover:p-4 hover:transition hover:duration-500"
      >
        <div>
          <ManageIcon :width="30" :height="30" />
        </div>
        <div class="font-semibold">Manage Application</div>
      </router-link>
      <router-link
        to="/login"
        class="flex p-4 rounded-lg items-center gap-3 cursor-pointer hover:bg-slate-50 hover:p-4 hover:transition hover:duration-500"
      >
        <div>
          <LogoutIcon :width="30" :height="30" />
        </div>
        <div class="font-semibold">Logout</div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import HomeIcon from "../assets/icon/HomeIcon.vue";
import ManageIcon from "../assets/icon/ManageIcon.vue";
import LogoutIcon from "../assets/icon/LogoutIcon.vue";

export default {
  name: "Navbar",
  components: { HomeIcon, ManageIcon, LogoutIcon },
};
</script>

<style>
</style>