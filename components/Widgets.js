import {
  DotsHorizontalIcon,
  SearchCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

const Contacts = [
  {
    // src: "https://links.papareact.com/f0p",
    src: "/celia.JPG",
    name: "Celia M Mahfoz",
  },
  {
    // src: "https://links.papareact.com/kxk",
    src: "/bruder.jpg",
    name: "Ahmed beh Mahfoz",
  },
  {
    src: "https://links.papareact.com/zvy",
    src: "/mutter.jpg",
    name: "Rehab Mahfoz",
  },
  {
    // src: "https://links.papareact.com/snf",
    src: "/vater.JPG",
    name: "Mahfoz Awad",
  },
  {
    src: "https://links.papareact.com/d0c",
    name: "Harry Botter",
  },
  {
    src: "https://links.papareact.com/r57",
    name: "James Bond",
  },
];
const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-64 p-2 mt-5">
      <div className="flex  justify-between items-center mb-5 text-gray-500">
        <h2 className="text-xl">Contacts</h2>

        <div className="flex items-center space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchCircleIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {Contacts.map((user) => (
        <Contact key={user.name} src={user.src} name={user.name} />
      ))}
    </div>
  );
};

export default Widgets;
