<template>
  <div>
    <div class="d-flex justify-content-between  my-3">
      <h4>Create appointment</h4>
      <button class="btn btn-secondary" @click="back">Back</button>
    </div>
    <div class="card" style="width: 40rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between ">
          <div>Date:</div>
          <div>{{ momentjs(confirmData.date ).format("MMM Do YY")}}</div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <div>Name:</div>
          <div>{{confirmData.name}}</div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <div>Note:</div>
          <div>{{confirmData.note || '-' }}</div>
        </li>
      </ul>
    </div>
      <button @click="confirm" class="btn btn-primary mt-4">Create appointment</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import momentjs from "moment";

export default {
  data(){
    return{
      confirmData: {},
      momentjs: momentjs
    }
  },
  created(){
      this.confirmData = this.$route.params
  },
  methods: {
    ...mapActions(['addAppointment']),
    confirm(){
      this.addAppointment(this.confirmData);
      this.$router.replace({name: 'home'})
    },
    back(){
      this.$router.push({name: 'create.info', params: this.confirmData})
    }
  }
};
</script>

<style></style>
