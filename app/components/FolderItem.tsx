"use client";

import { Folder } from "@prisma/client";
import clsx from "clsx";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface FolderItemProps {
  folder: Folder;
  selected?: boolean;
}

const FolderItem: React.FC<FolderItemProps> = ({ folder, selected }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/home/${folder.id}`)
  },[folder.id, router]);

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
      <p>{folder.name}</p>
    </div>
  );
};
export default FolderItem;
