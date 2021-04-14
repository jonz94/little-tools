<template>
  <NumberConvertionTool />
  <ImageConvertionTool />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NumberConvertionTool from './components/NumberConvertionTool.vue';
import ImageConvertionTool from './components/ImageConvertionTool.vue';

export default defineComponent({
  name: 'App',
  components: {
    NumberConvertionTool,
    ImageConvertionTool,
  },
});
</script>
