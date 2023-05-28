<template>
  <div class="accounts-list">
    <ListItem v-for="(account, index) in accounts" :key="index"
              :name="account.name"
              :img="account.img"
              :active="account.active"
              :phone_number="account.phone_number"
    ></ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/Accounts/ListItem.vue";
import axios from 'axios'; // make sure to import axios

export default {
  components: {
    ListItem
  },
  name: "List",
  async mounted() {
    this.$root.$on('update_list', () => {
      this.update_list()
    })
    await this.update_list(); // call update_list on mount to fetch initial data
  },
  methods: {

    async update_list() {

      try {
        const response = await axios.get(`${process.env.VUE_APP_BASE_API_URL}/accounts`);
        const data = response.data.result;

        // Get the main account
        const mainResponse = await axios.get(`${process.env.VUE_APP_BASE_API_URL}/main_account`);
        const mainUserId = mainResponse.data.user.id;

        const accounts = [];
        for (const item of data) {
          const account = {
            name: item[0],
            phone_number: item[1].phone_number,
            active: item[1].user.id === mainUserId,
          };

          const avatarResponse = await axios.get(`${process.env.VUE_APP_BASE_API_URL}/avatars?telegram_id=${item[1].user.id}`);
          account.img = `data:image/jpeg;base64,${avatarResponse.data}`;

          accounts.push(account);
        }

        this.accounts = accounts;
      } catch (error) {
        console.error('Failed to update list:', error);
      }
      this.stop_loading();
    },
    stop_loading: function () {
      this.$root.$emit('stop_loading')
    }
  },
  data() {
    return {
      accounts: []
    }
  },
}
</script>

<style scoped>
</style>
