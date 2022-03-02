<template>
  <div class="YuvDialog" v-if="openingFlag" @click="onClose">
    <div class="YuvDialog-Content">
      <div class="YuvDialog-Header">
        {{ header }}
      </div>
      <div class="YuvDialog-Body">
        <slot name="body"/>
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
  background-color var(--black-light)
  z-index 9999
  display flex
  justify-content center
  align-items center
  &-Content
    border-radius 5px
    background-color var(--white-darker)
    min-width 300px
  &-Header
    padding 15px
    border-bottom 1px solid var(--black-light)
  &-Body
    padding 10px 10px 0 10px
  &-Footer
    padding 10px 0
    display flex
    justify-content space-around
</style>
