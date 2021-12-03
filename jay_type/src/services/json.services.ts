import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/";

export const getPosts = async () => {
     const result = await axios.get(`${apiUrl}comments`);
     return result.data; 
  
};


