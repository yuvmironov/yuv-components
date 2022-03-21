<template>
  <div class="YuvSelect">
    <label for="id" class="YuvSelect-Label">{{ label }}</label>
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
    position:absolute
    font-size: var(--base--label)
    color:var(--black-default)
    z-index:2
    left:.5em
    top:.8em
    pointer-events:none
    background:var(--white-default)
    transition:all 200ms ease-out
    transform:translateY(-1.45em)
    padding: 0 .5em
  &-Select
    position:relative
    font-size: var(--base--size)
    width: 100%;
    height: 2.5em;
    color:var(--black-default)
    outline:none
    border: 0
    border-radius 3px
    box-shadow: inset 0 0 0 1px var(--black-light)
    box-sizing: border-box
    &__Error
      box-shadow 0 0 0 1px var(--red-light)
    &__Success
      box-shadow 0 0 0 1px var(--blue-light)
</style>
