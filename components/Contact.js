import Image from "next/image";
import React from "react";

const Contact = ({ src, name }) => {
  return (
    <div className="flex relative items-center space-x-3 mb-2 hover:bg-gray-400 cursor-pointer p-2 rounded-xl  ">
      <Image
        objectFit="cover"
        className="rounded-full"
        src={src}
        width={40}
        height={40}
        layout="fixed"
      />
      <p className="text-gray-500">{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Contact;
