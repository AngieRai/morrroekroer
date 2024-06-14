<template>
  <div>
    <section>
      <carousel />
    </section>

    <!-- products -->
    <section class="py-10">
      <v-container>
       

        <h1 class="text-center text-h4">products</h1>
        <div class="viewall"> 
          <nuxt-link to="/products">view all <v-icon>mdi-arrow-right</v-icon></nuxt-link>
        </div>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="product in productStore.products" :key="product">
            <card :product="product"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- products end -->
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/products";
const productStore = useProductStore();

await productStore.fetchProducts();
</script>

<style scoped>
.viewall{
 padding: 25px 0;
  text-align: right;
}
.viewall a{
  color: purple;
  text-decoration: none;
}
</style>
