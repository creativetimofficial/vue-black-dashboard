<template>
  <div class="page">
    <div class="contImage"></div>
    <div class="container">
        <div v-show="step === 1" class="step">
          <div class="textlog">
            <h1>Вход</h1>

          </div>
          <div class="form-group2">
            <input v-model="Login1" type="text" class="form-control " id="Login1" placeholder="Логин" ref="loginInput">
          </div>
          
          <div class="form-group3">
            <button @click="validateInput" class="btn btn-primary ">Войти</button>
          </div>
          <div class="form-group4">
            <span class="textinfo">Узнать свой логин можно у администратора сайта</span>
          </div>
        </div>
    </div>
    <div class="form-group5">
      <h1 class="TextName">Avito</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      formReg: {
        Login1: '',
        errorMessage: '',
      }
    }
  },
  methods: {
    validateInput(){
      if(this.Login1 && this.Login1.length > 1){
        this.$router.push('/admin'); 
      } else {
        }
      }
    }
  }

</script>

<style scoped>


.page {
  background: #EFEFEF;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  
}

.container {
  background: white;
  border-radius: 22px;
  width: 384px;
  height: 240px;
  z-index: 2; 
  position: relative; 
}
.textlog{
  margin-top:20px;
  text-align: center;
  
}
.h1{

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;

}
.form-control{
  background:#D9D9D9;
  border:white;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}
.form-group2 {
  padding: 11px, 20px, 11px, 20px;
  border-radius: 8px;
  width: 299px;
  height: 39px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.form-group3 {
  top: 537px;
}

.btn {
  width: 299px;
  height: 39px;
  background: #48AAF8;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  border: #48AAF8;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}

.form-group4 {
  font-size: 12px;
  margin-top: 7px;
  text-align: center;
  color: #00000069;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}

.form-group5 {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.TextName {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
}

.contImage {
  background-image: url(@/icons/LogoLoginForm.png); 
  width: 570px;
  height: 513px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; 
  background-size: 100%;
}
</style>