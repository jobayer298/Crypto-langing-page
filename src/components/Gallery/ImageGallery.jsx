import React from "react";
import { galleryPhotos } from "./photos";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const anime = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
  };
  return (
    <div className="bg-[#11062F] text-white">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-[43px]  font-bold">Gallery</h1>
        <div className="my-5">
          {/* breakpoints=
          {{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }} */}
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
          >
            <Masonry columnsCount={4} gutter="10px">
              {galleryPhotos.map((image, i) => (
                <motion.img
                className="object-cover"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                  key={i}
                  src={image.src}
                  height={image.height * 100}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
