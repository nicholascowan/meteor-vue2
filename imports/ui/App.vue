<template>
  <div class="app container">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from '/imports/ui/AppMenu.vue';

export default {
  components: {
    AppMenu
  },
  nada: function()   {
    return 1;
  }
}
</script>
