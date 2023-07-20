import React from "react";
import './Banner.css'
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div id="home" className="banner bg-[#0C0263] pt-10 h-[400px] md:h-screen overflow-x-hidden ">
      <div className="container mx-auto text-white flex flex-row-reverse items-center h-full">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className=" mr-8 md:mr-24"
        >
          <h1 className="text-[43px] md:text-[73px] font-bold">
            Cryptocurrency
          </h1>
          <h2 className="text-[33px] md:text-[55px] font-bold">
            just got even better
          </h2>
          <p className="mt-3">
            Best nft collection freelance services online. <br /> Outsource your
            nft collection project and get it <br /> quickly done and delivered
            remotely online.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
