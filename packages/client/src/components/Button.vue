<template>
  <button
    @click="$emit('copy')"
    class="
      inline-flex
      items-center
      px-4
      py-2
      ml-2
      font-bold
      text-gray-800
      bg-gray-300
      rounded
      hover:bg-gray-400
    "
  >
    <slot><MdiContentCopyIcon /></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MdiContentCopyIcon from './icons/MdiContentCopyIcon.vue'

export default defineComponent({
  name: 'Button',
  components: {
    MdiContentCopyIcon,
  },
})
</script>
