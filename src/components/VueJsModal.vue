<template>
  <div>
    <button @click="show">show</button>
    <modal name="hello-world" @before-open="beforeOpen">
      HelloWorld
    </modal>
  </div>
</template>

<script>
import Vue from 'vue'
import VModal from 'vue-js-modal'
Vue.use(VModal)

export default {
  name: 'VueJsModal',
  components: {
    VModal
  },
  data () {
    return {
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world')
    },
    beforeOpen () {
      console.log('before open')
    }
  }
}
</script>

<style scoped>
</style>
