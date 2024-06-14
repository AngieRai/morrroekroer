<template>
  <div>
    <v-card height="350"
      ><v-img
        height="250"
        :src="product.image"
      ></v-img>
      <v-card-title>{{product.title}}</v-card-title>
      <p class="px-4">Price: Rs. {{product.price}}</p></v-card
    >
  </div>
</template>

<script setup>
defineProps(["product"]);</script>

<style scoped></style>
