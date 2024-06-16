import { defineStore } from "pinia";
import { axiosAPi } from "~/config/axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    AllProducts:[]
  }),

  actions: {
    async fetchProducts() {
      let response = await axiosAPi.get("products?limit=5");
      this.products = response.data;
    },

    async fetchAllProducts() {
      try {
        let response = await axiosAPi.get("products");
        this.AllProducts = response.data;
      } catch (e) {
        console.warn(e);
      }
    },
  },
});
