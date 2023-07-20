import React from 'react';
import { motion } from "framer-motion";


const H = () => {
    const anime = {
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
        variants={anime}
        whileHover={{ scale: 1 }}
        whileTap={{
          scale: 0.8,
        }}
        className="h-[300px] w-[300px] bg-red-400"
      ></motion.div>
    );
};

export default H;