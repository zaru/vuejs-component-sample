<template>
  <div class="child">
    <h2>Child component</h2>
    <p>From parent: {{ parentToChild }}</p>
    <p>From parent: {{ dynamicParentToChild }}</p>
    <p>Sync parent: {{ syncParentChild }}</p>
    <p>Child Only Text: {{ childOnlyText }}</p>
    <p>Share Text: {{ shareText }}</p>
    <ul>
      <li><button type="button" v-on:click="childCountUp">count up</button></li>
      <li><button type="button" v-on:click="childSyncCountUp">sync count up</button></li>
    </ul>
    <p><input v-model="childOnlyText"></p>
    <p><input v-bind:value="shareText" v-on:input="shareText = $event.target.value; updateShareText(shareText)"></p>
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
      childOnlyText: '',
      shareText: ''
    }
  },
  methods: {
    childCountUp: function (e) {
      this.$emit('child-to-parent')
    },
    childSyncCountUp: function (e) {
      var newCount = this.syncParentChild + 1
      this.$emit('update:syncParentChild', newCount)
    },
    updateShareText: function (value) {
      this.$emit('child-to-parent-args', value)
    }
  }
}
</script>

<style scoped>
</style>
