<template>
  <div class="reuse">
    <h1>Reuse</h1>
    <slot name="slot-foo">default slot-foo</slot>
  </div>
</template>

<script>
export default {
  name: 'Reuse',
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
</style>
