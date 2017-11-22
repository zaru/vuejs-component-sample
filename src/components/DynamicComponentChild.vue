<template>
  <div class="child">
    <p>child</p>
    <button @click="destroy">destroy</button>
  </div>
</template>

<script>
export default {
  name: 'DynamicComponentChild',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    destroy: function (event) {
      console.log('destroy')
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
</style>
