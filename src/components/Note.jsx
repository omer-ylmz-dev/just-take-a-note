import "./assets/css/note.css";

import {useState,useEffect,memo,useMemo,useCallback} from "react";
import {useSelector} from "react-redux";

import EditNote from "./EditNote";
import PostIt from "./PostIt";
import NoteReader from "./NoteReader";

import {ReadingWindow,EditingWindow} from "../features/window/windowSlice";

const Note = ({noteData}) => {
	const {note} = useSelector(state => state.note);
	const readingScreenStatus = useSelector(ReadingWindow);
	const editingScreenStatus = useSelector(EditingWindow);
	const [noteIDNumber,setNoteIDNumber] = useState(0);
	const [editedNote,setEditedNote] = useState();
	useEffect(()=>{
		setNoteIDNumber(noteData.id);
		setEditedNote(note.find(n => n.id === noteIDNumber));
	},[note,noteData.id,noteIDNumber]);
	return(
		<div className="postIt">
		<PostIt noteData={noteData} noteIDNumber={noteIDNumber}/>
		{readingScreenStatus ===  noteIDNumber && <NoteReader noteData={noteData}/>}
		{editingScreenStatus ===  noteIDNumber && <EditNote editedNote={editedNote} setEditedNote={setEditedNote}/>}
		</div>
	)
}

export default Note