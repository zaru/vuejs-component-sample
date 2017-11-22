<template>
  <div class="post">
    <ul class="action" v-if="activeEditor != post">
      <li><button @click="switchEditor(post)">edit</button></li>
      <li><button @click="deletePost(post)">delete</button></li>
    </ul>
    <div v-if="activeEditor == post">
      <h3><input v-model="post.title"></h3>
      <p><textarea v-model="post.content"></textarea></p>
      <p><button @click="updatePost(post)">update</button></p>
      <p><button @click="updateCancelPost">cancel</button></p>
    </div>
    <div v-else>
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  components: {
  },
  props: {
    post: Object,
    activeEditor: Object
  },
  data () {
    return {
    }
  },
  methods: {
    switchEditor: function (post) {
      this.$emit('switchEditor', post)
    },
    deletePost: function (post) {
      // do ajax
      this.$emit('deletePost', post)
    },
    updatePost: function (post) {
      // do ajax
      this.$emit('updatePost', post)
    },
    updateCancelPost: function () {
      this.$emit('updateCancelPost')
    }
  }
}
</script>

<style scoped>
.post {
  position: relative;
  border: 1px solid #ccc;
  margin: 10px;
}
.action {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 10px;
}
.action li {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
input, textarea {
  width: 300px;
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
