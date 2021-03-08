<template>
    <div class="artist">
      <router-link :to="'/artister/' + artist">
        <h3><strong>{{ artist }}</strong></h3>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Artist',
  props: {
    artist: String
  }
}
</script>

<style scoped>
.artist {
  background-color: var(--egg-yellow);
  max-width: 25em;
  min-width: 20em;
  padding: .2em;
  margin: .5em;
  border-radius: 30px; 
}
.artist:hover {
  font-size: 1.1em;
  margin: .25em;
}
</style>