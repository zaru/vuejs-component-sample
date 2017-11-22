<template>
  <div>
    <button @click="create">create</button>

    <div id="replace-child">
      <p>child space</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import DynamicComponentChild from '@/components/DynamicComponentChild'

export default {
  name: 'DynamicComponent',
  components: {
    DynamicComponentChild
  },
  data () {
    return {
    }
  },
  mounted: function () {
    var child = new Vue(DynamicComponentChild).$mount('#replace-child')
    child.$on('click', (event) => {
    })
    this.$el.appendChild(child.$el)
  },
  methods: {
    create: function () {
      var child = new Vue(DynamicComponentChild).$mount()
      child.$on('click', (event) => {
      })
      this.$el.appendChild(child.$el)
    }
  }
}
</script>

<style scoped>
</style>
