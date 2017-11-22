<template>
  <div>
    <h3><input v-model="newTitle"></h3>
    <p><textarea v-model="newContent"></textarea></p>
    <p><button @click="createPost">create</button></p>

    <div v-for="post in posts">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lists',
  components: {
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
      console.log(post)
      this.activeEditor = post
    },
    deletePost: function (post) {
      // do ajax
      this.posts.splice(this.posts.indexOf(post), 1)
    },
    updatePost: function (post) {
      this.activeEditor = null
      // do ajax
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
