<template>
  <div>
    <h3><input v-model="newTitle"></h3>
    <p><textarea v-model="newContent"></textarea></p>
    <p><button @click="createPost">create</button></p>

    <div v-for="post in posts">
      <Post
        :post="post"
        :activeEditor="activeEditor"
        @switchEditor="switchEditor"
        @deletePost="deletePost"
        @updatePost="updatePost"
        @updateCancelPost="updateCancelPost"
      >
      </Post>
    </div>
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
      var post = {
        id: this.latestID() + 1,
        title: this.newTitle,
        content: this.newContent
      }
      // do ajax
      this.posts.unshift(post)
      this.newTitle = ''
      this.newContent = ''
    },
    switchEditor: function (post) {
      this.activeEditor = post
    },
    deletePost: function (post) {
      this.posts.splice(this.posts.indexOf(post), 1)
    },
    updatePost: function (post) {
      this.activeEditor = null
      this.posts.splice(this.posts.indexOf(post), 1, post)
    },
    updateCancelPost: function () {
      this.activeEditor = null
    },
    latestID: function () {
      Math.max.apply(null, this.posts.map(function (o) { return o.id }))
    }
  }
}
</script>

<style scoped>
</style>
