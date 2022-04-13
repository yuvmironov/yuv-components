<template>
  <div class="YuvDialog" v-if="openingFlag">
    <div class="YuvDialog-Content">
      <div class="YuvDialog-Header">
        {{ header }}
      </div>
      <div class="YuvDialog-Body">
        {{ body }}
      </div>
      <div class="YuvDialog-Footer">
        <slot name="actions"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'yuv-dialog',
  props: {
    header: {
      type: String,
      default: 'Заголовок'
    },
    body: {
      type: String,
      default: 'Тело сообщения'
    }
  },
  setup () {
    const openingFlag = ref(false)
    const onOpen = () => {
      openingFlag.value = true
    }
    const onClose = () => {
      openingFlag.value = false
    }

    return {
      openingFlag,
      onOpen,
      onClose
    }
  }
}
</script>

<style lang="stylus">
.YuvDialog
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background-color var(--background-transparent)
  z-index 9999
  display flex
  justify-content center
  align-items center
  &-Content
    border-radius 28px
    background-color var(--surface)
    min-width 200px
    max-width 400px
  &-Header
    text-align left
    font-size var(--headline-small)
    padding 24px
  &-Body
    padding 0 24px
    font-size var(--body-medium)
  &-Footer
    padding 34px 24px
    display flex
    justify-content flex-end
</style>
