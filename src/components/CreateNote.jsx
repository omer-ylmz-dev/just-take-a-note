import {useSelector, useDispatch} from "react-redux";
import {creatingNote} from "../features/note/noteSlice";
import {CreatingScreen} from "../features/window/windowSlice";

import NoteEditor from "./NoteEditor";


const CreateNote = ({createdNote,setCreatedNote}) => {
	const dispatch = useDispatch();

	const writingProcess = (e) => {
		setCreatedNote(prev => ({...prev, [e.target.name]: e.target.value}));
	}
	
	const createDate = () => {
		let date = new Date();
		return [date.toLocaleDateString(),date.toLocaleTimeString()];		
	}
	
	const addNote = () => {
		if(createdNote.title.length !== 0 && createdNote.note.length !== 0){
			dispatch(creatingNote({...createdNote, id: Date.now().toString() , date: createDate()[0], time:createDate()[1]}));
			dispatch(CreatingScreen());
			setCreatedNote({title:"", note:""});
		}else{
			dispatch(CreatingScreen());
		}
	}
	return(
		<NoteEditor 
			content={createdNote} 
			processFunction={writingProcess} 
			windowStatusFunction={CreatingScreen} 
			finalFunction={addNote}
		/>
	)
}

export default CreateNote