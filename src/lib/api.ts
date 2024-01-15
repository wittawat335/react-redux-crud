import axios from "axios";

const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
let baseURL = "http://localhost:8000/";
if (!development)
  baseURL = "https://basicemployeedirectorywebapi.azurewebsites.net/api";

export default axios.create({
  baseURL,
});
