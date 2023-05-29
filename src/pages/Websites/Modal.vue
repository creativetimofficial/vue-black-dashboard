<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close" @click="$emit('close')">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
