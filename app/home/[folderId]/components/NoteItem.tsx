"use client";

import clsx from "clsx";
import { useCallback } from "react";
import useFolder from "@/app/hooks/useFolder";
import { Note } from "@prisma/client";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import axios from "axios";
import toast from "react-hot-toast";

interface NoteItemProps {
  note: Note;
  selected?: boolean;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, selected }) => {
  const { folderId, noteId } = useFolder();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/home/${folderId}/note/${note.id}`);
  }, [folderId, router, note.id]);

  const handleDeleteNote = () => {
    axios
    .delete(`/api/note/${noteId}/delete`)
    .then(() => {
      toast.success("Deleted a note!");
      router.push(`/home/${folderId}`);
      router.refresh();
    })
    .catch(() => toast.error("Something went wrong"));
  }
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
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: `${note.content.substring(0, 30) || "Empty"}`,
          }}
        ></p>
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
              <button
                className="data-[focus]:bg-gray/10 cursor-pointer"
                onClick={handleDeleteNote}
              >
                Delete
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <p className="text-sm">
        {format(new Date(note.updatedAt), "yyyy-MM-dd, hh:mm")}
      </p>
    </div>
  );
};
export default NoteItem;
