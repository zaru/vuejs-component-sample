<template>
  <div class="post">
    <ul class="action" v-if="activeEditor != post">
      <li><button @click="switchEditor">edit</button></li>
      <li><button @click="deletePost">delete</button></li>
    </ul>
    <div v-if="activeEditor == post">
      <h3><input v-model="title"></h3>
      <p><textarea v-model="content"></textarea></p>
      <p><button @click="updatePost">update</button></p>
      <p><button @click="updateCancelPost">cancel</button></p>
    </div>
    <div v-else>
      <h3>{{ this.post.title }}</h3>
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
      title: '',
      content: ''
    }
  },
  mounted: function () {
    console.log('mounted')
    console.log(this.post.title)
    this.resetData()
  },
  methods: {
    resetData: function () {
      this.title = this.post.title
      this.content = this.post.content
    },
    switchEditor: function () {
      this.$emit('switchEditor', this.post)
    },
    deletePost: function () {
      // do ajax
      this.$emit('deletePost', this.post)
    },
    updatePost: function () {
      // do ajax
      // 本当は ajax で返ってきた JSON を新しい post として扱うが、ここでは手で deep copy
      var newPost = JSON.parse(JSON.stringify(this.post))
      newPost.title = this.title
      newPost.content = this.content
      this.$emit('updatePost', this.post, newPost)
    },
    updateCancelPost: function () {
      this.resetData()
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
