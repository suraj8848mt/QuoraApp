<template>
  <div class="example">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
    export  default {
        name: "example",
        data() {
            return {
                message: "Hello Daju!"
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
