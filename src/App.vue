<template>
  <div>
    <login-form></login-form>
    <TreeView/>
  </div>
</template>


<script>
import LoginForm from "./pages/LoginForm.vue";
import TreeView from './components/TreeView';

export default{
  components: { LoginForm },

export default {
  components: {
    TreeView
  }
}
</script>


<style scoped>
  
</style>