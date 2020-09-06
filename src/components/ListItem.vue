<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
      <h5>{{appointment.name}}</h5>
      <p>{{ momentjs(appointment.date ).format("MMM Do YY")}}</p>
      <div class="d-flex justify-content-center align-items-center">
        <div class="form-check mr-2">
          <input v-model="appointment.completed" @change="check(appointment)" class="form-check-input" type="checkbox"/>
          <label  class="form-check-label">Done</label>
         </div>
        <button @click="deleteAppointment(appointment.id)" class="btn btn-danger">Del</button>
      </div>
    </div>
  </li>
</template>

<script>
  import momentjs from 'moment'
  import { mapActions } from 'vuex'

  export default {
    props: [
      'appointment'
    ],
    data(){
      return {
        momentjs: momentjs
      }
    },
    methods: {
      ...mapActions(['checkComplete','deleteAppointment']),

      check(app){
        const updApp = {
          ...app,
          completed: app.completed
        };
        this.checkComplete(updApp);
      },
    }
  };
</script>

<style></style>
