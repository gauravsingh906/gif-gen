import { useState } from "react";
import useGif from "../Hooks/useGif";
import Spinner from "./Spinner";

const API_KEY = 'aUnCLunlFaBT3s40WCLO5FKD7hpWWgUs';

function Tag() {

    //-------------------useGif custom hook ka use kar k repetation of code random and tag dono component kam kar sakte hai
    // const [gif, setGif] = useState('');

    // const [loading, setLoading] = useState(false)
    // // console.log("API Key:", API_KEY); // This will help verify if the API key is loaded

    // async function fetchData() {
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    //     const { data } = await axios.get(url);
    //     // console.log(data);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource)
    //     // console.log(imageSource)
    //     // You might want to set the gif here:
    //     // setGif(output.data.data.images.original.url);
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])
    // ---------------------------------------------------------------------------------------------



    const [tag, setTag] = useState('car');
    const { gif, loading, fetchData } = useGif(tag);

    return (<div className="w-1/2 bg-blue-500 border border-white flex flex-col 
    items-center mt-[3px]">
        <h1 className="text-3xl underline uppercase font-bold mb-5">Random {tag} Gif</h1>
        {loading ? (<Spinner />) : (<img src={gif} width="450" alt="Random GIF"></img>)}
        <input className="w-10/12   text-lg py-2 rounded-lg mb-[3px] mt-5 text-center "
            value={tag} onChange={(event) => setTag(event.target.value)} />
        <button onClick={() => fetchData(tag)}
            className="w-10/12  bg-yellow-200 text-lg py-2 rounded-lg my-[20px]" >
            Generate
        </button>
    </div>)
}

export default Tag;