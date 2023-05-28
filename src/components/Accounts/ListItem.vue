<template>
  <div v-if="isVisible" class="account list-item">
    <div class="account list-item">
      <div class="account-icon">
        <img :src="img" alt="AccountName">
      </div>
      <div class="account-details">
        <div class="account-body">
          <h4 class="font-medium p-0 m-0 pb-2">{{ name }}</h4>
        </div>
        <span :style="{ color: active ? 'green' : 'red' }">
            {{ active ? 'Active' : 'Inactive' }}
        </span>
      </div>
      <span class="text-muted">{{ formattedPhoneNumber }}</span>
      <div @click="deleteAccount" class="tim-icons icon-simple-remove"></div>
    </div>
  </div>
</template>

<script>
import {parsePhoneNumberFromString} from 'libphonenumber-js';
import axios from "axios";

export default {
  name: "list-item",
  props: {
    name: {
      type: String,
      required: true,
    },
    img: String,
    active: Boolean,
    phone_number: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedPhoneNumber() {
      const phoneNumber = parsePhoneNumberFromString(this.phone_number);
      if (phoneNumber) {
        const nationalNumber = phoneNumber.nationalNumber;
        return '+' + phoneNumber.countryCallingCode + '(' + nationalNumber.slice(0, 3) + ') ' + nationalNumber.slice(3, 6) + '-' + nationalNumber.slice(6, 8) + '-' + nationalNumber.slice(8, 10);
      }
      return this.phone_number;
    },
  },
  methods: {
    async deleteAccount() {
      try {
        const response = await axios.delete(`http://localhost:8000/delete_session/${this.name}`);
        console.log(response.data.message);
        this.isVisible=false
      } catch (error) {
        console.error('Failed to delete account:', error);
        this.isVisible=false
      }
    },
  },
  data() {
    return {
      isVisible: true
    }
  },
}
</script>

<style lang="scss" scoped>
.account-details {
  display: flex;
  flex-direction: column;
}
</style>
