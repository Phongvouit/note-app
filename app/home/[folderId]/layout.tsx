import NoteList from "./components/NoteList";

export default async function FolderIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex">
      <div className="w-1/3">
        <NoteList />
      </div>
      <div className="w-2/3">{children}</div>
    </div>
  );
}
