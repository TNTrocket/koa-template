
<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      This page is loaded from the {{ a }}
    </h1>
    <h2 class="info" v-if="a === 'client'">
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/test">
      Home page
    </nuxt-link>
  </section>
</template>

<script>
  import axios from 'axios'
export default {
   asyncData ({ req }) {
    return  axios.get('http://localhost:3000/api')
        .then( (response)=>{
          console.log(response);
          return response.data
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  head () {
    return {
      title: `About Page -side)`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
