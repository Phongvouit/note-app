"use client";

import Avatar from "./Avatar";
import { IoIosNotifications } from "react-icons/io";

const UserMenu = () => {
  return (
    <div className="w-full flex items-center justify-end gap-x-2">
      <p>Tuong Minh</p>
      <div className="flex items-center gap-x-2 text-gray-600">
        <Avatar />
        <IoIosNotifications size={40} />
      </div>
    </div>
  );
};
export default UserMenu;
