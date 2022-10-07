<script>
export default {
  name: "footerComponent",
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item"><a href="#">Каталог</a></li>
            <li class="footer__item"><a href="#">Доставка</a></li>
            <li class="footer__item"><a href="#">Оплата</a></li>
            <li class="footer__item"><a href="#">Контакты</a></li>
            <li class="footer__item"><a href="#">О компании</a></li>
            <li class="footer__item">
              <img
                class="footer__image"
                src="/img/phoneImg.svg"
                alt="phone"
              /><a href="tel:+78125555555">+7 (812) 555-55-55</a>
            </li>
            <li class="footer__item">
              <img class="footer__image" src="/img/geoImg.svg" alt="geo" /><span
                >г. Санкт-Петербург, ул. Ефимова, 3</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #eceaea;
  margin-top: auto;
}
.footer__list {
  display: flex;
}
.footer__inner {
  padding: 39px 0 37px 38px;
}
.footer__item {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
.footer__item:not(:last-child) {
  margin-right: 48px;
}
.footer__item:nth-child(4) {
  margin-left: 2px;
}
.footer__item:nth-child(5) {
  word-spacing: 4px;
  margin-right: 127px;
}
.footer__item:last-child {
  margin-left: 7px;
}
.footer__item a {
  color: #555555;
  text-decoration: none;
}
.footer__item span {
  color: #555555;
}

.footer__image {
  margin-right: 9px;
}

@media (max-width: 1200px) {
  .footer__item:not(:last-child) {
    margin-right: 10px;
  }
  .footer__item:nth-child(5) {
    word-spacing: 0;
  }
  .footer__item {
    font-size: 14px;
  }
  .footer__list {
    justify-content: space-between;
  }
}
@media (max-width: 900px) {
  .footer__inner {
    flex-direction: column;
    padding: 22px;
  }
  .footer__item:not(:last-child) {
    margin-right: 10px;
  }
  .footer__item:nth-child(5) {
    word-spacing: 0;
  }
  .footer__item {
    font-size: 11px;
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 768px;
  }
  .footer__list {
    flex-wrap: wrap;
  }
}
@media (max-width: 559px) {
  .footer__inner {
    padding: 10px;
  }
  .footer__nav {
    flex-direction: column;
  }
  .footer__item {
    margin: 0;
    margin-bottom: 5px;
  }
  .footer__item:last-child {
    margin-left: 0;
  }
}
@media (max-width: 368px) {
  .container {
    max-width: 368px;
  }
  .footer__inner {
    padding: 0;
  }
}
@media (max-width: 340px) {
  .container {
    max-width: 340px;
  }
  .footer__list {
    justify-content: center;
  }
}
</style>
