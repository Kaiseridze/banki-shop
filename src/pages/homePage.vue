<script>
import cardComponent from "../components/cardComponent.vue";
import db from "../db/db.json";
import { mapGetters } from "vuex";
export default {
  components: { cardComponent },
  name: "homePage",
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapGetters(["GET_SEARCH_VALUE"]),
    onSearch() {
      return this.items.filter((item) =>
        item.title.toLowerCase().includes(this.GET_SEARCH_VALUE.toLowerCase())
      );
    },
  },
  methods: {
    getItems() {
      this.items = db;
    },
  },
  beforeMount() {
    this.getItems();
  },
};
</script>

<template>
  <main class="main">
    <div class="main__container">
      <div class="main__inner">
        <h1 class="main__title">Картины эпохи Возрождения</h1>
        <div class="main__items">
          <cardComponent
            v-for="item in onSearch"
            :key="item.key"
            :allImages="item.allImages"
            :description="item.description"
            :item="item"
            :id="item.id"
            :imageUrl="item.imageUrl"
            :title="item.title"
            :oldPrice="item.oldPrice"
            :newPrice="item.newPrice"
            :saled="item.saled"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.main__container {
  max-width: 1334px;
  min-height: 720px;
  margin: 0 auto;
}

.main__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin: 48px 0 38px 0;
  color: #343030;
}

.main__items {
  display: flex;
  flex-wrap: wrap;
}

.saled {
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
}

.saled .item__info span {
  margin-top: -6px;
}

@media (max-width: 768px) {
  .item:not(:last-child) {
    margin-right: 0;
  }
  .main__items {
    justify-content: center;
  }
}
</style>
