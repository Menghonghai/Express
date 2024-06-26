<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigatonBar from './components/NavigatonBar.vue';
import Footer from './components/Footer.vue';
import ScrollTop from './components/ScrollTop.vue'

</script>
<template>
  <NavigatonBar />
    <RouterView />
    <ScrollTop/>
  <Footer/>
</template>
<style>
   .text-blue{
    color: #652d91;
  }
</style>