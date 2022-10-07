<script>
import carouselItemComponent from "./carouselItemComponent.vue";
export default {
  components: { carouselItemComponent },
  name: "carouselComponent",
  props: {
    images: Array,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.images.length - 1) {
        return (this.currentSlide = 0);
      }
      this.currentSlide++;
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
  },
};
</script>

<template>
  <div class="carousel__wrapper">
    <div
      class="carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlide + '%' }"
    >
      <carouselItemComponent
        v-for="image in images"
        :key="image.key"
        :image="image.name"
      />
    </div>
    <div class="carousel__buttons">
      <button
        :disabled="currentSlide === 0"
        class="carousel__prev button"
        @click="prevSlide"
      >
        ←
      </button>
      <button class="carousel__next button" @click="nextSlide">→</button>
    </div>
  </div>
</template>

<style>
.carousel__wrapper {
  max-width: 280px;
  margin: 0 auto;
  overflow: hidden;
}
.carousel {
  display: inline-flex;
  max-height: 160px;
  transition: all ease 0.5s;
}
.carousel__buttons {
  display: flex;
  justify-content: space-between;
}

.button {
  background: none;
  border: none;
  font-size: 40px;
  color: #000;
  cursor: pointer;
  transition: 0.15s linear;
  user-select: none;
}
.button:hover {
  transform: scale(1.1);
}
.button:disabled {
  color: #fff;
  pointer-events: none;
}
</style>
