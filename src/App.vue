<template>
  <div class="app">
      <router-view></router-view>
  </div>
</template>

<script>
import LoginForm from "./pages/LoginForm.vue";
import TreeView from './components/TreeView';

export default{
  components: { LoginForm, TreeView },
}

</script>

<style scoped>
  
</style>