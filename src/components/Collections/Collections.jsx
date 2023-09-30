import React from "react";
import img1 from "./Images/1.png";
import img2 from "./Images/2.png";
import img3 from "./Images/3.png";
import { motion } from "framer-motion";

import CollectionCard from "./CollectionCard";

const Collections = () => {
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
  return (
    <div
      id="collections"
      className="bg-[#02021B] py-10 text-white overflow-x-hidden overflow-y-hidden "
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, type: "keyframes" }}
          viewport={{ once: false }}
          className="text-[43px] pb-7 pt-7  font-bold"
        >
          View Creator’s Collections
        </motion.h1>
        <div className="py-7">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <CollectionCard img={img1}></CollectionCard>
            <CollectionCard img={img2}></CollectionCard>
            <CollectionCard img={img3}></CollectionCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
