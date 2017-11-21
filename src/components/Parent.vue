<template>
  <div class="parent">
    <h1>Parent</h1>
    <p>Counter {{ parentCounter }}</p>
    <p>Sync Counter {{ syncCounter }}</p>
    <p><button type="button" v-on:click="countUp">count up</button></p>
    <p><button type="button" v-on:click="syncCountUp">sync count up</button></p>

    <p>Share Text {{ shareText }}</p>
    <child
      parent-to-child="Hello child component"
      v-bind:dynamic-parent-to-child="parentCounter"
      v-on:child-to-parent="countUp"
      v-on:child-to-parent-args="viewText"
      v-bind:sync-parent-child.sync="syncCounter"
      ></child>
    <reuse>
      <p slot="slot-foo">replaced slot-foo</p>
    </reuse>
  </div>
</template>

<script>
import Child from '@/components/Child'
import Reuse from '@/components/Reuse'

export default {
  name: 'Parent',
  components: {
    Child,
    Reuse
  },
  data () {
    return {
      parentCounter: 0,
      syncCounter: 0,
      shareText: ''
    }
  },
  methods: {
    countUp: function (e) {
      this.parentCounter += 1
    },
    syncCountUp: function (e) {
      this.syncCounter += 1
    },
    viewText: function (value) {
      this.shareText = value
    }
  }
}
</script>

<style scoped>
</style>
