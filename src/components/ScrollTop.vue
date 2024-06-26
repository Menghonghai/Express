<template>
  <div class="scroll-top" v-if="setClass" @click="scrollTop">
        <button class="btn-scroll-top">
          <i class="fa-solid fa-shuttle-space"></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const setClass = ref();
window.addEventListener('scroll',()=>{
    if (window.scrollY>200) {
        setClass.value=true
    } else {
        setClass.value=false
    }
})
let scrollTop = ()=> {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'

    })
}
</script>

<style scoped>
    .scroll-top{
    position: fixed;
    bottom: 15px;
    right: 10px;
    opacity: 1;
    transition: all .5s ease-in-out;
    z-index: 99;
  }
  .btn-scroll-top{
    background-color: #f00;
    color: #f8e3e3;
    border-radius: 50%;
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all .3s linear; 
    transform: rotate(270deg);
  }
  .btn-scroll-top:hover{
    background-color: #d80404;
  }
  .btn-scroll-top:hover i{
    color: #fff;
  }

</style>