<template>
  <div class="flex-col w-full md:flex md:flex-row md:min-h-screen">
    <SidebarMenu />

    <div class="flex flex-col justify-center w-full min-h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarMenu from './components/SidebarMenu.vue';

export default defineComponent({
  name: 'App',
  components: { SidebarMenu },
});
</script>
