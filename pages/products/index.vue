<template>
  <div>
    <h1>Products</h1>
    {{productStore.allProducts}}
    <section>
      <v-container>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">image</th>
              <th class="text-left">title</th>
              <th class="text-left">Price</th>
              <th class="text-left">Category</th>
              <th class="text-left">Calories</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productStore.allProducts" :key="product">
              <td>{{ product.id }}</td>
              <td><v-img :src="prodcut.image" :lazy-src="product.image"> </v-img></td>
              <td>{{ product.title }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.category }}</td>
              <td>
                <v-btn> <v-icon>mdi-pencil</v-icon></v-btn>
              </td>
              <td>
                <v-btn> <v-icon>mdi-delete</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/products";
const productStore = useProductStore();

await productStore.fetchAllProducts();
</script>

<style scoped>
h1 {
  color: purple;
  text-align: center;
  padding: 10px;
}
</style>
