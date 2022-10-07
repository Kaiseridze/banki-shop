<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "headerComponent",
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["GET_SEARCH_VALUE"]),
  },

  methods: {
    ...mapActions(["ACTION_SEARCH_VALUE"]),
    search(value) {
      this.ACTION_SEARCH_VALUE(value);
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <ul class="header__nav">
          <li class="header__item"><a href="#">Каталог</a></li>
          <li class="header__item"><a href="#">Доставка</a></li>
          <li class="header__item"><a href="#">Оплата</a></li>
          <li class="header__item"><a href="#">Контакты</a></li>
          <li class="header__item"><a href="#">О&nbsp;компании</a></li>
        </ul>
        <form v-on:submit.prevent="search(searchValue)" class="header__search">
          <input
            class="header__input"
            v-model="searchValue"
            placeholder="Поиск по названию картины"
            type="text"
          />
          <button type="submit" class="header__button">Найти</button>
        </form>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  border-bottom: 1px solid #e1e1e1;
}

.header__inner {
  display: flex;
  align-items: center;
  padding: 22px 38px;
  flex-wrap: wrap;
}

.header__nav {
  display: flex;
}

.header__item {
  margin-right: 48px;
  font-size: 14px;
  line-height: 21px;
}

.header__item a {
  color: #343030;
  text-decoration: none;
}

.header__input {
  width: 294px;
  padding: 13px 60px 14px 16px;
  border: #e1e1e1 1px solid;
  outline: none;
  background: none;
  font-size: 14px;
  line-height: 21px;
}

.header__input::placeholder {
  color: #9f9f9f;
  opacity: 0.6;
}

.header__button {
  background-color: #403432;
  padding: 13px 36px 14px 37px;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  border: none;
  color: #ffffff;
  transition: 0.2s linear;
}

.header__button:hover {
  background-color: #776763;
  cursor: pointer;
}

@media (min-width: 1200px) {
  .header__item:last-child {
    margin-right: 162px;
  }

  .header__item:nth-child(4) {
    margin-left: 2px;
  }
}

@media (max-width: 1200px) {
  .header__inner {
    flex-direction: column;
    padding: 22px;
  }
  .header__search {
    margin-top: 10px;
  }
  .header__item:last-child {
    margin: 0;
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 768px;
  }
  .header__search {
    display: flex;
    flex-direction: column;
  }
  .header__input {
    max-width: 294px;
    padding: 13px;
    font-size: 14px;
    line-height: 18px;
  }
}
@media (max-width: 559px) {
  .header__inner {
    padding: 10px;
  }
  .header__nav {
    flex-direction: column;
  }
  .header__item {
    margin: 0;
    margin-bottom: 5px;
  }
}
@media (max-width: 368px) {
  .container {
    max-width: 368px;
  }
  .header__inner {
    padding: 0;
  }
}
</style>
