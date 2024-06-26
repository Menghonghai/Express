<template>
    <section class="py-5 section__image-text pt-8 md:p-0 md:pt-0 md:my-0 w-full bg-white in-view">
        <div class="container">
            <div class="row d-flex align-items-md-center">
                <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
                    <img :src="image" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6">
                    <aside class="p-4 px-0">
                        <h2 class="section-text">
                            {{title}}
                        </h2>
                        <p class="pt-3">{{content}}</p>
                        <!-- <p class="">Find out how we connect tech, passions, projects and people – explore international
                            career opportunities at foodpanda. Join us!</p> -->
                        <a href="#" class="btn mt-5 bg-red">{{ btn }}</a>
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
   const props = defineProps({
    id:String,
    image: String,
    title: String,
    content: String,
    btn:String
})
</script>

<style scoped>
    .bg-red{
        background-color: #eb1c25;
        transition: all .3s linear
    }
    .bg-red:hover{
        background-color: #f62d37;
        color: #fff;
    }

</style>