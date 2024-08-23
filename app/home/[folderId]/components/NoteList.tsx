"use client";

import NoteItem from "./NoteItem";

const NoteList = () => {
  return (
    <div className="w-full bg-[#F0EBE3] p-4">
      <div className="mb-2">
        <h2 className="font-bold text-black">Notes</h2>
      </div>
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
};
export default NoteList;
