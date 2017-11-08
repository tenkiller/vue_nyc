<template lang="pug">
  .menu
    button(type="button")
      span(v-if="hasText") {{text}}
</template>

<script>
  export default {
    name: 'Menu',
    props: {
      text: String
    },
    computed: {
      hasText() {
        return this.text && this.text !== ''
      }
    }
  }
</script>
