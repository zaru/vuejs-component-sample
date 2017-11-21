<template>
  <div class="modal-parent">
    <button @click="showModal">open modal</button>
    <ModalChild v-if="modalFlag" @close="closeModal">
    </ModalChild>
  </div>
</template>

<script>
import ModalChild from '@/components/ModalChild'

export default {
  name: 'ModalParent',
  components: {
    ModalChild
  },
  data () {
    return {
      modalFlag: false
    }
  },
  methods: {
    showModal: function () {
      this.modalFlag = true
    },
    closeModal: function () {
      this.modalFlag = false
    }
  }
}
</script>

<style scoped>
</style>
