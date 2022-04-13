<template>
  <div class="YuvSelect">
    <select
      :id="id"
      class="YuvSelect-Select"
      :value="modelValue"
      @change="selected"
    >
      <option v-for="option in options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
    <label for="id" class="YuvSelect-Label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'yuv-select',
  props: {
    id: {
      type: String
    },
    label: {
      type: String,
      default: 'Default label'
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {}
  },
  setup (props, { emit }) {
    const selected = (data) => {
      emit('update:modelValue', data.target.value)
    }

    return {
      selected
    }
  }
}
</script>

<style lang="stylus">
.YuvSelect
  position:relative
  width: 100%
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
  &-Select
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
    box-shadow inset 0 0 0 1px var(--tertiary)
    &:focus, &:not([value=""]):valid
      & ~ .YuvSelect-Label
        background-color var(--background)
        transform scale(.85) translateY(-1.05rem) translateX(.05rem)
</style>
