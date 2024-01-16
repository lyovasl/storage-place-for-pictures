"use client";
import Image from "next/image";
import React from "react";

const PhotoModal = ({ src, alt, onClose }) => {
  if (!src) return null;

  return (
    <div className="fixed  inset-0  bg-black  bg-opacity-80 flex justify-center z-50 items-center">
      <div className="bg-gray-800 p-4 rounded-lg relative border border-gray-600">
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white mb-2"
        >
          Close
        </button>
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src={src}
            alt={alt}
            fill={true}
            style={{ objectFit: "contain", objectPosition: "center" }}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
