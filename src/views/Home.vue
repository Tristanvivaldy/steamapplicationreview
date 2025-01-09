<template>
  <div class="p-4">
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <LoadingIcon :width="200" :height="200" />
    </div>
    <div v-else>
      <div class="relative pt-14">
        <router-link
          to="/login"
          class="absolute top-0 right-0 bg-lightBrown flex justify-end items-center p-1 gap-1 rounded-lg w-fit hover:opacity-50"
        >
          <div
            class="bg-darkBrown rounded-xl text-white text-xs font-semibold py-2 px-3"
          >
            Login as Admin
          </div>
          <AdminIcon :width="24" :height="24" class="px-2" />
        </router-link>
      </div>
      <div class="text-center">
        <div class="text-2xl font-semibold">
          Analisis Sentimen pada Aplikasi Steam
        </div>
        <div
          class="flex mt-8 w-6/12 px-4 py-2 border border-darkBrown rounded-lg items-center gap-3 m-auto"
        >
          <SearchIcon :width="20" :height="20" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="flex-1 focus:outline-none placeholder:text-darkBrown"
          />
        </div>
        <div class="mt-8 grid grid-cols-3 w-7/12 m-auto gap-4">
          <div class="border border-gray-400 col-span-1 rounded-lg">
            <div class="px-5 py-3 text-xl font-semibold border-b-2">
              Aplikasi
            </div>
            <div v-if="filteredApps.length > 0">
              <div
                class="px-5 py-3 even:bg-white odd:bg-semiLightBrown"
                v-for="(app, index) in filteredApps"
                :key="index"
              >
                <div
                  class="cursor-pointer hover:opacity-70"
                  @click="selectApp(app.app_id)"
                >
                  {{ app.app_name }}
                </div>
              </div>
            </div>
            <!-- Kalau Data Tidak Ada -->
            <div v-else class="px-5 py-3">Tidak ada Aplikasi</div>
          </div>
          <div class="border border-gray-400 col-span-2 rounded-lg">
            <div class="px-5 py-3 bg-semiLightBrown flex items-start gap-6">
              <button
                @click="setTab('review')"
                :class="{
                  'px-6 py-1 rounded-lg font-semibold': true,
                  'bg-darkBrown text-white hover:bg-yellow-700':
                    activeTab !== 'review',
                  'bg-white text-darkBrown hover:bg-neutral-100':
                    activeTab === 'review',
                }"
              >
                Review
              </button>
              <button
                @click="setTab('analisis')"
                :class="{
                  'px-6 py-1 rounded-lg font-semibold': true,
                  'bg-darkBrown text-white hover:bg-yellow-700':
                    activeTab !== 'analisis',
                  'bg-white text-darkBrown hover:bg-neutral-100':
                    activeTab === 'analisis',
                }"
              >
                Analisis
              </button>
            </div>

            <!-- Untuk Review -->
            <div
              v-if="isLoadingComplete"
              class="flex justify-center items-center mt-5"
            >
              Loading..
            </div>
            <div v-else>
              <div
                class="text-start py-4 px-6"
                v-if="selected_app != null && activeTab === 'review'"
              >
                <p class="font-bold font-xl">{{ app_name }}</p>
                <div v-if="not_null_review">
                  <ReviewCard
                    v-for="(app, index) in review_app"
                    :key="index"
                    :review="app.review"
                    :voted_up="app.voted_up"
                  />
                </div>
                <div class="mt-4" v-else>Tidak ada Review</div>
              </div>

              <!-- Untuk Analisis -->
              <div>
                <div
                  class="text-start py-4 px-6"
                  v-if="selected_app != null && activeTab === 'analisis'"
                >
                  <p class="font-bold font-xl">{{ app_name }}</p>
                  <ReviewCard
                    v-if="not_null_analisis"
                    :percentage="analisis_app.percentage"
                    :voted_up="analisis_app.voted_up"
                    :review="analisis_app.summary"
                  />
                  <div class="mt-4" v-else>Tidak ada Summary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Axios from "axios";
import AdminIcon from "../assets/icon/AdminIcon.vue";
import SearchIcon from "../assets/icon/SearchIcon.vue";
import LoadingIcon from "../assets/icon/LoadingIcon.vue";
import ReviewCard from "../components/ReviewCard.vue";

export default {
  name: "HomePage",
  components: { AdminIcon, SearchIcon, ReviewCard, LoadingIcon },
  data() {
    return {
      selected_app: null,
      apps: [],
      activeTab: "review",
      review_app: [],
      analisis_app: [],
      not_null_analisis: false,
      not_null_review: false,
      searchQuery: "",
      isLoading: true,
      isLoadingComplete: false,
    };
  },
  computed: {
    app_name() {
      return this.selected_app === null
        ? "Tidak ada Judul"
        : this.apps.find((app) => app.app_id === this.selected_app).app_name;
    },
    filteredApps() {
      return this.apps.filter((app) =>
        app.app_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    this.fetchDataSteam();
  },
  methods: {
    fetchDataSteam() {
      this.isLoading = true;
      Axios.get(`http://localhost:8080/steam`)
        .then((response) => {
          this.apps = response.data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },
    getReview(id) {
      this.isLoadingComplete = true;
      Axios.get(`http://localhost:8080/steam/reviews/${id}`)
        .then((response) => {
          if (response.data.data.length == 0) {
            this.not_null_review = false;
          } else {
            this.not_null_review = true;
          }
          this.review_app = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
      this.getAnalisis(id);
    },
    getAnalisis(id) {
      Axios.post(`http://localhost:8080/steam/analyze/${id}`)
        .then((response) => {
          this.analisis_app = response.data.data;
          this.not_null_analisis = true;
          this.isLoadingComplete = false;
        })
        .catch((error) => {
          this.analisis_app = [];
          this.not_null_analisis = false;
          this.isLoadingComplete = false;
          console.error(error);
        });
    },
    selectApp(id) {
      this.selected_app = id;
      this.getReview(id);
    },
    setTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
  
<style>
</style>