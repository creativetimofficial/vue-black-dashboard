<template>
  <component :is="tag"
             class="dropdown"
             :class="{show:isOpen}"
             @click="toggleDropDown"
             v-click-outside="closeDropDown">
    <slot name="title-container" :is-open="isOpen">
      <component
        :is="titleTag"
        class="dropdown-toggle btn-rotate"
        :class="titleClasses"
        :aria-expanded="isOpen"
        data-toggle="dropdown">
        <slot name="title" :is-open="isOpen">
          <i :class="icon"></i>
          {{title}}
        </slot>
      </component>
    </slot>
    <ul class="dropdown-menu" :class="[{show:isOpen}, {'dropdown-menu-right': menuOnRight}, menuClasses]">
      <slot></slot>
    </ul>
  </component>
</template>
<script>
export default {
  name: "base-dropdown",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    titleTag: {
      type: String,
      default: "button"
    },
    title: String,
    icon: String,
    titleClasses: [String, Object, Array],
    menuClasses: [String, Object],
    menuOnRight: Boolean
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit("change", this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit('change', false);
    }
  }
};
</script>
