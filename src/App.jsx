import "./App.css";
import dots from "./dots";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {


  return (
    <div className=" background w-full h-screen z-20 overflow-y-auto flex flex-col relative items-center rounded-lg border border-black">
     
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] 
      text-black font-bold text-4xl px-10 py-2">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
