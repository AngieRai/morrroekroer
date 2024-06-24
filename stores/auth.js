import { defineStore } from "pinia";
// import { axiosAPi } from "~/config/axios";

export const useauthStore = defineStore("auth", {
  state: () => ({
    token: null,
  }),

  actions: {
    async login(userData) {
      console.warn(userData);
      try {
        let response = await axios.post(
          "https://fakestoreapi.com/auth/login",
          userData
        );

        if (response.status == 200) {
          this.token = response.data.token;
          localStorage.setItem("token", this.token);
          alert("login successfull!");
          navigateTo("/");
        } else {
          alert("Usernmae or password is incorrect");
        }
      } catch (e) {
        alert("Usernmae or password is incorrect");
        console.warn(response);
      }
    },
  },
  // trying my own shit
  // async deleteProduct(id){
  //   let response = await axiosAPi.delete("/products/${product.id}");
  //   this.products = response.data;
  // }
});
