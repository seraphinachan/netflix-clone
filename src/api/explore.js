import axios from "axios";
import {BACKEND} from './constants'


const client = axios.create({
    baseURL: BACKEND.API,
    timeout: 1000,
    headers: {}
});