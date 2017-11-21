<template>
  <transition name="fade">
    <div>
      <header>
        <slot name="header">
          <h1>default header</h1>
        </slot>
      </header>
      <main>
        <slot name="main">
          <p>default main</p>
        </slot>
      </main>
      <footer>
        <slot name="footer">
          <p>default footer</p>
        </slot>
      </footer>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'ModalBase',
  props: [
  ],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
