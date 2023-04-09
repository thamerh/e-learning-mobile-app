import axios from 'axios';
import {backendURL} from "./BasedURL"

export default axios.create({ baseURL: backendURL });
