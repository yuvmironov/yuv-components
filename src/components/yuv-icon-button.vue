<template>
  <button
    @click="fun"
    class="YuvIconButton"
    :class="`YuvIconButton__Style__${type}`"
  >
    <div class="YuvIconButton-StateLayer"></div>
    <span class="YuvIconButton-Icon icon" :class="`icon-${icon}`"/>
  </button>
</template>

<script>
export default {
  name: 'yuv-icon-button',
  props: {
    icon: {
      type: String
    },
    fun: {
      type: Function,
      required: true
    },
    type: {
      type: String,
      default: 'Surface'
    }
  }
}
</script>

<style lang="stylus">
.YuvIconButton
  width 56px
  height 56px
  border-radius 16px
  box-shadow 0 4px 8px 3px var(--primary_opaciti_015)
  position relative
  &-StateLayer
    position absolute
    width 56px
    height 56px
    border-radius 16px
    top 0
    left 0
    z-index 10
  &-Icon
    color var(--on-surface)
    font-size var(--title-large)
  &__Style
    &__Surface
      background linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11)), var(--surface)
      color var(--on-surface)
      &:hover
        background linear-gradient(0deg, rgba(103, 80, 164, 0.12), rgba(103, 80, 164, 0.12)), var(--background)
      &:hover > .YuvIconButton-StateLayer
        background var(--primary)
        opacity 0.08
      &:active
        background linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11)), var(--background)
      &:hover > .YuvIconButton-StateLayer
        background var(--primary)
        opacity 0.08
    &__Primary
      background var(--promary-container)
      color var(--on-primary-container)
      &:hover
        background var(--promary-container)
      &:hover > .YuvIconButton-StateLayer
        background var(--on-primary-container)
        opacity 0.08
      &:active
        background var(--promary-container)
      &:hover > .YuvIconButton-StateLayer
        background var(--on-primary-container)
        opacity 0.12
    &__Secondary
      background var(--secondary-container)
      color var(--on-secondary-container)
      &:hover
        background var(--secondary-container)
      &:hover > .YuvIconButton-StateLayer
        background var(--on-secondary-container)
        opacity 0.08
      &:active
        background var(--secondary-container)
      &:hover > .YuvIconButton-StateLayer
        background var(--on-secondary-container)
        opacity 0.12
    &__Tetriary
      background var(--tertiary-container)
      color var(--on-tertiary-container)
      &:hover
        background var(--tertiary-container)
      &:hover > .YuvIconButton-StateLayer
        background var(--on-tertiary-container)
        opacity 0.08
      &:active
        background var(--tertiary-container)
      &:hover > .YuvIconButton-StateLayer
        background var(--on-tertiary-container)
        opacity 0.12
</style>
