<template>
  <div class="YuvGlobalLoader" v-if="flag">
    <img src="../assets/Cube.svg">
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'yuv-global-loader',
  setup () {
    const store = useStore()

    const flag = computed(() => store.getters.GetGloaderFlag)
    return {
      flag
    }
  }
}
</script>

<style lang="stylus">
.YuvGlobalLoader
  backdrop-filter: blur(2px)
  position fixed
  z-index 9999
  top 0
  bottom 0
  left 0
  right 0
  display flex
  justify-content center
  align-items center
</style>
