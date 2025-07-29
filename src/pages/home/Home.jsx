import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorWidges from "../../components/ui/ErrorWidges";
import Loading from "../../components/ui/Loading";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setLoding(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoding(false));
  }, []);

  const navigate = useNavigate()

  if(error){
    return <ErrorWidges/>
   
  }
  return (
    <div className="container flex flex-wrap gap-y-7 gap-x-2 my-[100px] justify-between">
      {
        loding && <Loading/>
      }
      {data?.products?.map((item) => (
        <div className="border-1 shadow-lg border-amber-400 rounded-2xl p-[14px]" key={item.id}>
          <div>
            <img onClick={()=> navigate(`/product/${item.id}`)} src={item.thumbnail} alt="" />
          </div>
          <div>
            <strong>{item.price} USD</strong>
            <h1 className="line-clamp-1 font-bold" title={item.title}>
              {item.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
