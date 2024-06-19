<template>
  <div>
    <section>
      <v-container>
        <h1 class="py-5">Add Product</h1>
        <!-- {{productData}} -->
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Enter title" v-model="productData.title"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Enter price" v-model="productData.price"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Enter description"
                v-model="productData.description"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Enter image" v-model="productData.image"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Enter category"
                v-model="productData.category"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-btn @click="productStore.updateProduct(productStore.product.id, productData)" class="bg-purple"> Update Product </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/products";

const r = useRoute();
const productStore = useProductStore();
await productStore.fetchSingleProducts(r.params.id);

const productData = ref({
  title: productStore.product.title,
  price: productStore.product.price,
  description: productStore.product.description,
  image: productStore.product.image,
  category: productStore.product.category,
});

</script>

<style scoped></style>
