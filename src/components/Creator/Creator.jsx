import React, { useEffect, useRef } from "react";
import img from "./images/badge.png";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import ReactAudioPlayer from "react-audio-player";

const Creator = () => {
   const variants = {
     hidden: { opacity: 0 },
     show: {
       opacity: 1,
       transition: {
         delayChildren: 0.2,
         staggerChildren: 0.3,
         staggerDirection: 1,
       },
     },
   };
   const anime = {
     hidden: {
       y: -90,
       opacity: 0,
     },
     show: {
       y: 0,
       opacity: 1,
       transition: {
         duration: 0.5,
         type: "spring",
       },
     },
   };
  return (
    <div id="creators" className="bg-[#02021B] py-10 overflow-x-hidden">
      <div className="container mx-auto text-white py-10 px-5">
        <h1 className="text-[43px]  font-bold">Our Top Creator’s Words</h1>
        <div>
          <div className="  md:px-0 md:flex mt-6 items-center justify-around">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.04) 100%)",
              }}
              className="flex items-center gap-3 p-5 rounded-lg"
            >
              <div>
                <h4 className="text-2xl mb-2">Jason Roy</h4>
                <p>Sr. Designer</p>
              </div>
              <div>
                <motion.img
                  whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src={img}
                  alt=""
                />
                <p className="text-2xl font-medium text-center">EXPERT</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              <p className="leading-7">
                NFT will open thousands of new opportunities for this new
                generation. I feel so proud and blessed <br /> that I have seen
                and taken advantage of many great opportunities in this world
                before millions of <br /> people have seen them.
              </p>
              <motion.div className="mt-4 flex items-center gap-2">
                <span className="text-[#fd33f3]">
                  <FaStar />
                </span>
                <span className="text-[#fd33f3]">
                  <FaStar />
                </span>
                <span className="text-[#fd33f3]">
                  <FaStar />
                </span>
                <span className="text-[#fd33f3]">
                  <FaStar />
                </span>
                <span className="text-[#fd33f3]">
                  <FaStar />
                </span>
                {/* <ReactAudioPlayer src="/public/Thu Jul 20 2023 (1).mp3" autoPlay controls /> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
        variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{once: false}}
          className="md:flex gap-6 justify-around mt-10 mx-auto w-[75%]"
        >
          <motion.img variants={anime} whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }} className="w-[100px] h-[133px]" src={img1} alt="" />
          <motion.img variants={anime} whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }} className="w-[100px] h-[133px]" src={img2} alt="" />
          <motion.img variants={anime} whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }} className="w-[100px] h-[133px]" src={img3} alt="" />
          <motion.img variants={anime} whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }} className="w-[170px] h-[227px]" src={img4} alt="" />
          <motion.img variants={anime} whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }} className="w-[100px] h-[133px]" src={img5} alt="" />
          <motion.img variants={anime} whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }} className="w-[100px] h-[133px]" src={img6} alt="" />
          <motion.img variants={anime} whileHover={{ scale: 1 }}
                  whileTap={{
                    scale: 0.8,
                  }} className="w-[100px] h-[133px]" src={img7} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Creator;
