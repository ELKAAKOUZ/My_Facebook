import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import {
  ShoppingCartIcon,
  UserGroupIcon,
  UserIcon,
  PlayIcon,
  FlagIcon,
  BellIcon,
  SearchIcon,
  ViewGridAddIcon,
  ChatIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
const Header = () => {
  const { data: session } = useSession();
  console.log(session.user.image);
  return (
    <header className="flex sticky top-0 z-10 items-center p-2 lg:p-5 shadow-md  justify-between">
      <div className="flex items-center">
        <Image
          layout="fixed"
          className="object-contain"
          width={40}
          height={40}
          src="https://links.papareact.com/5me"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 pl-2 text-gray-600 items-center cursor-pointer " />
          <input
            type="text"
            placeholder="search facebook"
            className=" h-7 outline-none hidden md:inline-flex flex-shrink bg-transparent placeholder-gray-500"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-evenly flex-grow space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={UserIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile image */}
        <Image
          className="rounded-full"
          src={session.user.image}
          width={50}
          height={50}
          layout="fixed"
        />
        <p
          className="font-semibold pr-3 whitespace-nowrap cursor-pointer "
          onClick={signOut}
        >
          {session.user.name}
        </p>
        <ViewGridAddIcon className="icons" />
        <ChatIcon className="icons" />
        <BellIcon className="icons" />
        <ChevronDownIcon className="icons" />
      </div>
    </header>
  );
};

export default Header;
