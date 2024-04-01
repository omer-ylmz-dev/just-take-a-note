import {deleteNote} from "../features/note/noteSlice";
import {EditingScreen} from "../features/window/windowSlice";

import {forwardRef} from "react";
import {useDispatch} from "react-redux";
import { MdDelete } from "react-icons/md";



const NoteOptions = forwardRef(({noteID},ref) => {
	const dispatch = useDispatch();
	return(
		<div className="optionsList" ref={ref}>
			<div className="options">
				<p onClick={() => dispatch(EditingScreen(noteID))}>Edit</p>
				<p onClick={() => dispatch(deleteNote(noteID))}>Delete</p>
			</div>
			<input type="hidden" name="noteID" value={noteID}/>
		</div>
	)
})

export default NoteOptions