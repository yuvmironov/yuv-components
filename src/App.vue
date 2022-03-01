<template>
  <div id="Home" class="Components">
    <div class="Components-Block">
      <yuv-input id="asd" type="text" label="adasd" v-model="test"/>
    </div>
    <div class="Components-Block">
      <yuv-button
        :fun="testClick"
      />
    </div>
    <div class="Components-Block">
      <span class="icon icon-alert">
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
    const testClick = () => {
      console.log('test click')
    }

    return {
      test,
      testClick
    }
  }
}
</script>

<style lang="stylus">
#Home
  padding 20px
.Components
  &-Block
    display flex
    justify-content space-between
    margin-bottom 20px
</style>
