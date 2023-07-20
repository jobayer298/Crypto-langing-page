import React, { useEffect, useRef, useState } from "react";
import cardLogo from "../../../public/Images/Screenshot 2023-07-17 171606.png";
import diamond from "../../../public/Images/diamond.png";
import fullScreen from "../../../public/Images/full-screen.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Modal from "./Modal";

const ToNFT = () => {
  const [data, setData] = useState([]);
  const modalRef = useRef(null);
  const [singleData, setSingleData] = useState([])

  const handleButtonClick = (id) => {
    modalRef.current.showModal();
    const findData = data.find(d => d.id === id)
    setSingleData(findData);
  };
  
  const title = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .3,
        delay: .3
      },
      
    },
  };
  const SubTitle = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: .5,
      },
    },
  };


  useEffect(() => {
    fetch("/totNFT.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="bg-[#11062F] text-white py-10">
      <Modal singleData={singleData} modalRef={modalRef}></Modal>
      <div className="container mx-auto">
        <motion.div>
          <motion.h1
            variants={title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-[36px] font-bold "
          >
            Weekly Top NFTs
          </motion.h1>
          <motion.p
            variants={SubTitle}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            Outsource your nft collection project and get it quickly done <br />{" "}
            and delivered remotely online.
          </motion.p>
        </motion.div>
        <div className="my-7">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((d) => (
              <SwiperSlide key={d.id}>
                <div className="card  shadow-xl">
                  <figure className="px-10 py-10  border-2  border-indigo-500/100 relative">
                    <img
                      src={d.image}
                      alt="Shoes"
                      className="rounded-xl h-80"
                    />
                    <img
                      onClick={() => handleButtonClick(d.id)}
                      className="w-10 absolute bottom-4 right-4 cursor-pointer"
                      src={fullScreen}
                      alt=""
                    />
                  </figure>
                  <div className="card-body bg-[#02021B] ">
                    <div className="flex justify-between items-center">
                      <p>{d.name}</p>
                      <img className="" src={cardLogo} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                      <img className="w-9" src={diamond} alt="" />
                      <p className="font-medium text-[20px]">{d.eth} ETH</p>
                    </div>
                    <div className="card-actions justify-center text-center mt-4">
                      <button
                        style={{
                          background:
                            "linear-gradient(130deg, #FF56F6 18.31%, #B936EE 43.26%, #3BACE2 85.44%, #406AFF 100%)",
                          backdropFilter: "blur(96px)",
                          boxShadow:
                            "0px 4px 97px 0px rgba(255, 86, 246, 0.51)",
                        }}
                        className="btn btn-primary px-8 border-0"
                      >
                        Bid Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ToNFT;
