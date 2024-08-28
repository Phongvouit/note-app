"use client";

import FolderItem from "./FolderItem";
import { AiOutlineFolderAdd } from "react-icons/ai";
import useFolderModal from "../hooks/useFolderModal";
import FolderModal from "../home/components/FolderModal";
import { Folder } from "@prisma/client";
import useFolder from "../hooks/useFolder";

interface FolderListProps {
  folders: Folder[];
}

const FolderList: React.FC<FolderListProps> = ({ folders }) => {
  const folderModal = useFolderModal();
  const folderId = useFolder();
  return (
    <>
      <FolderModal />
      <div className="w-full h-full bg-[#7D9D9C] p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-bold text-white">Folders</h2>
          <AiOutlineFolderAdd
            size={30}
            className="cursor-pointer text-white"
            title="Add Folder"
            onClick={folderModal.onOpen}
          />
        </div>
        <div className="h-[400px] overflow-y-auto scrollbar-hide">
          {folders.map((item) => (
            <FolderItem key={item.id} folder={item} selected={folderId === item.id}/>
          ))}
        </div>
      </div>
    </>
  );
};
export default FolderList;
