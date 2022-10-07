<script>
import popupComponent from "./popupComponent.vue";
import carouselComponent from "./carouselComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cardItem",
  components: { popupComponent, carouselComponent },
  computed: {
    ...mapGetters(["GET_ORDER_VALUES", "GET_LOADING_VALUE"]),
  },
  data() {
    return {
      isLoading: false,
      show: false,
    };
  },
  props: {
    title: String,
    imageUrl: String,
    allImages: Array,
    oldPrice: String,
    newPrice: String,
    description: String,
    saled: Boolean,
    item: Object,
    id: Number,
  },
  methods: {
    ...mapActions([
      "ACTION_ADD_ITEM",
      "ACTION_REMOVE_ITEM",
      "ACTION_INITIALISE_STORE",
    ]),
    onAddClick(item) {
      this.isLoading = true;
      setTimeout(() => {
        this.ACTION_ADD_ITEM(item);
        this.isLoading = false;
      }, 2000);
    },
    onRemoveClick(id) {
      this.ACTION_REMOVE_ITEM(id);
    },
    onPopupClick() {
      this.show = !this.show;
    },
  },
  beforeMount() {
    this.ACTION_INITIALISE_STORE();
  },
};
</script>
<template>
  <popupComponent :show="show">
    <template v-slot:header>
      <span @click="onPopupClick">Закрыть</span>
    </template>
    <template v-slot:body>
      <carouselComponent :images="allImages" />

      <h3 class="modal-title">{{ title }}</h3>
      <p>{{ description }}</p>
    </template>
    <template v-slot:footer>
      <b>Цена: {{ newPrice }}</b>
    </template>
  </popupComponent>

  <div class="item" :class="{ saled: saled }">
    <img @click="onPopupClick" class="item__image" :src="imageUrl" alt="item" />
    <div class="item__info">
      <h2 class="item__title">
        {{ title }}
      </h2>
      <s>{{ oldPrice }}</s>
      <span class="item__price">{{ newPrice }}</span>
      <button
        @click="onAddClick(item)"
        v-if="!saled && !GET_ORDER_VALUES.some((order) => order.id == id)"
        :disabled="isLoading"
        class="item__button"
        type="button"
      >
        <span v-if="!isLoading">Купить</span>
        <span v-else><i class="fa fa-spinner fa-spin"></i>Купить</span>
      </button>
      <button
        @click="onRemoveClick(id)"
        v-else-if="!saled"
        class="item__button inbasket"
        type="button"
      >
        <img
          class="item__button--img"
          src="/img/inBasketImg.svg"
          alt="inBasket"
        />
        В корзине
      </button>
    </div>
  </div>
</template>

<style>
.item {
  max-width: 280px;
  max-height: 328px;
  border: 1px solid #e1e1e1;
}

.item:not(:last-child) {
  margin-right: 32px;
}

.item__image {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.item__info {
  position: relative;
  padding: 13px 23px 23px 24px;
}

.item__title {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 22px;
  color: #343030;
}

.item s {
  display: block;
  min-width: 80.72px;
  min-height: 18px;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #a0a0a0;
}

.item__price {
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #343030
}

.item__button {
  cursor: pointer;
  position: absolute;
  top: 89px;
  left: 138px;
  background-color: #403432;
  padding: 14px 31px 13px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  border: none;
  color: #f4f6f9;
  transition: 0.2s linear;
}

.item__button:disabled {
  background-color: #c1b4b1;
}

.item__button:hover {
  background-color: #776763;
  cursor: pointer;
}

.item__button i {
  margin-right: 1px;
}

.inbasket {
  padding: 13px 9px 12px 9px;
  background-color: #5b3a32;
}

.item__button--img {
  display: inline-block;
  margin-right: 4px;
}
</style>
