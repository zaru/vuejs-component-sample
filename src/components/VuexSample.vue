<template>
  <div class="vuex-sample">
    <button @click="inc">+</button>
  </div>
</template>

<script>
export default {
  name: 'VuexSample',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    inc: function () {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style scoped>
</style>
