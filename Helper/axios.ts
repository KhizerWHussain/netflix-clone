import axios from "axios";
import { tmdb } from ".";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: tmdb.apiKey,
  };
  return config;
});

export default instance;
