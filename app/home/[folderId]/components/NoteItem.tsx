"use client";

import clsx from "clsx";
import { useCallback } from "react";
import useFolder from "@/app/hooks/useFolder";
import { Note } from "@prisma/client";
import { useRouter } from "next/navigation";
import {format} from "date-fns"

interface NoteItemProps {
  note: Note;
  selected?: boolean;
}


const NoteItem: React.FC<NoteItemProps> = ({ note, selected }) => {

    const {folderId} = useFolder()
    const router = useRouter()

    const handleClick = useCallback(() => {
        router.push(`/home/${folderId}/note/${note.id}`)
      },[folderId, router, note.id]);
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
      <p className="text-lg" dangerouslySetInnerHTML={{
      __html: `${note.content.substring(0, 30) || 'Empty'}`,}}></p>
      <p className="text-sm">{format(new Date(note.updatedAt),"yyyy-MM-dd, hh:mm")}</p>
    </div>
  );
};
export default NoteItem;
