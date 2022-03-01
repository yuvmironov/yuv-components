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
      background var(--primary---default)
      color var(--white---default)
      &:hover
        background var(--primary---dark)
      &:active
        background var(--primary---darker)
    &__secondary
      border 1px solid var(--gray---default)
      background var(--white---default)
      color var(--gray---default)
      &:hover
        background var(--gray---light)
      &:active
        background var(--gray---dark)
    &__danger
      background var(--error---default)
      color var(--white---default)
      &:hover
        background var(--error---dark)
      &:active
        background var(--error---darker)
</style>
