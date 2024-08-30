
import getNotes from "@/app/actions/getNotes";
import NoteList from "./components/NoteList";

interface IParams {
  folderId: string
}

export default async function FolderIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: IParams;
}) {
  const notes = await getNotes(params.folderId)
  return (
    <div className="w-full h-full flex">
      <div className="w-1/3">
        <NoteList notes={notes}/>
      </div>
      <div className="w-2/3">{children}</div>
    </div>
  );
}
