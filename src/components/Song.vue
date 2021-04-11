<template>
  <div>
    <div class="song">
      <div class="song-title">{{ song }}</div>
      <div class="preview-song" @click="preview"><img src='../assets/preview.svg' alt="preview" height="25" width="25"></div>
      <div class="add-song" @click="addToBooklet"><img src='../assets/add_to_booklet.svg' alt="add-song" height="25" width="25"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
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
    addToBooklet() {
      // Add to booklet
    },
    preview() {
      // Download preview
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
}
.song {
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: 50px 50px;
}

.song-title {
  grid-column: span 2;
  background-color: #FEFEFE;
  border-radius: 10px 10px 0 0 ;
  margin-bottom: 2px;
}

.preview-song {
  width: 146px;
  grid-row: 2;
  background-color: #FFDF6C;
  margin-top: 2px;
  margin-right: 2px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.add-song {
  grid-row: 2;
  background-color: #FFDF6C;
  margin-top: 2px;
  margin-left: 2px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>