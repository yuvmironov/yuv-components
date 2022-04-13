<template>
  <div class="YuvTextArea">
<!--    <span v-if="icon" class="icon YuvTextArea-Icon" :class="`icon-${icon}`"/>-->
    <textarea
      class="YuvTextArea-TextArea"
      :id="id"
      :value="modelValue"
      :disabled="disabled"
      @input="inputEvent($event.target.value)"
      @focus="inputEvent($event.target.value)"
      @blur="inputEvent($event.target.value)"
      autocomplete="off"
      :placeholder="label"
      required
    />
    <label class="YuvTextArea-Label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'yuv-textarea',
  emits: ['update:modelValue'],
  props: {
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
    errMessage: {}
  },
  setup (props, { emit }) {
    const inputEvent = data => {
      emit('update:modelValue', data)
    }

    return {
      inputEvent
    }
  }
}
</script>

<style lang="stylus" scoped>
.YuvTextArea
  position:relative
  width: 100%
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
  &-TextArea
    width 100%
    height 160px
    position:relative
    padding 12px 12px
    font-size  var(--label-medium)
    color var(--on-backgroud)
    outline:none
    border: 0
    border-radius 5px
    box-sizing border-box
    box-shadow inset 0 0 0 1px var(--tertiary)
    &::placeholder
      color transparent
      opacity 0
    &:focus, &:not(:placeholder-shown)
      & ~ .YuvTextArea-Label
        background-color var(--background)
        transform scale(.85) translateY(-1.05rem) translateX(.05rem)
</style>
