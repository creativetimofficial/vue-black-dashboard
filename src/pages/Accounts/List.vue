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

export default {
  components: {
    ListItem
  },
  name: "List",
  mounted() {
    this.$root.$on('update_list', () => {
      this.update_list()
    })
  },
  methods: {
    update_list() {
      //create ListItem with some properties
      this.accounts.push({
        name: "New Name",
        img: "https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        active: true,
        phone_number: "+1234567890"
      });
      this.stop_loading()
    },

    stop_loading: function () {
      // setTimeout(() => {
      //
      // }, 2000)
      this.$root.$emit('stop_loading')
    }
  },
  data() {
    return {
      accounts: [
        {
          name: "John Doe",
          img: "https://steamuserimages-a.akamaihd.net/ugc/782985807872552587/6B73164454CA29768BE5C23048D2037EEF2BD57C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          active: true,
          phone_number: "+79522736909"
        },
        {
          name: "Angry Wolf",
          img: "https://i.pinimg.com/236x/45/38/22/4538227abf1a77b128a98324bdb7cd7d.jpg",
          phone_number: "+12025550162"
        }
      ]
    }
  },
}
</script>

<style scoped>
</style>
