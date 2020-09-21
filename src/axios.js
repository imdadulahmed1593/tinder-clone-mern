import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-backend2.herokuapp.com/",
});

export default instance;
