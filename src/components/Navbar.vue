<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul class="navbar-nav">
      <router-link tag="li" class="nav-item active" :to="{name: 'home'}">
        <a class="nav-link" href="#">Appointments</a>
      </router-link>
      <router-link tag="li" class="nav-item active" :to="{name: 'create.info'}">
        <a class="nav-link" href="#">Make appointment</a>
      </router-link>
    </ul>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
