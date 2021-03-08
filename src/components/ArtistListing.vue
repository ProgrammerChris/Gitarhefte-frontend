<template>
  <router-link :to="'/artister/' + artist">
    <strong>{{ artist }}</strong>
  </router-link>
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
a {
  display: block;
  background-color: var(--egg-yellow);
  max-width: 25em;
  min-width: 20em;
  padding: 1em;
  margin: .5em;
  text-decoration: none;
  border-radius: 30px;
}
a:hover {
  font-size: 1.1em;
  margin: .32em;
}
</style>