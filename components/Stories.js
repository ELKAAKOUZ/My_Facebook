import React from "react";
import MyStory from "./MyStory";
import Story from "./Story";

const stories = [
  {
    name: "Mahmoud Mahfoz",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Ahmed beh Mahfoz",
    src: "/bruder.jpg",
    profile: "/ahmedprof.jpg",
  },
  {
    name: "Celi M Mahfoz",
    src: "/celia.JPG",
    profile: "/celiaprof.JPG",
  },
  {
    name: "Rehab Mahfoz",
    src: "/mutter.jpg",
    profile: "/rehabprof.jpg",
  },
  {
    name: "Mahfoz Awad",
    src: "/vater.JPG",
    profile: "/vaterprof.JPG",
  },
];
const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {/* <MyStory /> */}
      {stories.map((account) => (
        <Story
          key={account.name}
          name={account.name}
          src={account.src}
          profile={account.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
