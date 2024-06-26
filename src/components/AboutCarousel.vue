<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
    { id: '1', image: 'https://www.foodpanda.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-11-at-20.04.29-900x679.png', title: 'Growing with our partners', content: 'We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?' },
    { id: '2', image: 'https://www.foodpanda.com/wp-content/uploads/2023/02/fp-about-2-900x506.jpg', title: 'We work with the best restaurants and stores.', content: "We're far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business." },
    { id: '3', image: 'https://www.foodpanda.com/wp-content/uploads/2022/11/Rider-Safety-900x619.jpeg', title: 'Customers come first', content: "We're far more than just swift food delivery. foodpanda enables customers to pick up their takeaway meals, skip boring grocery trips and send parcels. Customer needs are the core and centre of our business.  " },
    { id: '4', image: 'https://www.foodpanda.com/wp-content/uploads/2023/02/fp-home.jpg', title: 'plan for tomorrow, focus on today', content: 'Our environment is ever-changing and we meet these changes head-on by adopting a progress-driven mindset. We value diverse inputs, we push the envelope to open up possibilities for innovation,  ' },
    { id: '5', image: 'https://www.foodpanda.com/wp-content/uploads/2023/02/foodpanda-home-2-1024x576.jpg', title: 'we before me', content: 'Although we can make a difference individually, we will go further, accomplish more and touch more lives if we do it as one team and one organisation working towards our common goals.' },
]

const breakpoints = {
    // 700px and up
    700: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 1,
        snapAlign: 'start',
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000">
                    <Slide v-for="slide in slides" :key="slide.id">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-5">
                            <div class="carousel__item ">
                                <h3 class="mb-4">{{ slide.title }}</h3>
                                <p>{{ slide.content }}</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <img :src="slide.image" alt="">
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation class="text-danger display-5" />
                        <Pagination/>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    /* background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white); */
    font-size: 20px;
    border-radius: 8px;
    text-align: start;
    
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
