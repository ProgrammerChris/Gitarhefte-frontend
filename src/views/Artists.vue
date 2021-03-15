<template>
  <h2>Artister</h2>
  <div id="loader" v-if="loading"></div>
  <ol v-if="loaded">
    <li v-for="artist in artists" :key="artist">
      <Artist :artist="artist"/>
    </li>
  </ol>
</template>

<script>
import Artist from '@/components/Artist.vue';

var API = 'https://api.gitarhefte.no/api';

export default {
  name: 'Artister',
  data() {
    return {
      loading: true,
      loaded: !this.loading,
      artists: []
    }
  },
  mounted() {
    if (!this.$store.getters.getDataState) {
      this.fetchFromAPI()
    } else {
      this.fetchFromStorage()
    }
  },
  methods: {
    fetchFromAPI() {
      fetch(API)
      .then(response => {
        this.loading = false
        return response.json()
      })
      .then(data => {
        this.artists = Object.keys(data)
        sessionStorage.setItem('data', JSON.stringify(data))
        this.$store.dispatch('updateHaveData')
      })
    },
    fetchFromStorage() {
      this.loading = false
      this.artists = Object.keys(JSON.parse(sessionStorage.getItem('data')))
    }
  },
  components: {
    Artist
  }
}
</script>

<style>
ol {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 10em;
}
#loader {
  border: 10px solid var(--light);
  border-top: 10px solid var(--egg-yellow); 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>