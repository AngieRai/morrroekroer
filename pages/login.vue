<template>
  <div>
    <section>
      <v-container>
        <h1 class="py-5">Login</h1>
        <!-- {{productData}} -->
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Enter User Name" v-model="userData.username"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Enter Password" v-model="userData.password"></v-text-field>
          </v-col>
        </v-row>

        <v-btn @click="productStore.postProduct(userData)">
          Login
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup>
const userData = ref({
    username: "mor_2314",
    password: "83r5^_",
});

import { useProductStore } from "~/stores/products";
const productStore = useProductStore();
</script>

<style scoped></style>
