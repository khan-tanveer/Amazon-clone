import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone2-25697/us-central1/api",
  // the api cloud function url
});

export default instance;
