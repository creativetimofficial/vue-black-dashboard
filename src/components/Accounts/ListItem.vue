<template>
  <div class="account list-item">
    <div class="account-icon">
      <img :src="img" alt="AccountName">
    </div>
    <div class="account-body">
      <h4 class="font-medium p-0 m-0 pb-2">{{ title }}</h4>

    </div>
    <span :style="{ color: active ? 'green' : 'red' }">
        {{ active ? 'Active' : 'Not Active' }}
      </span>
  </div>

</template>


<script>
export default {
  name: "list-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
    },
    img: String,
    active: Boolean,
  }
}
</script>

<style lang="scss" scoped></style>
