<template>
  <ModalBase>
    <button slot="footer" @click="$emit('close')">close modal</button>
  </ModalBase>
</template>

<script>
import ModalBase from '@/components/ModalBase'

export default {
  name: 'ModalChild',
  props: [
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
