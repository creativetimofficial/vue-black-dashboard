<template>
  <div>
    <SideBar/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';

export default{
  components: {
    SideBar
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.page-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.border {
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px; 
  width: 100%; 
}
</style>
