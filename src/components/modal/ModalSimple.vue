<template>
  <div>
    <modal
      ref='modal'
      @beforeOpen='beforeOpen'
      @afterOpen='afterOpen'
      @beforeClose='beforeClose'
      @afterClose='afterClose'
    >
      <p>main content</p>

      <div slot='header'>
        <h3>modal header</h3>
      </div>

      <div slot='footer'>
        <button @click='close'>close</button>
      </div>
    </modal>
    <button @click='open'>open</button>
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
  beforeCreate: function () {
    console.log('beforeCreate')
    console.log(this.$refs)
  },
  created: function () {
    console.log('created')
    console.log(this.$refs)
  },
  beforeMount: function () {
    console.log('beforeMount')
    console.log(this.$refs)
  },
  mounted: function () {
    // ここで初めて refs が参照できることに注意
    console.log('mounted')
    console.log(this.$refs)
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
    console.log(this.$refs)
  },
  updated: function () {
    console.log('updated')
    console.log(this.$refs)
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
    console.log(this.$refs)
  },
  destroyed: function () {
    console.log('destroyed')
    console.log(this.$refs)
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
