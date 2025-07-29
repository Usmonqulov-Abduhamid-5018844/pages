import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorWidges from "../../components/ui/ErrorWidges";

const UsersDetailer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally();
  }, []);
  const navidate = useNavigate();
  
  if (error) {
    return <ErrorWidges />;
  }
  return (
    <div className="container flex justify-center  items-center mt-[100px] gap-[30px]">
      <div>
        <img className="w-[500px]" src={data?.image} alt="" />
      </div>
      <div className="w-[50%] flex flex-col gap-4 text-[20px] font-bold">
        <h1>{data?.firstName}</h1>
        <h1>{data?.lastName}</h1>
        <h1>{data?.email}</h1>
        <h1>{data?.email}</h1>
        <h1>{data?.username}</h1>
        <button 
          onClick={() => navidate(-1)}
          className="bg-blue-600 py-[6px] text-white font-bold rounded-[8px] mt-[40px]"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UsersDetailer;
