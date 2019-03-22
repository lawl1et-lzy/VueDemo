<template>
  <div>
    <input type="file" accept="image/*" id="image" @change="uploadImage">
  </div>
</template>

<script>
export default {
  name: 'Upload',
  methods: {
    uploadImage (event) {

    }
  }
}
</script>

<style scoped>
input{
  border: 1px solid black;
}
</style>
