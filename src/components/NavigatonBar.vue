<template>
    <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <RouterLink to="/" class="logo wow animate__shakeY">
              <img :class="logo" :src= logo>
            </RouterLink>

            <!-- ***** Logo End ***** -->

            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section">
                <RouterLink to="/">{{$t('home')}}</RouterLink>
              </li>
              <li class="scroll-to-section">
                <RouterLink to="/solutions">{{$t('solutions')}}</RouterLink>
              </li>
              <li class="scroll-to-section">
                <RouterLink to="/about">{{$t('about')}}</RouterLink>
              </li>
              <li class="scroll-to-section">
                <RouterLink to="/news">{{$t('news')}}</RouterLink>
              </li>
              <li class="scroll-to-section">
                <RouterLink to="/pricing">{{$t('pricing')}}</RouterLink>
              </li>
              <li class="scroll-to-section">
                <a >{{$t('partner')}}  <i class="fa-solid fa-caret-down"></i></a>
                <ul class="sub-menu">
                  <li><RouterLink to="/merchant">{{$t('merchant')}}</RouterLink></li>
                  <li><RouterLink to="/delivery">{{$t('delivery')}}</RouterLink></li>
                </ul>
              </li>
              <li class="lang">
                <i class="fa-solid fa-globe"></i>
                <select v-model="$i18n.locale">
                  <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{locale}}</option>
                </select>          
              </li>
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
            
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  
  <!-- ***** Header Area End ***** -->
 

</template>

<script setup>
    import logo from '../assets/images/logo/Logo_white.png'
    import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
  .logo{
    width: 150px;
  }
  .nav{
    font-family: 'Battambang',sans-serif;
  }
  select{
    border: none;
    outline: none;
    /* width: 100px; */
  }
  li.lang{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .scroll-to-section ul{
    display: none;
    cursor: pointer;
    position: absolute;
    width: 150%;
    
  }
  .scroll-to-section{
    position: relative;
    height: 100%;
    cursor: pointer;
  }
  .scroll-to-section ul li{
    padding: 5px;
    background-color: #fff;
    color: #000
  }
  
  .scroll-to-section ul li:hover{
   background-color: #ddd;
   color:#ed1c24
   
  }
  .scroll-to-section:hover ul{
    display: block;
    top: 40px;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
    border-radius: 5px;
  }
.main-nav img{
  max-width: 100%;
  overflow: hidden;
}
</style>