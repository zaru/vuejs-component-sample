<template>
  <div>
    <div>
      <h3>Simple Modal</h3>
      <ModalSimple />
    </div>

    <div>
      <h3>Form Modal</h3>
      <ModalPost
        init-title="foo bar baz"
        @afterSubmitSuccess="afterSubmitSuccess"
        @afterSubmitError="afterSubmitError"
      >
      </ModalPost>
    </div>
  </div>
</template>

<script>
import ModalSimple from '@/components/ModalSimple'
import ModalPost from '@/components/ModalPost'

export default {
  name: 'ModalSample',
  components: {
    ModalSimple,
    ModalPost
  },
  data () {
    return {
    }
  },
  methods: {
    afterSubmitSuccess: function () {
      console.log('afterSubmitSuccess')
    },
    afterSubmitError: function () {
      console.log('afterSubmitError')
    }
  }
}
</script>

<style scoped>
</style>
