<template>
  <div id="search-box">
    <input id="search-field" type="text">
    <button id="search-button" @click="search"></button>
  </div>
</template>

<script>
export default {
  methods: {
    search() {

    }
  }
}
</script>

<style>
#search-box {
  max-width: 25em;
  min-width: 20em;
  padding: 0;
  margin: auto;
}
#search-field {
  position: relative;
  background-color: var(--blackish);
  color: var(--light);
  border: 1px solid var(--egg-yellow);
  height: 3em;
  margin: auto;
  margin-top: 10em;
  margin-left: 2.5em;
  border-radius: 30px;
  outline: none;
  padding-left: 1em;
  padding-right: 3em;
  font-family: inherit;
  font-size: 1.2em;
}
#search-button {
  position: relative;
  top: .5em;
  right: 3.5em;
  height: 2.5em;
  width: 2.5em;
  cursor: pointer;
  background: url('../assets/search.svg');
  outline: none;
  border: none;
}

</style>