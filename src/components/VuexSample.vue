<template>
  <div class="vuex-sample">
    <button @click="inc">+</button>
    {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VuexSample',
  components: {
  },
  data () {
    return {
    }
  },
  computed: mapState({
    count: state => state.count,
  }),
  methods: {
    inc: function () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>
</style>
