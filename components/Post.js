import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";

const Post = ({ name, image, postImage, message }) => {
  console.log(postImage, message);
  return (
    <div className=" bg-white mt-3 mp-3 rounded-t-2xl  shadow-md text-xl text-gray-600">
      <div className="p-5">
        <div className=" flex items-center space-x-2 ">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            layout="fixed"
          />
          <p className="font-medium">{name}</p>
        </div>

        <p className="text-left mt-4 mb-7">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 mb-2 text-center">
          <Image
            src={postImage}
            alt="image error"
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}
      <div className="flex justify-evenly mb-4 shadow-md border-t rounded-b-2xl">
        <div className="inputIcon rounded-none rounded-bl-2xl ">
          <ThumbUpIcon className="h-4 active:bg-blue-600" />
          <p className="text-xs sm:text-base ">Like</p>
        </div>
        <div className="inputIcon  rounded-none ">
          <ChatAltIcon className="h-4 active:bg-blue-600" />
          <p className="text-xs sm:text-base ">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4 active:bg-blue-600" />
          <p className="text-xs sm:text-base ">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
