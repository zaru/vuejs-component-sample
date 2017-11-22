<template>
  <div>
    <modal
      ref="modal"
      @beforeOpen="beforeOpen"
      @afterOpen="afterOpen"
      @beforeClose="beforeClose"
      @afterClose="afterClose"
    >
      <p>title <input v-model="title"></p>
      <button @click="submit">post</button>
    </modal>
    <button @click="open">open</button>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import axios from 'axios'

export default {
  name: 'ModalPost',
  components: {
    Modal
  },
  props: {
    initTitle: {
      type: String
    }
  },
  data () {
    return {
      title: this.initTitle
    }
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
    },
    submit: function () {
      axios.post('/', {
        title: this.title
      })
      .then(response => {
        console.log(response)
        this.$emit('afterSubmitSuccess')
      })
      .catch(error => {
        console.log(error)
        this.$emit('afterSubmitError')
      })
    }
  }
}
</script>

<style scoped>
</style>
