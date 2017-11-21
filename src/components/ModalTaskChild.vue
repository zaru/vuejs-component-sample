<template>
  <ModalBase>
    <p slot="header">Task ID = {{ task.id }}</p>
    <p slot="main">task {{ task.id}} is good.</p>
    <button slot="footer" @click="$emit('close', task)">close task</button>
  </ModalBase>
</template>

<script>
import ModalBase from '@/components/ModalBase'

export default {
  name: 'ModalTaskChild',
  props: [
    'task'
  ],
  components: {
    ModalBase
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
</style>
