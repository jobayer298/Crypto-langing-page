import React from "react";
import diamond from "./Images/diamond.png";
import { motion } from "framer-motion";

const CollectionCard = ({ img }) => {
  const anime = {
    hidden: {
      x: 90,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const anime2 = {
    hidden: {
      y: 90,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      variants={anime2}
      className=" relative mb-14"
    >
      <img className="w-full relative" src={img} alt="" />
      <motion.div
        variants={anime}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className=" p-5 rounded-lg w-[65%] mx-auto absolute bottom-[0px] left-[16%]"
        style={{
          background:
            "linear-gradient(rgb(255 255 255 / 45%) 0.55%, rgba(255, 255, 255, 0.24) 100%)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div>
          <h4 className="text-lg mb-2">Michael Joe</h4>
          <p className="text-xs">Total Earned</p>
          <div className="pt-3 flex items-center gap-4">
            <img src={diamond} className="w-8" alt="" />
            <h1 className="text-2xl font-medium">320 ETH</h1>
          </div>
        </div>
        <button
          style={{
            background:
              "linear-gradient(130deg, #FF56F6 18.31%, #B936EE 43.26%, #3BACE2 85.44%, #406AFF 100%)",
            backdropFilter: "blur(96px)",
            boxShadow: "0px 4px 97px 0px rgba(255, 86, 246, 0.51)",
          }}
          className="btn btn-primary absolute left-16 bottom-[-57px]  border-0"
        >
          view collection
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CollectionCard;
