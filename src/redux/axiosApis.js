import axios from "axios";
import { baseURL } from "../utils/apiUrls";

export const userApis = axios.create({
    baseURL: baseURL,
});