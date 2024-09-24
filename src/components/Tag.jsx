import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState("developer");
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const api_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(api_url);
    const image = data.data.images.downsized_large.url;
    setGif(image);
    setLoading(false);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-1/2 bg-purple-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl uppercase font-bold">
        Random {tag} GIFS
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input
        type="text"
        className="w-5/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />
      <button
        onClick={() => fetchData()}
        className="w-5/12 bg-yellow-500 text-lg py-2 mb-[20px] font-bold uppercase"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
