<template>
  <div>
    <modal
      ref="modal"
      @beforeOpen="beforeOpen"
      @afterOpen="afterOpen"
      @beforeClose="beforeClose"
      @afterClose="afterClose"
    >
      <p>main content</p>

      <div slot="header">
        <h3>modal header</h3>
      </div>

      <div slot="footer">
        <button @click="close">close</button>
      </div>
    </modal>
    <button @click="open">open</button>
  </div>
</template>

<script>
import Modal from '@/components/modal/Modal'
export default {
  name: 'ModalSimple',
  components: {
    Modal
  },
  data () {
    return {
      modalActive: true
    }
  },
  mounted: function () {
  },
  methods: {
    beforeOpen: function (e) {
      console.log('before open')
    },
    afterOpen: function (e) {
      console.log('after open')
    },
    beforeClose: function (e) {
      console.log('before close')
    },
    afterClose: function (e) {
      console.log('after close')
    },
    open: function () {
      this.$refs.modal.open()
    },
    close: function () {
      this.$refs.modal.close()
    }
  }
}
</script>

<style scoped>
</style>
