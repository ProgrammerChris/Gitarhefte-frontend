<template>
  <div>
    <h2>{{ artist }}</h2>
    <ol>
      <li v-for="song in getSongs" :key="song">
        <Song :song="song" :artist="artist"/>
      </li>
    </ol>
  </div>
</template>

<script>
import Song from '@/components/Song.vue';

export default {
  name: 'Songs',
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
  },
  components: {
    Song
  }
}
</script>

<style scoped>
h2 {
  color: var(--egg-yellow)
}
li {
  padding-bottom: 1em;
}
</style>