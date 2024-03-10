<template>
  <div class="app">
      <router-view></router-view>
  </div>
</template>

<script>
  import TreeView from './components/TreeView';
import LoginForm from './pages/LoginForm.vue';

export default{
  components: { LoginForm, TreeView },
}

</script>

<style scoped>
  
</style>