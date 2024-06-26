<template>
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                                        
                        <Product v-for="product in products" :img="product.img" :title="product.title"
                            :desc="product.desc" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Product from "../components/Product.vue"
const products = [
    {key:'food', img: 'https://www.foodpanda.com/wp-content/uploads/2024/06/Key-KV-900x557.png', title: 'PRESS RELEASES', desc: 'foodpanda reaffirms commitment to enhance delivery partners’ work experience with ‘panda cares' },
    {key:'food', img: 'https://www.foodpanda.com/wp-content/uploads/2024/06/Meal-For-One-1280-x-1080.png', title: 'FOOD DELIVERY', desc: 'foodpanda makes convenience more affordable with ‘Meal For One’, offering curated set menus from $9.' },
    {key:'drink', img: 'https://www.foodpanda.com/wp-content/uploads/2024/05/%E6%83%A0%E5%BA%B7%E5%8F%8AMarket-Place%E5%BC%B7%E5%8B%A2%E5%8A%A0%E7%9B%9Ffoodpanda-%E9%A6%99%E6%B8%AF%E5%A4%96%E9%80%81%E5%B9%B3%E5%8F%B0%EF%BC%8C%EF%BC%88%E5%B7%A6%EF%BC%89DFI%E9%9B%B6%E5%94%AE%E9%9B%86%E5%9C%98%E9%9B%B6%E5%94%AE%E9%A3%9F%E5%93%81%EF%BC%88%E9%A6%99%E6%B8%AF%E5%8F%8A%E6%BE%B3%E9%96%80%EF%BC%89%E5%B8%B8%E5%8B%99%E8%91%A3%E4%BA%8B%E9%99%B3%E5%BB%BA%E9%BA%9F%E3%80%81%EF%BC%88%E5%8F%B3%EF%BC%89foodpanda-%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E7%B8%BD%E8%A3%81%E8%B3%B4%E5%81%89%E6%98%95-1-scaled.jpg', title: 'PRESS RELEASES', desc: 'Wellcome and Market Place are now on foodpanda Hong Kong' },
    {key:'drink', img: 'https://www.foodpanda.com/wp-content/uploads/2024/05/EDW_0192-scaled.jpg', title: 'EDITORIALS', desc: 'Catching the retail media wave: Why brands should take the plunge now' },
    {key:'food', img: 'https://www.foodpanda.com/wp-content/uploads/2024/05/item-replacement-900x506.png', title: 'PRESS RELEASES', desc: 'foodpanda redefines convenient shopping with item replacement feature ' }
]
// const publishedBooksMessage = computed(() => {
//     return this.products.filter(
//         (products) => !products.key.indexOf(this.key)
//       );
// })

</script>

<style scoped>
.card {
    box-shadow: 0px -9px 64px 11px rgba(0, 0, 0, 0.1);
}

img {
    filter: drop-shadow(2px 10px 16px #000000);
}
/* Button */
.category-nav {
  text-align: center;
  padding: 30px;
}
.category-nav label {
  background: #0bd;
  color: #fff;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
}
.category-nav input[type="radio"] {
  /* Hide radio buttonns */
  opacity:0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

/* Image list */
.category-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.category-list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Animation */
.v-enter-active,
.v-enter-active,
.v-leave-active,
.v-move {
  transition-property: transform, opacity;
  transition-duration: .3s;
}
.v-enter-active {
  opacity: 0;
  transform: translateY(50px);
}
.v-enter-to,
.v-leave-active {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>