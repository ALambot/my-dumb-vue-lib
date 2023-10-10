<script setup>
  import {ref} from 'vue'

  // Props definition
  // They are passed as <OneDumbButton prefix="Your text here" />
  defineProps({
    prefix: {
      required: true
    }
  })

  // Reactive proxy to the click count, using ref
  const count = ref(0)

  // Increment click count
  // Because we are within the JS script setup, we have to use .value
  function increment() {
    count.value += 1
  }
</script>

<template>
  <!-- Within the html template, we can access the value of count directly -->
  <button class="button m-1 is-primary is-rounded" @click="increment">
    {{prefix}} ({{count}} clicks)
  </button>
</template>

<style>
</style>
