<template>
  <div class="mt-3">
    <div class="border border-darkBrown rounded-lg">
      <div class="border-b-2">
        <div
          class="grid grid-cols-12 bg-darkBrown rounded-lg rounded-b-0 py-3 px-6 items-center"
        >
          <div class="col-span-2" v-if="voted_up == true">
            <RecommendedIcon :width="35" :height="35" />
          </div>
          <div class="col-span-2" v-else>
            <NotRecommendedIcon :width="35" :height="35" />
          </div>
          <div v-if="voted_up == true" class="col-span-5 text-white text-md">
            Recommended
          </div>
          <div class="col-span-5 text-white text-md" v-else>
            Not Recommended
          </div>
          <div
            class="col-span-5 text-right text-white text-md font-bold"
            v-if="percentage !== undefined"
          >
            {{ percentage }}
          </div>
        </div>
      </div>
      <div class="py-3">
        <div
          v-if="percentage !== undefined"
          class="max-h-60 text-justify px-5 overflow-y-auto"
        >
          <span v-for="(data, index) in review" :key="index">
            <li>
              {{ data }}
            </li>
          </span>
        </div>
        <div class="max-h-60 text-justify px-5 overflow-y-auto" v-else>
          {{ review }}
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import RecommendedIcon from "../assets/icon/RecommendedIcon.vue";
import NotRecommendedIcon from "../assets/icon/NotRecommendedIcon.vue";
export default {
  name: "CardReview",
  components: { RecommendedIcon, NotRecommendedIcon },
  props: {
    voted_up: { type: Boolean, required: true },
    review: { type: String, required: true },
    percentage: { type: Number, required: false, default: undefined },
  },
};
</script>

<style>
</style>