<template>
    <header class="header">
      <div class="carousel">
        <div
          class="carousel__slides"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="carousel__slide"
            :style="{ backgroundImage: `url(${image})` }"
          ></div>
        </div>
  
        <button class="carousel__button carousel__button--left" @click="prevSlide">
          &#10094;
        </button>
        <button class="carousel__button carousel__button--right" @click="nextSlide">
          &#10095;
        </button>
  
        <div class="carousel__indicators">
          <span
            v-for="(image, index) in images"
            :key="index"
            :class="['carousel__indicator', { 'carousel__indicator--active': index === currentSlide }]"
            @click="setSlide(index)"
          ></span>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const images = ref([
    'https://via.placeholder.com/1200x500/FF5733/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/1200x500/33C3FF/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/1200x500/85FF33/FFFFFF?text=Slide+3',
  ]);
  
  const currentSlide = ref(0);
  const slideInterval = ref(null);
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % images.value.length;
  };
  
  const prevSlide = () => {
    currentSlide.value =
      (currentSlide.value - 1 + images.value.length) % images.value.length;
  };
  
  const setSlide = (index) => {
    currentSlide.value = index;
  };
  
  const startAutoSlide = () => {
    slideInterval.value = setInterval(nextSlide, 3000);
  };
  
  const stopAutoSlide = () => {
    if (slideInterval.value) {
      clearInterval(slideInterval.value);
      slideInterval.value = null;
    }
  };
  
  onMounted(() => {
    startAutoSlide();
  });
  
  onBeforeUnmount(() => {
    stopAutoSlide();
  });
  </script>
  
  <style lang="scss" scoped>
  /* Variables */
  $header-bg-color: #333;
  $header-text-color: #fff;
  $button-color: rgba(0, 0, 0, 0.5);
  $button-hover-color: rgba(0, 0, 0, 0.8);

  .header {
    color: $header-text-color;
    text-align: center;
    // padding: 2rem;
    background-color: $header-bg-color;
  
    &__content {
      margin-bottom: 2rem;
    }
  
    &__title {
      font-size: 2rem;
      margin: 0;
    }
  
    &__subtitle {
      font-size: 1.25rem;
      margin: 0;
    }
  }
  
  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
  
    &__slides {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }
  
    &__slide {
      min-width: 100%;
      height: 350px;
      background-size: cover;
      background-position: center;
    }
  
    &__button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: $button-color;
      border: none;
      padding: 0.8rem;
      color: $header-text-color;
      font-size: 1.5rem;
      cursor: pointer;
      transition: background-color 0.3s;
  
      &--left {
        left: 10px;
      }
  
      &--right {
        right: 10px;
      }
  
      &:hover {
        background-color: $button-hover-color;
      }
    }
  
    &__indicators {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
    }
  
    &__indicator {
      width: 10px;
      height: 10px;
      background-color: $button-color;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s;
  
      &--active {
        background-color: $header-text-color;
      }
    }
  }
  
  @media (max-width: 768px) {
    .header__title {
      font-size: 1.5rem;
    }
  
    .header__subtitle {
      font-size: 1rem;
    }
  
    .carousel__slide {
      height: 200px;
    }
  }
  
  @media (max-width: 480px) {
    .header__title {
      font-size: 1.25rem;
    }
  
    .header__subtitle {
      font-size: 0.875rem;
    }
  
    .carousel__slide {
      height: 150px;
    }
  }
  </style>
  