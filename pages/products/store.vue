<template>
  <div>
    <section>
      <v-container>
        <h1 class="py-5">Add Product</h1>
        <!-- {{productData}} -->
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Enter Title" v-model="productData.title"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Enter Price" v-model="productData.Price"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Enter Description" v-model="productData.Description"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Enter image" v-model="productData.image"></v-text-field>
          </v-col>
           <v-col cols="12" md="6">
            <v-text-field label="Enter category" v-model="productData.category"></v-text-field>
          </v-col>
        </v-row>

        <v-btn @click="productStore.postProduct(productData)">
          Add Product
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup>
const productData = ref({
    title: null,
    price: null,
    description: null,
    image: null,
    category : null,
});

import { useProductStore } from "~/stores/products";
const productStore = useProductStore();
</script>

<style scoped></style>
