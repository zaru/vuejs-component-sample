<template>
  <div class="child">
    <h2>Child component</h2>
    <p>From parent: {{ parentToChild }}</p>
    <p>From parent: {{ dynamicParentToChild }}</p>
    <p>Sync parent: {{ syncParentChild }}</p>
    <ul>
      <li><button type="button" v-on:click="childCountUp">count up</button></li>
      <li><button type="button" v-on:click="childSyncCountUp">sync count up</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: [
    'parentToChild',
    'dynamicParentToChild',
    'syncParentChild'
  ],
  data () {
    return {
    }
  },
  methods: {
    childCountUp: function (e) {
      this.$emit('child-to-parent')
    },
    childSyncCountUp: function (e) {
      var newCount = this.syncParentChild + 1
      this.$emit('update:syncParentChild', newCount)
    }
  }
}
</script>

<style scoped>
</style>
