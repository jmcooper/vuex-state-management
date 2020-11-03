<template>
  <div>
    <div class="categories">
      <button @click="setFilter('Hiking')">Hiking</button>
      <button @click="setFilter('Climbing')">Climbing</button>
      <button @click="setFilter('Kayaking')">Kayaking</button>
      <button @click="setFilter('')">All</button>
    </div>
    <div class="product-list">
      <div class="product" v-for="product in visibleProducts" v-bind:key="product.id">
        <span>
          <img :src="require(`@/assets/images/products/${product.image}`)" class="product-image"/>
        </span>
        <div class="product-description">
          <span class="title">{{product.title}}</span>
          <span class="description">{{product.description}}</span>
          <span class="category">Product Category: {{product.category}}</span>
        </div>
        <div class="price-buy">
          <span class="price">${{product.price.toFixed(2)}}</span>
          <span><button class="primary buy">Buy</button></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filterProducts from './filter-products';

const products = [{
  id: '24ab7b14-f935-44c1-b91b-8598123ea54a',
  title: 'Headlight Helmet',
  price: 59.95,
  category: 'Hiking',
  description: 'Protect your noggin and light your way. Get the best of both worlds with this 300 lumen lighted helmet.',
  image: 'headlight-helmet.jpg',
}, {
  id: 'cebbc5ba-f49a-4708-b3dc-51a346b3231e',
  title: 'Ultimate Dreamline Kayak',
  price: 649.99,
  category: 'Kayaking',
  description: 'Carbon fiber body with platinum hooks make this the perfect gift for that special someone.',
  image: 'ultimate-dreamline-kayak.jpg',
}, {
  id: '6130cdd4-071a-4559-8072-35f0fbec5516',
  title: 'Moccasins',
  price: 35.95,
  category: 'Climbing',
  description: 'Ditch the heavy boots for these lightweight hiking sandals. Perfect for rugged terrain and hiking in streams.',
  image: 'moccasins.jpg',
}, {
  id: 'dd0343e9-50b2-4f1d-8b87-93c0b34f3d35',
  title: 'Firebrand Kayak',
  price: 499.95,
  category: 'Kayaking',
  description: 'Why blend in when you can scream speed with this hot and sleek firebrand?',
  image: 'firebrand-kayak.jpg',
}, {
  id: '7277956e-795f-4c0f-9861-cf03635df5ea',
  title: 'Mega Pokey Kit',
  price: 129.99,
  category: 'Climbing',
  description: 'Everything you need for traction on that thrilling ice climb.',
  image: 'mega-pokey-kit.jpg',
}];

export default {
  name: 'Products',
  data() {
    return {
      filter: null,
    };
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
  },
  computed: {
    visibleProducts() {
      return filterProducts(this.filter, products);
    },
  },
};
</script>

<style scoped>
  .categories {
    display: flex;
    justify-content: space-around;
    padding: 0 25px;
  }
  .categories button {
    width: 150px;
    height: 65px;
    font-size: 20px;
    background-color: #336699;
    color: white;
    margin: 20px 0;
    cursor: pointer;
  }
  .categories button:hover {
    color: #D6F0FC;
  }
  .product-list {
    display:flex;
    flex-direction:column;
  }
  .product:nth-child(1) {
    border-top: 2px solid #eee;
  }
  .product {
    display: flex;
    padding:25px 20px;
    border-bottom: 2px solid #ccc;
  }
  .product-image {
    width:200px;
  }
  .product-description {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  }
  .category {
    justify-self: end;
    color: #999;
  }
  .title {
    font-size: 20px;
    color: #336699;
    font-weight: bold;
    color: #555;
    margin:10px 0 5px 0;
  }
  .description {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
    margin-right: 25px;

  }
  .price-buy {
    display: flex;
    margin-left: auto;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 35px;
    border-left: 1px solid #ccc;
  }
  .price {
    font-size: 25px;
    margin-bottom: 25px;
    color: #336699;
  }
  .buy {
    padding: 4px 25px;
  }
</style>
