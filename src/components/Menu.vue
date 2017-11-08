<template lang="pug">
  .menu(:class="{ 'menu-opposite': opposite }")
    button(type="button"
           :disabled="disabled"
           :class="buttonClass")
      span(v-if="hasText") {{text}}
    .menu--box.mnu-box
      ul.mnu-list.u-branded.u-nowrap
        slot
</template>

<script>
  export default {
    name: 'Menu',
    props: {
      disabled: Boolean,
      opposite: Boolean,
      icon: String,
      text: String
    },
    computed: {
      hasIcon() {
        return this.icon && this.icon !== ''
      },
      hasText() {
        return this.text && this.text !== ''
      },
      buttonClass() {
        return {
          'menu--icon': this.hasIcon,
          [this.icon]: this.hasIcon
        }
      }
    }
  }
</script>
