"use client"

import {EditorState} from "draft-js"
import { Editor } from "react-draft-wysiwyg"

const Note = () => {
    return (
        <Editor
        placeholder="Write something"
        />
    )
}
export default Note