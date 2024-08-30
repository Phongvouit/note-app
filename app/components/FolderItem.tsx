"use client";

import { Folder } from "@prisma/client";
import clsx from "clsx";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import useFolder from "../hooks/useFolder";
import axios from "axios";
import toast from "react-hot-toast";

interface FolderItemProps {
  folder: Folder;
  selected?: boolean;
}

const FolderItem: React.FC<FolderItemProps> = ({ folder, selected }) => {
  const router = useRouter();
  const { folderId } = useFolder();

  const handleClick = useCallback(() => {
    if (folder.id === folderId) {
      return null;
    }
    router.push(`/home/${folder.id}`);
  }, [folder.id, router, folderId]);

  const handleDeleteFolder = () => {
    axios
      .delete(`/api/folder/${folderId}/delete`)
      .then(() => {
        toast.success("Deleted a folder!");
        router.push("/home");
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        `
    w-full 
    border 
    p-6 
    mb-1 
    cursor-pointer
    `,
        selected ? "bg-orange-600 text-white border-none" : "bg-white"
      )}
    >
      <div className="flex items-center justify-between">
        <p>{folder.name}</p>
        <Menu>
          <MenuButton>
            <BsThreeDotsVertical size={15} />
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
          bg-white
          shadow-md
          flex
          flex-col
          "
          >
            <MenuItem>
              <button className="data-[focus]:bg-gray/10 cursor-pointer">
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="data-[focus]:bg-gray/10 cursor-pointer"
                onClick={handleDeleteFolder}
              >
                Delete
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};
export default FolderItem;
