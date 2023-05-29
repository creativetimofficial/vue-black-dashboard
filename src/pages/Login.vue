<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <base-input
          label="Username"
          v-model="form.username"
        ></base-input>
      </div>
      <div class="form-group">
        <base-input
          label="Password"
          v-model="form.password"
          type="password"
        ></base-input>
      </div>
      <div class="form-group">
        <base-button @click="submitForm" type="success">Login</base-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(`${process.env.VUE_APP_BASE_API_URL}/login`, this.form);
        if (response.data.access_token) {
          localStorage.setItem('auth_token', response.data.access_token);
          await this.notifyVue('top', 'right', `Logged in with ${this.form.username}`, "success");
          this.$router.push({ path: "/dashboard" });
        } else {
          await this.notifyVue('top', 'right', `Failed to log in`, "danger");
        }
      } catch (error) {
        console.error('Failed to submit form:', error);
        await this.notifyVue('top', 'right', `Failed to log in`, "danger");
      }
    },
    async notifyVue(verticalAlign, horizontalAlign, text, type = 'info') {
      console.log('send')
      this.$notify({
        icon: "tim-icons icon-alert-circle-exc",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: type,
        timeout: 10000,
        message: text
      });
    },
  }
};
</script>
<style scoped>
.login-page {
  width: 500px; /* Increase the width */
  margin: 0 auto;
  padding: 40px; /* Increase the padding */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 10px;
}

.form-group base-input {
  margin-bottom: 10px;
  height: 40px; /* Add a fixed height to the inputs */
}

.form-group base-button {
  align-self: center;
}

</style>
