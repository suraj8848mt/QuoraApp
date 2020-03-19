<template>
  <div id="app">
      <Navbar />
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/example">Example</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->

    <router-view />
  </div>
</template>

<script>
  import Navbar from  "./components/Navbar"
  export default  {
    name: "App",
    components: {
      Navbar
    }
  }

</script>


<style>
     html, body {
        height: 100%;
        font-family: "Playfair Display", serif;
    }
    .btn:focus {
        box-shadow: none !important;
    }
</style>
