import NoteDetail from "./components/NoteDetail";
import getNoteById from "@/app/actions/getNoteById";

interface IParams {
    noteId: string;
}

const noteId = async({params}: {params: IParams}) => {
    const note = await getNoteById(params.noteId)
    return (
        <div>
            <NoteDetail note={note!}/>
        </div>
    )
}
export default noteId