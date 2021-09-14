import axios from "axios";

const http = axios.create({
  // baseURL: 'https://face.ox-sys.com/'
  baseURL: 'https://reqres.in/api/'
})

export default http;
