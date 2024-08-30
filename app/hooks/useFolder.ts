import { useParams } from "next/navigation";
import { useMemo } from "react";
import noteId from './../home/[folderId]/note/[noteId]/page';

const useFolder = () => {
  const params = useParams();

  const folderId = useMemo(() => {
    if (!params?.folderId) {
      return "";
    }
    return params.folderId as string;
  }, [params?.folderId]);

  const noteId = useMemo(() => {
    if(!params?.noteId) {
      return "";
    }
    return params.noteId as string;
  }, [params?.noteId])

  return useMemo(() => ({
    folderId,
    noteId
  }),[folderId, noteId])
};

export default useFolder;
