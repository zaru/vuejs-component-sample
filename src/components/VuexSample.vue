<template>
  <div class="vuex-sample">
    <button @click="inc">+</button>
    <p>{{ count }}</p>
    <p>{{ myCount }}</p>
    <p>{{ this.$store.getters.myCount }}</p>
    <p>{{ this.$store.getters.whoCount('your') }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

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
    ...mapGetters([
      'myCount'
    ])
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
