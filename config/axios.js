import axios from "axios";

export const axiosAPi = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "appliection/json",
  },
});
