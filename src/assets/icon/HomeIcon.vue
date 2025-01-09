<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 48 40"
    fill="none"
  >
    <path
      d="M19 39.6667V25.6667H28.5V39.6667H40.375V21H47.5L23.75 0L0 21H7.125V39.6667H19Z"
      fill="#58493C"
    />
  </svg>
</template>

<script>
export default {
  name: "HomeIcon",
  props: {
    width: {
      type: Number,
      default: 48,
    },
    height: {
      type: Number,
      default: 40,
    },
  },
};
</script>

<style>
</style>