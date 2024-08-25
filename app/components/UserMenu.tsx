"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Avatar from "./Avatar";
import { IoIosNotifications } from "react-icons/io";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";

interface UserMenuProps {
  currentUser: User
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {

  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if(session?.status === "unauthenticated") {
      router.push("/")
    }
  },[session?.status, router])

  return (
    <div className="w-full flex items-center justify-end gap-x-2">
      <p>{currentUser?.name}</p>
      <div className="flex items-center gap-x-2 text-gray-600">
        <Menu>
          <MenuButton>
            <Avatar user={currentUser}/>
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="
          w-20
          rounded-xl
          border
          border-black/5
          p-1
          text-sm/6
          text-black
          transition
          duration-100
          ease-out 
          [--anchor-gap:var(--spacing-1)] 
          focus:outline-none 
          data-[closed]:scale-95 
          data-[closed]:opacity-0
          text-center
          bg-white/5
          shadow-md
          "
          >
            <MenuItem>
              <button className="data-[focus]:bg-gray/10 cursor-pointer" onClick={() => signOut()}>Logout</button>
            </MenuItem>
          </MenuItems>
        </Menu>
        <IoIosNotifications size={40} />
      </div>
    </div>
  );
};
export default UserMenu;
