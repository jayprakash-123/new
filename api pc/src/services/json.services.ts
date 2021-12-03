
import axios from "axios";
const apiUrl = "https://jsonplaceholder.typicode.com/";
export const getPost = async () => {
    const result = await axios.get(`${apiUrl}albums`);   
     return result.data;
    }

