<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.5878 25.1572H26.781L26.1407 24.5397C28.3819 21.9325 29.7313 18.5477 29.7313 14.8656C29.7313 6.65523 23.076 0 14.8656 0C6.65523 0 0 6.65523 0 14.8656C0 23.076 6.65523 29.7313 14.8656 29.7313C18.5477 29.7313 21.9325 28.3819 24.5397 26.1407L25.1572 26.781V28.5878L36.5923 40L40 36.5923L28.5878 25.1572ZM14.8656 25.1572C9.17095 25.1572 4.57404 20.5603 4.57404 14.8656C4.57404 9.17095 9.17095 4.57404 14.8656 4.57404C20.5603 4.57404 25.1572 9.17095 25.1572 14.8656C25.1572 20.5603 20.5603 25.1572 14.8656 25.1572Z"
      fill="#7A601D"
    />
  </svg>
</template>

<script>
export default {
  name: "SearchIcon",
  props: {
    width: {
      type: Number,
      default: 40,
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