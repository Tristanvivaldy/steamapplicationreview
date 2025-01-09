<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="weight"
    :height="height"
    viewBox="0 0 32 32"
    fill="none"
  >
    <rect width="32" height="32" fill="url(#pattern0_31_598)" />
    <defs>
      <pattern
        id="pattern0_31_598"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_31_598" transform="scale(0.0104167)" />
      </pattern>
      <image
        id="image0_31_598"
        width="96"
        height="96"
        xlink:href="data:image/png;base64,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"
      />
    </defs>
  </svg>
</template>

<script>
export default {
  name: "AdminIcons",
  props: {
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
  },
};
</script>

<style>
</style>