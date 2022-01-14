import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { PlusCircleIcon } from "@heroicons/react/solid";
const MyStory = () => {
  const { data: session } = useSession();

  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x  transition duration-200 ease-in-out hover:scale-105 hover:animate-pulse">
      <div className="relative h-14 rounded-full  lg:rounded-t-3xl xl:rounded-t-2xl w-14 md:h-20 md:w-20  lg:h-36 lg:w-28   ">
        <Image
          className="object-cover   filter brightness-75"
          src={session.user.image}
          layout="fill"
        />
      </div>

      <div className="bg-white h-24 z-50  rounded-b-2xl  absolute p-2 bottom-0 right-0 left-0  opacity-0 lg:opacity-100   text-white text-sm font-bold truncate">
        <PlusCircleIcon className="h-7 bg-white text-blue-600 -mt-4 mx-auto rounded-full " />
        <p className="text-black text-center whitespace-pre-line">
          Story erstellen
        </p>
      </div>
    </div>
  );
};

export default MyStory;
