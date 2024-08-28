import { useParams } from "next/navigation";
import { useMemo } from "react";

const useFolder = () => {
  const params = useParams();

  const folderId = useMemo(() => {
    if (!params?.folderId) {
      return "";
    }
    return params.folderId as string;
  }, [params?.folderId]);

  return folderId
};

export default useFolder;
