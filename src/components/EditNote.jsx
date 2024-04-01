import {useDispatch} from "react-redux";
import {editingNote} from "../features/note/noteSlice";
import {EditingScreen} from "../features/window/windowSlice";

import NoteEditor from "./NoteEditor";

const EditNote = ({editedNote,setEditedNote}) => {
	const dispatch = useDispatch();
	
	const editingProcess = (e) => {
		setEditedNote(prev => ({...prev, [e.target.name]: e.target.value}));
	}
	
	const editNote = () => {
			dispatch(editingNote(editedNote));
			dispatch(EditingScreen(editedNote.id));
	}
	return(
		<>
			<NoteEditor 
				content={editedNote} 
				processFunction={editingProcess} 
				windowStatusFunction={EditingScreen} 
				finalFunction={editNote}
			/>
		</>
	)
}

export default EditNote