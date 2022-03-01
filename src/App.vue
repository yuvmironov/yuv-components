<template>
  <div id="Home" class="Components">
    <div class="Components-Block">
      <yuv-input id="asd" type="text" label="adasd" v-model="test"/>
    </div>
    <div class="Components-Block">
      <yuv-button/>
    </div>
    <div class="Components-Block">
      <span class="icon icon-mail-add">
      </span>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const test = ref('')

    return {
      test
    }
  }
}
</script>

<style lang="stylus">
#Home
  padding 20px
.Components
  &-Blocks
    display flex
    justify-content space-between
</style>
