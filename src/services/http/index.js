import axios from "axios";

const http = axios.create({
  baseURL: 'https://face.ox-sys.com/'
})

export default http;
