<template>
  <div class="parent">
    <h1>Parent</h1>
    <p>Counter {{ parentCounter }}</p>
    <p>Sync Counter {{ syncCounter }}</p>
    <p><button type="button" v-on:click="countUp">count up</button></p>
    <p><button type="button" v-on:click="syncCountUp">sync count up</button></p>
    <child
      parent-to-child="Hello child component"
      v-bind:dynamic-parent-to-child="parentCounter"
      v-on:child-to-parent="countUp"
      v-bind:sync-parent-child.sync="syncCounter"
      ></child>
  </div>
</template>

<script>
import Child from '@/components/Child'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data () {
    return {
      parentCounter: 0,
      syncCounter: 0
    }
  },
  methods: {
    countUp: function (e) {
      this.parentCounter += 1
    },
    syncCountUp: function (e) {
      this.syncCounter += 1
    }
  }
}
</script>

<style scoped>
</style>
