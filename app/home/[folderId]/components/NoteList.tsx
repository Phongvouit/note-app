"use client";

import NoteItem from "./NoteItem";
import { FiFilePlus } from "react-icons/fi";
import axios from "axios";
import useFolder from "@/app/hooks/useFolder";
import toast from "react-hot-toast";
import { Note } from "@prisma/client";
import { useRouter } from "next/navigation";

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({notes}) => {
  const folderId = useFolder();
  const router = useRouter();

  const handleAddNote = () => {
    axios
      .post("/api/note", {
        folderId,
      })
      .then(() => {
        router.refresh();
        toast.success("Created new note!");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="w-full h-full bg-[#F0EBE3] p-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-bold text-black">Notes</h2>
        <FiFilePlus
          size={20}
          className="cursor-pointer text-black"
          title="Add Note"
          onClick={handleAddNote}
        />
      </div>
      <div className="h-[400px] overflow-y-auto scrollbar-hide">
        {notes.map((item) => (
          <NoteItem key={item.id}/>
        ))}
      </div>
    </div>
  );
};
export default NoteList;
