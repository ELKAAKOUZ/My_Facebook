import React from "react";
import Story from "./Story";
const stories = [
  {
    name: "Mahmoud Mahfoz",
    src: "https://links.papareact.com/zof",
    // profile: "https://links.papareact.com/l4v",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Elon Mask",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bazzoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zukerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];
const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
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
