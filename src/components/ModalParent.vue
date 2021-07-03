<template>
  <div class="modal-parent">
    <button @click="showModal">open modal</button>
    <ModalChild v-if="modalFlag" @close="closeModal">
    </ModalChild>

    <div v-for="task in tasks">
      <button @click="showTaskModal(task)">open {{ task.id }} task</button>
      <ModalTaskChild :task="task" @close="closeTaskModal"></ModalTaskChild>
    </div>
  </div>
</template>

<script>
import ModalChild from '@/components/ModalChild'
import ModalTaskChild from '@/components/ModalTaskChild'

export default {
  name: 'ModalParent',
  components: {
    ModalChild,
    ModalTaskChild
  },
  data () {
    return {
      modalFlag: false,
      tasks: [
        { id: 'a', active: true },
        { id: 'b', active: false }
      ]
    }
  },
  methods: {
    showModal: function () {
      this.modalFlag = true
    },
    closeModal: function () {
      this.modalFlag = false
    },
    showTaskModal: function (task) {
      task.active = true
    },
    closeTaskModal: function (task) {
      task.active = false
    }
  }
}
</script>

<style scoped>
</style>
