import axios from "axios";

export async function getFromApi(query){
    const key = '5e8ba698019c5bc3ab4e3063bfcf933c';
    return await axios.get(
        `https://api.themoviedb.org/${query}?api_key=${key}`
    )
    .catch(function (error) {
        console.log(error);
    });
} 