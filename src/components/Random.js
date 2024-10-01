
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";



function Random() {

    const { gif, loading, fetchData } = useGif();

    return (<div className="w-1/2 bg-green-500 border border-white flex flex-col 
    items-center mt-[3px]">
        <h1 className="text-3xl underline uppercase font-bold mb-5"> A Random Gif</h1>
        {loading ? (<Spinner />) : (<img src={gif} width="450" alt="Random GIF"></img>)}

        <button onClick={() => fetchData()}
            className="w-10/12  bg-yellow-200 text-lg py-2 rounded-lg my-[20px]" >
            Generate
        </button>
    </div>)
}

export default Random;