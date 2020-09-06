<template>
  <div>
    <div class="d-flex justify-content-between  my-3">
      <h4>Appointments</h4>
    </div>
    <ul class="list-group">
      <h2 v-if="!allAppointments.length">You have no appointments. Chill...</h2>
      <ListItem  v-for="(appointment, index) in allAppointments" :key="index" :appointment="appointment"  />
    </ul>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ListItem from '@/components/ListItem'

export default {
  components: {
    Navbar,
    ListItem
  },
  data(){
    return {
      allAppointments: null
    }
  },
  created() {
    this.allAppointments = JSON.parse(localStorage.getItem('appointments'))
  },

}
</script>

<style>

</style>
