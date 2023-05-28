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
      <button class="absurd-button" @click="makeMain">Make Main</button>
    </div>
  </div>
</template>

<script>
import {parsePhoneNumberFromString} from 'libphonenumber-js';
import axios from "axios";

export default {
  name: "list-item",
  props: {
    id: Number,
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
        const response = await axios.delete(`http://localhost:8000/delete_session/${this.id}`);
        console.log(response.data.message);
        this.isVisible = false
      } catch (error) {
        console.error('Failed to delete account:', error);
        this.isVisible = false
      }
    },
    makeMain() {
      this.$emit('make-main', this.id);
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
.list-item {
  position: relative;
}
//
//.absurd-button {
//  display: inline-block;
//  padding: 20px 40px;
//  background-color: #007BFF;
//  color: white;
//  text-align: center;
//  text-decoration: none;
//  font-size: 20px;
//  transition: transform 0.3s;
//  border: 3px solid #000000; /* Add a border */
//  cursor: pointer;
//  /* Transform the button into a parallelogram */
//  transform: skew(20deg);
//  /* Make the button cover half of the list item */
//  position: absolute;
//  top: 25%;
//  left: 25%;
//  width: 50%;
//  height: 50%;
//  z-index: 9999;
//}
//
//.absurd-button:hover {
//  background-color: #0056b3;
//}
</style>
