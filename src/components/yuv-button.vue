<template>
  <button @click="fun" class="yuvButton" :class="`yuvButton__Type__${type}`">
    <span v-if="leftIcon" class="icon yuvButton-IconLeft" :class="'icon-' + leftIcon"/>
    <span :class="`yuvButton__Size__${size}`">{{ label }}</span>
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
    label: {
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
      default: 'field'
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
  font-family Roboto, sans-serif
  padding 10px 24px
  border-radius: 100px
  display flex
  align-items center
  &-IconLeft
    margin-right 8px
  &-IconRight
    margin-left 8px
  &__Size
    &__L
      font-size var(--label-large)
    &__S
      font-size var(--label-small)
    &__M
      font-size var(--label-medium)
  &__Type
    &__field
      background var(--primary)
      color var(--on-primary)
      font-weight 500
      transition 0.3s
      &:hover
        box-shadow 0 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)
        opacity 0.9
        transition 0.3s
      &:active
        background var(--primary)
        box-shadow none
        transition 0.3s
    &__outline
      border 1px solid var(--outline)
      color var(--primary)
      font-weight 500
      transition 0.3s
      &:hover
        background: var(--primary_opaciti_008)
        transition 0.3s
      &:active
        background var(--primary_opaciti_012)
        transition 0.3s
    &__text
      color var(--primary)
      padding 10px 12px
      font-weight 500
      transition 0.3s
      &:hover
        background: var(--primary_opaciti_008)
        transition 0.3s
      &:active
        background var(--primary_opaciti_012)
        transition 0.3s
    &__elevanted
      background linear-gradient(0deg, var(--primary_opaciti_005), var(--primary_opaciti_005)), var(--surface);
      box-shadow 0 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)
      color var(--primary)
      font-weight 500
      transition 0.3s
      &:hover
        background: linear-gradient(0deg, var(--primary_opaciti_008), var(--primary_opaciti_008)), var(--surface)
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)
        opacity 0.9
        transition 0.3s
      &:active
        background linear-gradient(0deg, var(--primary_opaciti_005), var(--primary_opaciti_005)), #FFFBFE
        box-shadow 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)
        transition 0.3s
    &__tonal
      background var(--secondary-container)
      color var(--on-secondary-container)
      font-weight 500
      transition 0.3s
      &:hover
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)
        opacity 0.8
        transition 0.3s
      &:active
        background var(--secondary-container)
        box-shadow none
        transition 0.3s
</style>
