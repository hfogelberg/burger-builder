import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-22853.firebaseio.com/"
});

export default instance;