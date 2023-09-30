import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Details = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    const allData = useLoaderData()
    useEffect(() => {
      fetch("/totNFT.json")
        const foundData = allData.find((d) => d.id === parseInt(id));
        setData(foundData);
    }, []);
    const navigation = useNavigation();
    const navigate = useNavigate()
    if (navigation.state === "loading") {
      return <Loader></Loader>;
    }
    return (
      <div className="bg-[#02021B] text-white">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="p-5 md:p-0">
              <h1 className="text-5xl font-bold">{data.name}</h1>
              <p className="py-6">{data.details}</p>
              <p className="font-medium text-[20px] mb-4">ETH: {data.eth} </p>
              <button
                style={{
                  background:
                    "linear-gradient(130deg, #FF56F6 18.31%, #B936EE 43.26%, #3BACE2 85.44%, #406AFF 100%)",
                  backdropFilter: "blur(96px)",
                  boxShadow: "0px 4px 97px 0px rgba(255, 86, 246, 0.51)",
                }}
                onClick={() => navigate(-1)}
                className="btn outline-0 border-0 text-white"
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;