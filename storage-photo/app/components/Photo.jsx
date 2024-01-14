"use client";
import Image from "next/image";
import React from "react";

const Photo = ({ src, alt, width, height, photName, isFavorited = false }) => {
  console.log({src}, "^^^");
  return (
    <div
      style={{ width, height }}
      className=" relative w-auto h-auto rounded-lg shadow-md  border border-white border-opacity-80 overflow-hidden cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
};

export default Photo;
