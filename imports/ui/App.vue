<template>
  <div class="app container">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from '/imports/ui/AppMenu.vue'

function x () {
  return 1
}

export default {
  components: {
    AppMenu
  }
}

</script>
