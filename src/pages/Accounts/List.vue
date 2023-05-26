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
        <input v-model="form.api_id" type="number" class="form-control" placeholder="API ID">
      </base-input>
      <base-input v-if="!code_retrieval_state">
        <label>API Hash</label>
        <input v-model="form.api_hash" type="text" class="form-control" placeholder="API Hash">
      </base-input>
      <base-input v-if="!code_retrieval_state">
        <label>Phone Number</label>
        <input v-model="form.phone_number" type="text" class="form-control" placeholder="Phone Number">
      </base-input>
      <base-input v-if="code_retrieval_state">
        <label>Enter the code</label>
        <input v-model="code_received" type="number" class="form-control" placeholder="Code from telegram">
      </base-input>
      <base-button @click="submitForm">Submit</base-button>
      <base-button type="danger" @click="code_retrieval_state=!code_retrieval_state" v-if="code_retrieval_state">
        Cancel
      </base-button>

    </form>
    <div class="accounts-list">
      <ListItem title="John Doe"
                img="https://steamuserimages-a.akamaihd.net/ugc/782985807872552587/6B73164454CA29768BE5C23048D2037EEF2BD57C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                active=active
      ></ListItem>
      <ListItem title="Angry Wolf"
                img="https://i.pinimg.com/236x/45/38/22/4538227abf1a77b128a98324bdb7cd7d.jpg"
      ></ListItem>
    </div>
  </card>
</template>

<script>
import ListItem from '../../components/Accounts/ListItem.vue';
import axios from 'axios';

export default {
  components: {ListItem},
  data() {
    return {
      form: {
        name: "",
        api_id: null,
        api_hash: "",
        phone_number: "",
      },
      code_retrieval_state: false,
      code_received: null,
      hash_code: null,
      session_name: ""
    }
  },
  methods: {
    async submitForm() {
      if (this.code_retrieval_state) {
        console.log(this.code_received)
        let params = new URLSearchParams({
          "session_name": this.session_name,
          "hash_code": this.hash_code,
          "code": this.code_received
        }).toString();
        this.code_received = null
        this.hash_code = null
        const url = `http://localhost:8000/auth_session?${params}`;
        try {
          const {data, status} = await axios.post(url);
          console.log(status)
          if (status >= 200 && status < 300 && data['detail'] === undefined && data['code'] === 200) {
            await this.notifyVue('top', 'right',
              `Logged in with ${this.form.name}`,
              "success")
            this.code_retrieval_state = false
          } else {
            console.error(`Unexpected response code: ${status}`);
            await this.notifyVue('top', 'right', `${data['detail']}`)
          }
        } catch (error) {
          console.error(`Error sending request: ${error}`);
          await this.notifyVue('top', 'right', `${error}`)
        }
      } else {
        this.session_name = this.form.name
        let params = new URLSearchParams(this.form).toString();
        const url = `http://localhost:8000/create_session?${params}`;
        try {
          const {data, status} = await axios.post(url);
          console.log(status)
          if (status >= 200 && status < 300 && data['detail'] === undefined) {
            console.log(data); // we got hash_code
            this.code_retrieval_state = true
          } else if (data['detail'] === 403) {
            await this.notifyVue('top', 'right', `Invalid credentials`)
          } else {
            console.error(`Unexpected response code: ${status}`);
            await this.notifyVue('top', 'right', `${data['detail']}`)
          }
        } catch (error) {
          console.error(`Error sending request: ${error}`);
          await this.notifyVue('top', 'right', `${error}`)
        }
        // Clear the form
        this.form = {
          name: "",
          api_id: null,
          api_hash: "",
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
    async update_accounts() {

    }

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
