<template>
  <nav class="app-menu nav">
  <div class="nav-left">
    <a class="nav-item">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
    </a>
  </div>

  <div class="nav-center">
    <a class="nav-item">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a class="nav-item">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
  </div>

  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span class="nav-toggle" v-bind:class="{ 'is-active': isActive }" v-on:click="toggleActive">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">

    <a class="nav-item" v-on:click="collapse" v-for="link in links">
      <router-link :to="{ name: link.name }">{{link.title}}</router-link>
    </a>

    <span class="nav-item">
      <a class="button" >
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Tweet</span>
      </a>
      <a class="button is-primary">
        <span class="icon">
          <i class="fa fa-download"></i>
        </span>
        <span>Download</span>
      </a>
    </span>
  </div>
</nav>
</template>

<style scoped>

</style>

<script>
export default {
  data: () => ({
    links: [
      {
        title: "Home",
        name: "home"
      },
      {
        title: "Test",
        name: "test"
      }
    ],
    isActive: true
  }),
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    collapse() {
      this.isActive = false;
    }
  }
}

for (int i = 0; i++)
{

}

</script>
