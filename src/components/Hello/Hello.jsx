import React from "react";
import { motion } from "framer-motion";
import H from "./H";

const Hello = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };
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
    <div className="bg-black overflow-y-hidden">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid grid-cols-4 gap-4  py-10 "
      >
        {[1, 1, 1, 1].map((m, i) => (
          <H></H>
        ))}
      </motion.div>
    </div>
  );
};

export default Hello;
