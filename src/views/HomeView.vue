<script setup>
  import Client from '@/components/Client.vue';
  import Services from '@/components/Service.vue'
  import Slider from '../assets/images/slider-dec.png'
  import Pricing from '@/components/Pricing.vue'
  import AboutUs from '@/components/AboutUs.vue'
  import Modal from '@/components/Modal.vue';
  import Carousel from '@/components/Carousel.vue';
  import Video from '../assets/videos/video.mp4'
  import FpHome from '../assets/images/fp-home.jpg'
  import FpHome2 from '../assets/images/foodpanda-home.jpg'
  import GoodMan from '../assets/images/jason-goodman.jpg'
  import SectionImage from '@/components/SectionImage.vue'

 const secitonImage = [
    { id: '1', image: 'https://www.foodpanda.com/wp-content/uploads/2023/02/foodpanda-home-3.jpg', title: 'Growing with our partners', content: 'We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?', btn:'read our story'},
    { id: '2', image: 'https://www.foodpanda.com/wp-content/uploads/2023/02/fp-about-2-900x506.jpg', title: 'We work with the best restaurants and stores.', content: "We're far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business." , btn:'Join us'},
    { id: '3', image: 'https://www.foodpanda.com/wp-content/uploads/2022/11/Rider-Safety-900x619.jpeg', title: 'Customers come first', content: "We're far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business.  " , btn:'Join us!'},
    { id: '4', image: 'https://www.foodpanda.com/wp-content/uploads/2023/02/fp-home.jpg', title: 'plan for tomorrow, focus on today', content: 'Our environment is ever-changing and we meet these changes head-on by adopting a progress-driven mindset. We value diverse inputs, we push the envelope to open up possibilities for innovation,  ', btn:'learn more' },
    { id: '5', image: 'https://www.foodpanda.com/wp-content/uploads/2023/02/foodpanda-home-2-1024x576.jpg', title: 'we before me', content: 'Although we can make a difference individually, we will go further, accomplish more and touch more lives if we do it as one team and one organisation working towards our common goals.' , btn:'view job'},
]

</script>

<template>
  <Modal/>
   <section>
    <div class="container-fluid main-banner p-0 m-0">
      <div class="row">
          <div class="align-self-center show-up header-text">
            <div class="bg-video">
              <video autoplay loop muted width="100%">
                  <source :src=Video type="video/mp4">
              </video>
                <div class="hero-text ">
                  <h2 class="text-white display-6 text-uppercase">
                    food and groceries in a tap <br><span class="text-danger">App Stores</span></h2>
                  <p class="text-white ">Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo,<br> a great website to download free CSS templates.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
   </section>
   <section class="container py-5">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-gl-12 col-xl-12">
        <div class="py-5">
          <h2 class="description">We’re here to help you live life the panda way.
              <br>Spend more time doing what you love – we’ll take care of tasty meals, 
              <br>fresh groceries and new flavours.</h2>
        </div>
      </div>
    </div>
   </section>

   <section class="py-5 section__image-text pt-8 md:pt-0 md:my-0 w-full bg-white in-view">
    <div class="container">
      <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
            <img :src=FpHome alt="">
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
           <aside class="p-4 px-0">
            <h2 class="section-text">
              Meet the next generation of delivery!   
            </h2>
            <p class="pt-3">hat makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.</p>
            <a href="#" class="btn mt-5 bg-red">Read Our Story</a>
          </aside>
          </div>
      </div>
    </div>
   </section>

   <section class="my-5 pt-8 md:pt-0 md:my-0 w-full bg-white in-view">
    <div class="container">
      <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
            <aside class="p-4 px-0">
            <h2 class="section-text">
                Taste the convenience. 
            </h2>
            <p class="pt-3">Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now.</p>
            <div class=" ">
              <a href="#" class="btn mt-5 bg-red">Read Our Story</a>
              <a href="#" class="btn mt-5 bg-red mx-3">Read Our Story</a>
              <a href="#" class="btn mt-5 bg-red">Read Our Story</a>
            </div>
          </aside>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
           <img :src=FpHome2 alt="">
          </div>
      </div>
    </div>
   </section>
   <SectionImage :image="secitonImage[1].image" :title="secitonImage[1].title" :content="secitonImage[1].content" :btn="secitonImage[1].btn"/>
   <section class="py-5 section__image-text pt-8 md:pt-0 md:my-0 w-full bg-white in-view">
    <div class="container">
      <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
            <img :src=FpHome alt="">
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
           <aside class="p-4 px-0">
            <h2 class="section-text">
             {{ secitonImage[2].title }}  
            </h2>
            <p class="pt-3">hat makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.</p>
            <a href="#" class="btn mt-5 bg-red">Read Our Story</a>
          </aside>
          </div>
      </div>
    </div>
   </section>

  <!-- <Services/> -->
  <!-- <AboutUs/>
  <Client/>
  <Pricing/> -->
  <Carousel/>
  <SectionImage :image="secitonImage[0].image" :title="secitonImage[0].title" :content="secitonImage[0].content" :btn="secitonImage[0].btn"/>
</template>
<style scoped>
 .bg-video{
  position: relative;
 }
 .hero-text{
  position: absolute;
  bottom: 25%;
  left: 10%;
 }
 .text-uppercase{
  font-family:'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 4rem
 }
 .py-50{
  padding: 50px 0
 }
 .description{
  color: #343b46;
  font-size: 2rem
 }
 .section-text{
  font-size: 3rem;
 }
 .btn{
  background-color: red;
 }
 .btn:hover{
  background-color: #f43c3c;
  color: #fff;
 }
 .my-50{
  margin: 50px 0;
 }
</style>