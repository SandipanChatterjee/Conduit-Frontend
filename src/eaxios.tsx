import axios from "axios";
const baseUrl = "https://conduit.productionready.io/api";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("Conduit.token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use((config) => {
  return config;
});

export default instance;
