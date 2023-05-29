<template>
  <card>
    <h3 class="font-thin">{{ $t("accounts.list_title") }}</h3>
    <form @submit.prevent="submitForm">
      <base-input v-if="!code_retrieval_state">
        <label>Name</label>
        <input v-model="form.name" type="text" class="form-control" placeholder="Name">
      </base-input>
      <base-input v-if="!code_retrieval_state">
        <label>API ID</label>
        <input v-model="form.app_id" type="number" class="form-control" placeholder="API ID">
      </base-input>
      <base-input v-if="!code_retrieval_state">
        <label>API Hash</label>
        <input v-model="form.app_secret" type="text" class="form-control" placeholder="API Hash">
      </base-input>
      <base-input v-if="!code_retrieval_state">
        <label>Phone Number</label>
        <input v-model="form.phone_number" type="text" class="form-control" placeholder="Phone Number">
      </base-input>
      <base-input v-if="code_retrieval_state">
        <label>Enter the code</label>
        <input v-model="code_received" type="number" class="form-control" placeholder="Code from telegram">
      </base-input>
      <base-button @click="submitForm" type="success">Submit</base-button>
      <base-button type="danger" @click="code_retrieval_state=!code_retrieval_state" v-if="code_retrieval_state">
        Cancel
      </base-button>
      <base-button v-if="!code_retrieval_state" @click="update_list" :loading="loading">Refresh</base-button>
    </form>
    <List></List>
  </card>
</template>

<script>
import axios from 'axios';
import List from './List.vue'

export default {
  components: {List},
  data() {
    return {
      form: {
        name: "",
        app_id: null,
        app_secret: "",
        phone_number: "",
      },
      code_retrieval_state: false,
      code_received: null,
      hash_code: null,
      session_name: "",
      loading: false
    }
  },
  mounted() {
    this.$root.$on('stop_loading', () => {
      this.loading = false
    })
  },
  methods: {
    update_list: function () {
      this.loading = true
      this.$root.$emit('update_list')
    },
    async submitForm() {
      if (this.code_retrieval_state) {
        try {
          const url = `http://localhost:8000/auth_session/?session_id=${this.session_name}&hash_code=${this.hash_code}&code=${this.code_received}`;
          const response = await axios.post(url);
          if (response.data.code === 200) {
            await this.notifyVue('top', 'right', `Logged in with ${this.form.name}`, "success");
            this.update_list();
            this.code_retrieval_state = false;
          } else {
            console.error(`Unexpected response code: ${response.data.code}`);
            await this.notifyVue('top', 'right', `${response.data.detail}`)
          }
        } catch (error) {
          console.error(`Error sending request: ${error}`);
          await this.notifyVue('top', 'right', `${error}`)
        }
        this.code_received = null
      } else {
        try {
          const response = await axios.post(`http://localhost:8000/accounts`, this.form);
          this.session_name = response.data.__data__.id; // Use the id from the response data as the session name
          this.code_retrieval_state = true;

          // Call /create_session with session_id
          const sessionIdResponse = await axios.post(`http://localhost:8000/create_session`, this.id);
          this.hash_code = sessionIdResponse.data.hash_code;

        } catch (error) {
          console.error(`Error sending request: ${error}`);
          await this.notifyVue('top', 'right', `${error}`)
        }

        // Clear the form
        this.form = {
          name: "",
          app_id: null,
          app_secret: "",
          phone_number: "",
        }
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
}
</script>


<style lang="scss">
.channels-list {
  display: flex;
  flex-direction: column;
}

.channels-list .channel, .list-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
}

.list-item:hover {
  background-color: #333652;
}

.channel-icon {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.account-icon img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.account .account-body {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
