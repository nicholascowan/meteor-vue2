<template>
  <div class="home">
    <h1>Welcome {{name}}</h1>
    <p>Create awesome apps with vuejs &amp; meteor! <a href="https://github.com/Akryum/meteor-vue-component">More info</a></p>

  </div>

</template>

<style scoped>
.home {
  text-align: center;
}

img.logo {
  max-width: 101px;
  margin: 12px;
}
</style>

<script>
  export default {
    data: () => ({
      name: "Test"
    })
  }
</script>
