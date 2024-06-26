<script setup>
  import Client from '@/components/Client.vue';
  import Modal from '@/components/Modal.vue';
  import Services from '@/components/Service.vue'
  import Slider from '../assets/images/slider-dec.png'
  import Pricing from '@/components/Pricing.vue'
  import AboutUs from '@/components/AboutUs.vue'
  import AboutImage from '../assets/images/about-foodpanda.jpeg'
  import AboutCarousel from '@/components/AboutCarousel.vue'
  import Hero from '@/components/Hero.vue';
</script>

<template>
  <!-- <Modal/> -->
  <section>
    <div class="container-fluid main-banner p-0 m-0">
      <div class="row">
          <div class=" show-up header-text ">
            <div class="bg-image mt-50 ">
              <img :src=AboutImage alt="">
                <div class="hero-text ">
                  <h2 class="text-white display-5 text-uppercase">
                   About <em class="text-danger">Everex </em> <br>Express</h2>
                </div>
            </div>
          </div>
        </div>
    </div>
   </section>
   <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <aside class=" p-5 md:p-0" >
            <h2>From food delivery to your daily convenience companion.</h2>
            <p class="mt-3">A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform.  Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC.</p>
            <p class="my-2 md:my-0">Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar. </p>
            <p class="">Thanks to dedicated partners, riders, and a team united by shared values,  foodpanda is now providing millions with a convenient way to get food and groceries in a few taps.</p>
          </aside>
        </div>
      </div>
    </div>
   </section>

<!-- End Row -->


  <AboutCarousel/>
  <Hero/>
</template>
<style scoped>
  .bg-image{
  position: relative;
  }
 .hero-text{
  position: absolute;
  bottom: 20%;
  left: 10%;
 }
 .text-uppercase{
  font-family:'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 4rem
 }
 .mt-50{
  margin-top: 50px;
 }
.font-size-400{
  font-weight: 400;
}
</style>