<template>
  <div>
    <h3><input v-model="newTitle"></h3>
    <p><textarea v-model="newContent"></textarea></p>
    <p><button @click="createPost">create</button></p>

    <Post
      v-for="post in posts"
      :post="post"
      :key="post.id"
      :activeEditor="activeEditor"
      @switchEditor="switchEditor"
      @deletePost="deletePost"
      @updatePost="updatePost"
      @updateCancelPost="updateCancelPost"
      >
    </Post>
  </div>
</template>

<script>
import Post from '@/components/lists/Post'

export default {
  name: 'Lists',
  components: {
    Post
  },
  data () {
    return {
      posts: [],
      activeEditor: null,
      newTitle: '',
      newContent: ''
    }
  },
  created: function () {
    for (var i = 0; i < 5; i++) {
      var listID = i + 1
      var data = {
        id: listID,
        title: 'title ' + listID,
        content: 'content text. ' + listID
      }
      this.posts.push(data)
    }
  },
  methods: {
    createPost: function () {
      // 本来はここで ajax で返ってきたユニークなIDを使いたいがないので手製
      var newPost = {
        id: this.latestID() + 1,
        title: this.newTitle,
        content: this.newContent
      }
      console.log('create')
      console.log(newPost)
      // do ajax
      this.posts.unshift(newPost)
      this.newTitle = ''
      this.newContent = ''
    },
    switchEditor: function (post) {
      this.activeEditor = post
    },
    deletePost: function (post) {
      this.posts.splice(this.posts.indexOf(post), 1)
    },
    updatePost: function (post, newPost) {
      this.activeEditor = null
      this.posts.splice(this.posts.indexOf(post), 1, newPost)
    },
    updateCancelPost: function () {
      this.activeEditor = null
    },
    latestID: function () {
      return Math.max.apply(null, this.posts.map(function (o) { return o.id }))
    }
  }
}
</script>

<style scoped>
</style>
