import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SidebarIcon from "./SidebarIcon";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  LockClosedIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] md:p-5">
      <SidebarIcon src={session.user.image} title={session.user.name} />
      <SidebarIcon Icon={UserGroupIcon} title="Friends" />
      <SidebarIcon Icon={UserGroupIcon} title="Groups" />
      <SidebarIcon Icon={LockClosedIcon} title="Marketplace" />
      <SidebarIcon Icon={DesktopComputerIcon} title="Watch" />
      <SidebarIcon Icon={CalendarIcon} title="Events" />
      <SidebarIcon Icon={ClockIcon} title="Memories" />
      <SidebarIcon Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
