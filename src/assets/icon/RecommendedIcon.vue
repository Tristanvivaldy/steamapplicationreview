<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 42 38"
    fill="none"
  >
    <path
      d="M0 38H7.63636V15.2H0V38ZM42 17.1C42 15.01 40.2818 13.3 38.1818 13.3H26.1355L27.9491 4.617L28.0064 4.009C28.0064 3.23 27.6818 2.508 27.1664 1.995L25.1427 0L12.5809 12.521C11.8745 13.205 11.4545 14.155 11.4545 15.2V34.2C11.4545 36.29 13.1727 38 15.2727 38H32.4545C34.0391 38 35.3945 37.05 35.9673 35.682L41.7327 22.287C41.9045 21.85 42 21.394 42 20.9V17.1Z"
      fill="white"
    />
  </svg>
</template>

<script>
export default {
  name: "RecommendedIcon",
  props: {
    width: {
      type: Number,
      default: 42,
    },
    height: {
      type: Number,
      default: 38,
    },
  },
};
</script>

<style>
</style>