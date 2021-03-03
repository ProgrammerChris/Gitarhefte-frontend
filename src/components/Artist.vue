<template>
  <router-link :to="`/artister/${artist}`">{{artist}}</router-link>
</template>

<script>
export default {
  name: 'Artist',
  props: {
    artist: String
  }
}
</script>

<style>

</style>