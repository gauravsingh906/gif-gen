import { useState, useEffect } from "react";
import axios from "axios";





const API_KEY = 'aUnCLunlFaBT3s40WCLO5FKD7hpWWgUs';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


function UseGif(tag) {
    const [gif, setGif] = useState('');

    const [loading, setLoading] = useState(false)


    async function fetchData(tag) {
        setLoading(true)


        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        // console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)
        // console.log(imageSource)
        // You might want to set the gif here:
        // setGif(output.data.data.images.original.url);
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData }

}
export default UseGif;