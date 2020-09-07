<template>
  <div>
    <div class="d-flex justify-content-between  my-3">
      <h4>Appointments</h4>
    </div>
    <ul class="list-group">
      <h2 v-if="!allAppointments || !allAppointments.length">You have no appointments. Chill...</h2>
      <ListItem
        v-for="appointment in allAppointments"
        :key="appointment.id"
        :appointment="appointment"
      />
    </ul>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ListItem from "@/components/ListItem";
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Navbar,
    ListItem
  },
  methods: {
     ...mapActions(['fetchAppointments']),
  },
  computed: {
    ...mapGetters(['allAppointments'])
  },
  created(){
    this.fetchAppointments()
  }
};
</script>

<style></style>
