<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'ChosenSong',
  props: {
    artist: {
      type: String,
      required: true
    },
    song: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteFromBooklet() {
      console.log('deleted') // Delete from booklet and update sessionStorage
    }
  }
}
</script>

<style>

</style>