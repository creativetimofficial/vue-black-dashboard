<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : ''"
    :disabled="disabled || loading"
    @click="handleClick"
    class="btn"
    :class="[
      {'btn-round': round},
      {'btn-block': block},
      {'btn-icon btn-fab': icon},
      {[`btn-${type}`]: type && !outline},
      {[`btn-outline-${type}`]: type && outline},
      {[`btn-${size}`]: size},
      {'btn-simple': simple},
      {'btn-link': link},
      {'disabled': disabled && tag !== 'button'}
    ]">
    <slot name="loading">
      <i v-if="loading" class="fa fa-spinner fa-spin"></i>
    </slot>
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'base-button',
  props: {
    tag: {
      type: String,
      default: "button"
    },
    round: Boolean,
    icon: Boolean,
    outline: Boolean,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: "default"
    },
    nativeType: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: ""
    },
    simple: Boolean,
    link: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
<style>
</style>
