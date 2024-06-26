<template>
    <div class="col-md-3 col-sm-12 col-12">                
        <div class="card" >
            <img :src="img" class="img-size">
            <div class="card-body">
                <h5 class="card-title">{{ title }}e</h5>
                <p class="card-text">{{ desc }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> 
    </div>
</template>

<script setup>
const props = defineProps({
    img: String,
    title: String,
    desc: String,
    key:String
})
</script>

<style  scoped>
    .card{
        max-width: 18rem;
        height: 350px;
    }
    .img-size{
        width: 100%;
        height: 200px;
        background-size: contain;
    }
</style>