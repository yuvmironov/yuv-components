<template>
  <div class="YuvInput">
    <span v-if="icon" class="icon YuvInput-Icon" :class="`icon-${icon}`"/>
    <input
      class="YuvInput-Input"
      :class="{ 'YuvInput-Input__Error' : !flag, 'YuvInput-Input__Success': flag }"
      :type="type"
      :id="id"
      :style="styl"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="label"
      @input="inputEvent($event.target.value)"
      @focus="inputEvent($event.target.value)"
      @blur="inputEvent($event.target.value)"
      autocomplete="off"
    >
    <label class="YuvInput-Label" :for="id">{{ label }}</label>
    <span class="YuvInput-Message" v-if="!flag">{{ errMessage }}</span>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
export default {
  name: 'yuv-input',
  emits: ['update:modelValue'],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Default label'
    },
    modelValue: {},
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    errMessage: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const flag = ref(false)
    onMounted(() => {
      inputEvent(props.modelValue)
    })
    const styl = computed(() => {
      if (props.icon) {
        return 'padding: 0 2em'
      } else {
        return 'padding: 0 1em'
      }
    })
    const inputEvent = (data) => {
      const digits = /\d/g
      const capitalLetter = /[A-Z]/g
      const smallLetter = /[a-z]/g
      // eslint-disable-next-line
      const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      switch (props.type) {
        case 'text':
          if (data.length) {
            flag.value = true
          } else {
            flag.value = false
          }
          break
        case 'email':
          flag.value = regEmail.test(data)
          break
        case 'password':
          flag.value = !!((data.length >= 8 && data.length <= 64) &&
            data.match(digits) &&
            data.match(capitalLetter) &&
            data.match(smallLetter))
          break
        default:
          flag.value = true
      }
      emit('update:modelValue', data)
    }
    return {
      inputEvent,
      flag,
      styl
    }
  }
}
</script>

<style lang="stylus" scoped>
.YuvInput
  position relative
  width 100%
  margin-bottom 25px
  &:not(:last-child)
    margin-right 10px
  &-Message
    font-size calc(var(--label-small) * 0.9)
    position absolute
    bottom -16px
    color var(--error)
    left 10px
  &-Icon
    position absolute
    top 10px
    left 4px
    z-index 10
  &-Label
    position absolute
    font-size var(--label-medium)
    color var(--on-backgroud)
    left 0.4em
    top 0.6em
    pointer-events none
    background var(--background)
    padding 0 .5em
    transform-origin 0 0
    transition transform .15s ease-in-out
  &-Input
    position:relative
    padding 0 12px
    font-size  var(--label-medium)
    width  100%
    height  2.5em
    color var(--on-backgroud)
    outline:none
    border: 0
    border-radius 5px
    box-sizing border-box
    &::placeholder
      color transparent
      opacity 0
    &:focus, &:not(:placeholder-shown)
      & ~ .YuvInput-Label
        background-color var(--background)
        transform scale(.85) translateY(-1.05rem) translateX(.05rem)
    &__Error
      box-shadow 0 0 0 1px var(--error)
    &__Success
      box-shadow inset 0 0 0 1px var(--primary)
</style>
