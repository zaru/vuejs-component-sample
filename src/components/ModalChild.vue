<template>
  <transition name="fade">
    <div>
      <h1>Child</h1>
      <slot name="content">default content</slot>
      <button @click="$emit('close')">close modal</button>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'ModalChild',
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
