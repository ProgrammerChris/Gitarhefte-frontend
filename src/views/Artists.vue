<template>
  <div>
    <ul>
      <li v-for="artist in artists" :key="artist.artist">
        <Artist :artist="artist.artist"/>
      </li>
    </ul>
  </div>
</template>

<script>
import artists from '@/data/artists';
import Artist from '@/components/Artist.vue';

export default {
  name: 'Artister',
  data() {
    return {
      artists: artists
    }
  },
  components: {
    Artist
  }

}
</script>

<style>

</style>