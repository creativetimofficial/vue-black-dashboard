<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <fg-input label="Company (disabled)"
                  placeholder="Company"
                  v-model="model.company"
                  disabled>
        </fg-input>
      </div>
      <div class="col-md-3 px-md-1">
        <fg-input label="Username"
                  placeholder="Username"
                  v-model="model.username">
        </fg-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <fg-input label="Email address"
                  type="email"
                  placeholder="mike@email.com">
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <fg-input label="First Name"
                  v-model="model.firstName"
                  placeholder="First Name">
        </fg-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <fg-input label="Last Name"
                  v-model="model.lastName"
                  placeholder="Last Name">
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <fg-input label="Address"
                  v-model="model.address"
                  placeholder="Home Address">
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <fg-input label="City"
                  v-model="model.city"
                  placeholder="City">
        </fg-input>
      </div>
      <div class="col-md-4 px-md-1">
        <fg-input label="Country"
                  v-model="model.country"
                  placeholder="Country">
        </fg-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <fg-input label="Postal Code"
                  placeholder="ZIP Code">
        </fg-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <fg-input>
          <label>About Me</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Here can be your description"
                    v-model="model.about">

              </textarea>
        </fg-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill>Save</base-button>
  </card>
</template>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>
