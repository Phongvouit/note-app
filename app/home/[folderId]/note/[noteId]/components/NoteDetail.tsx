"use client";

import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import { useEffect, useMemo, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { Note } from "@prisma/client";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import useFolder from "@/app/hooks/useFolder";
import { useRouter } from "next/navigation";
import {debounce} from "@mui/material"


interface NoteProps {
  note: Note;
}

// interface HashtagConfig {
//     trigger?: string | undefined;
//     separator?: string | undefined;
// }

// declare function draftToHtml(
//     editorContent: RawDraftContentState,
//     hashtagConfig?: HashtagConfig,
//     directional?: boolean,
//     customEntityTransform?: (...args: any[]) => any,
// ): string;

const NoteDetail: React.FC<NoteProps> = ({ note }) => {

    const {noteId} = useFolder();
    const router = useRouter();

  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );

  const [rawHTML, setRawHTML] = useState(note.content);

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note.content);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [note.id]);

  useEffect(() => {
    debouncedMemorized(rawHTML, note)
  },[rawHTML, note])

  const debouncedMemorized = useMemo(() => {
    return debounce((rawHTML, note) => {
      if(rawHTML === note.content) {
        return
      }
      axios.put(`/api/note/${noteId}/update`,{
        content: rawHTML
      })
      router.refresh()
    },1000)
  },[])

  useEffect(() => {
    setRawHTML(note.content);
  }, [note.content]);

  const handleOnChange = (e: any) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
  };


  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleOnChange}
      placeholder="Write something"
    />
  );
};
export default NoteDetail;
