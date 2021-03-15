<template>
  <h2>{{ artist }}</h2>
  <ol>
    <li v-for="song in getSongs" :key="song">
      <p>{{ song }}</p>
    </li>
  </ol>
</template>

<script>
export default {
  name: "Songs",
  props: {
    artist: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      songs: null
    }
  },
  computed: {
    getSongs() { 
      return this.songs != null ? this.songs : []
    }
  },
  created() {
    this.songs = JSON.parse(sessionStorage.getItem('data'))[this.artist]["songs"]
  }
}
</script>

<style scoped>
h2 {
  color: var(--egg-yellow)
}

</style>