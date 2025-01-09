<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 46 42"
    fill="none"
  >
    <path
      d="M29.2727 0H10.4545C8.71909 0 7.23454 1.05 6.60727 2.562L0.292727 17.367C0.104545 17.85 0 18.354 0 18.9V23.1C0 25.41 1.88182 27.3 4.18182 27.3H17.3755L15.3891 36.897L15.3264 37.569C15.3264 38.43 15.6818 39.228 16.2464 39.795L18.4627 42L32.2418 28.161C32.9945 27.405 33.4545 26.355 33.4545 25.2V4.2C33.4545 1.89 31.5727 0 29.2727 0ZM37.6364 0V25.2H46V0H37.6364Z"
      fill="white"
    />
  </svg>
</template>

<script>
export default {
  name: "NotRecommendedIcon",
  props: {
    width: {
      type: Number,
      default: 46,
    },
    height: {
      type: Number,
      default: 42,
    },
  },
};
</script>

<style>
</style>