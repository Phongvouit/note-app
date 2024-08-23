"use client"

import FolderItem from "./FolderItem"

const FolderList = () => {
    return (
        <div className="w-full bg-[#7D9D9C] p-4">
            <div className="mb-2">
                <h2 className="font-bold text-white">Folders</h2>
            </div>
            <FolderItem/>
            <FolderItem/>
            <FolderItem/>
        </div>
    )
}
export default FolderList