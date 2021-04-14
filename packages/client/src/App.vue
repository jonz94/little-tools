<template>
  <NumberConvertionTool />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NumberConvertionTool from './components/NumberConvertionTool.vue';

export default defineComponent({
  name: 'App',
  components: {
    NumberConvertionTool,
  },
});
</script>
