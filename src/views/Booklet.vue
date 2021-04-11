<template>
  <div>
    <h2>Booklet title</h2>
    <ul v-for="song in booklet" :key="song">

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Booklets',
  data() {
    return {
      booklet: [] //Get songs from sessionStorage
    }
  },
}
</script>

<style>

</style>