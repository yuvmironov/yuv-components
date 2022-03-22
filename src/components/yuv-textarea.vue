<template>
  <div class="YuvTextArea">
<!--    <span v-if="icon" class="icon YuvTextArea-Icon" :class="`icon-${icon}`"/>-->
    <textarea class="YuvTextArea-TextArea"
           :id="id"
           :value="modelValue"
           :disabled="disabled"
           @input="inputEvent($event.target.value)"
           @focus="inputEvent($event.target.value)"
           @blur="inputEvent($event.target.value)"
           autocomplete="off"
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
    font-size var(--base--label)
    color var(--black-default)
    z-index 2
    left .5em
    top .8em
    pointer-events none
    background var(--white-default)
    transition all 200ms ease-out
    transform translateY(-1.45em)
    padding 0 .5em
  &-TextArea
    padding 4px
    position relative
    font-size var(--base--size)
    width 300px
    height 160px
    color var(--black-default)
    outline none
    border 0
    border-radius 3px
    box-shadow inset 0 0 0 1px var(--black-light)
    box-sizing border-box
    resize none
    &__Error
      box-shadow 0 0 0 1px var(--red-light)
    &__Success
      box-shadow 0 0 0 1px var(--blue-light)
</style>
