<template>
    <div class="page-center">
      <div class="container border p-4">
        <form>
          <div v-show="step === 1" class="step">
            <div class="form-group text-center">
              <label for="Login1" class="form-label centered-label">Логин</label>
              <input v-model="formReg.Login1" type="text" class="form-control centered-input" id="Login1">
            </div>
            <div class="form-group mt-4 text-center">
              <button @click="submitForm" class="btn btn-primary btn-block">Войти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 1,
        formReg: {
          Login1: ''
        }
      }
    },
    methods: {

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
  