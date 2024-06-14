import { defineStore } from "pinia";
import { axiosAPi } from "~/config/axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    allproducts:[]
  }),

  actions: {
    async fetchProducts() {
      let response = await axiosAPi.get("products?limit=5");
      this.products = response.data;
    },

    async fetchAllproducts() {
      try {
        let response = await axiosAPi.get("products?limit=5");
        this.products = response.data;
      } catch (e) {
        console.warn(e);
      }
    },
  },
});
