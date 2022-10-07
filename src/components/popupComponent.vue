<script>
export default {
  name: "popupComponent",
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <transition v-if="show" name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> This is the default tile! </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  overflow: auto;
  border-radius: 15px;
}

.modal-header span {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: #343030;
}

.modal-title {
  margin: 20px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 27px;
  color: #343030;
}

.modal-header,
.modal-footer {
  padding: 15px;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  color: #343030;
}

.modal-body {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 10px;
  max-width: 500px;
  color: #343030;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
@media (max-width: 290px) {
  .modal-body {
    padding: 0;
  }
}
</style>
