<script setup>
  import { computed, ref } from 'vue'
  import OneDumbButton from './OneDumbButton.vue'

  // Props definition
  // They are passed as <ThreeDumbButtons direction="vertical" />
  const props = defineProps({
    direction: {
      default: "row"
    }
  })

  // Computed properties
  const directionClass = computed(() => {
    return `is-flex-direction-${props.direction}`
  })

  // Data for generating the buttons
  const buttons = ref([
    {prefix: "Hi, I'm button 1"},
    {prefix: "I'm right in the middle"},
    {prefix: "I don't care !"}
  ])

</script>

<template>
  
  <!-- Bulma CSS classes based on JS (computed) variables -->
  <div :class="['m-1', 'is-flex', 'is-justify-content-center', directionClass]">
    
    <!-- Dynamically generate buttons based on JS variables -->
    <OneDumbButton
      v-for="(butt, index) in buttons"
      :key="index"
      :prefix="butt.prefix"
    />
  
  </div>

</template>