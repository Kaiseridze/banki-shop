<script>
export default {
  name: "carouselItemComponent",
  props: {
    image: String,
  },
};
</script>

<template>
  <div class="carousel__item">
    <img :src="image" alt="carousel item" />
  </div>
</template>

<style>
.carousel__item {
  user-select: none;
}
</style>
