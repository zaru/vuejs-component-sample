<template>
  <transition
    appear
    v-on:before-enter="beforeOpen"
    v-on:after-enter="afterOpen"
    name="modal"
  >
    <div class="modal" v-show="modalState" @click="close">
      <div class="modal-dialog" @click.stop>
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  components: {
  },
  props: {
  },
  data () {
    return {
      modalState: false
    }
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    beforeOpen: function (e) {
      this.$emit('beforeOpen', e)
    },
    afterOpen: function (e) {
      this.$emit('afterOpen', e)
    },
    open: function (e) {
      this.modalState = true
    },
    close: function (e) {
      this.$emit('beforeClose', e)
      this.modalState = false
      this.$emit('afterClose', e)
    }
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity .5s
}
.modal-enter, .modal-leave-to {
  opacity: 0
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  width: 80%;
  margin: 30px auto;
  position: relative;
  background-color: #fff;
  text-align: left;
}

header {
  padding: 10px;
}
header:empty {
  padding: 0;
}

main {
  padding: 10px;
}
main:empty {
  padding: 0;
}

footer {
  padding: 10px;
}
footer:empty {
  padding: 0;
}
</style>
