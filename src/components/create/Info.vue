<template>
  <div>
    <div class="d-flex justify-content-between  my-3">
      <h4>Create appointment</h4>
      <button class="btn btn-secondary" @click="$router.push({name: 'home'})">Back</button>
    </div>
    <form @submit.prevent="next">
      <div class="form-group">
        <label>Date:</label> <br />
        <date-picker
          placeholder="Enter date"
          v-model="form.date"/>
      </div>
      <div v-if="$v.form.date.$error">
        <div class="error" v-if="!$v.form.date.required">Field is required.</div>
      </div>
      <div class="form-group mt-3">
        <label for="name">Full name:</label>
        <input v-model="form.name" type="text" class="form-control mb-3" id="name" placeholder="Enter name" />
      </div>
      <div v-if="$v.form.name.$error">
        <div class="error" v-if="!$v.form.name.required">Field is required.</div>
      </div>
      <div class="form-group mt-3">
        <label for="note">Note:</label>
        <textarea v-model="form.note" class="form-control" id="note" rows="3" placeholder="Enter note"/>
      </div>
      <button type="submit" class="btn btn-primary">Next</button>
    </form>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import {mapActions} from 'vuex'
import { uuid } from 'vue-uuid'

export default {
  components: {
    DatePicker
  },
  data(){
    return {
      form: {
        id:  null,
        date: '',
        name: '',
        note: ''
      }
    }
  },
  validations: {
    form: {
      name: { required },
      date: { required }
    }

  },
  created() {
    this.form = this.$route.params
    this.form.id = uuid.v1();
  },
  methods: {
      ...mapActions(['addAppointment']),
    next(){
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$router.push({name: 'create.confirm',  params: this.form} )
      }
    }
  }
};
</script>

<style>
  .error {
    color: red;
  }
</style>
