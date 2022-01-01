import Image from "next/image";
import React from "react";

const SidebarIcon = ({ src, Icon, title }) => {
  return (
    <div className="group h-12 space-x-2 p-4 flex hover:bg-gray-300 items-center cursor-pointer mb-7">
      {src && (
        <Image
          layout="fixed"
          src={src}
          width={45}
          height={30}
          className="space-x-4 rounded-full"
        />
      )}
      {Icon && <Icon className="h-10 w-15 px-2 md:px-5  text-blue-700" />}
      <p className="hidden sm:inline-flex font-medium text-gray-400 group-hover:text-gray-700 ">
        {title}
      </p>
    </div>
  );
};

export default SidebarIcon;
