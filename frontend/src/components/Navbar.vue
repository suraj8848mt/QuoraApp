<template>

      <nav class="navbar navbar-expand-lg navbar-light bg-light my-navbar">
        <div class="container">
   <router-link :to="{ name: 'Home'}" class="navbar-brand">
            QuestionTime
          </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link :to="{ name: 'Home'}" class="btn btn-sm btn-outline-secondary">
            Home
          </router-link>
        </li>
        <li class="nav-item mx-1" >
         <router-link :to="{ name: 'About'}" class="btn btn-sm btn-outline-secondary">
            About
          </router-link>
        </li>
          <li class="nav-item">
         <router-link :to="{ name: '/accounts/logout'}" class="btn btn-sm btn-outline-secondary">
            Logout
          </router-link>
        </li>


      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: "Navbar",

    }
</script>

<style scoped>
  .my-navbar {
    border-bottom: 1px solid #DDD;
  }
.navbar-brand {
    font-weight: bold;
    font-size: 130%;
}
    .navbar-brand:hover {
        color: red !important;
    }
</style>