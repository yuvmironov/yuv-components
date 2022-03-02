<template>
  <button @click="fun" class="yuvButton" :class="`yuvButton__Size__${size} yuvButton__Sheme__${type}`">
    <span v-if="leftIcon" class="icon yuvButton-IconLeft" :class="'icon-' + leftIcon"/>
    {{ name }}
    <span v-if="rightIcon" class="icon yuvButton-IconRight" :class="'icon-' + rightIcon"/>
  </button>
</template>

<script>
export default {
  name: 'yuv-button',
  props: {
    size: {
      type: String,
      default: 'M'
    },
    name: {
      type: String,
      default: 'Кнопка'
    },
    leftIcon: {
      type: String
    },
    rightIcon: {
      type: String
    },
    type: {
      type: String,
      default: 'base'
    },
    fun: {
      type: Function,
      require: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.yuvButton
  font-family Manrope, sans-serif
  border-radius 8px
  display flex
  align-items center
  &-IconLeft
    margin-right 8px
  &-IconRight
    margin-left 8px
  &__Size
    &__S
      font-size var(--fontSize--S)
      padding 8px 16px
    &__M
      font-size var(--fontSize--M)
      padding 10px 16px
  &__Sheme
    &__base
      background var(--blue-light)
      color var(--white-default)
      &:hover
        background var(--blue-default)
      &:active
        background var(--blue-dark)
    &__secondary
      border 1px solid var(--black-lighter)
      background var(--white-default)
      color var(--black-default)
      &:hover
        background var(--white-dark)
      &:active
        background var(--white-darker)
    &__danger
      background var(--red-light)
      color var(--white-default)
      &:hover
        background var(--red-default)
      &:active
        background var(--red-dark)
</style>
