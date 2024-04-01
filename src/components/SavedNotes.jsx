import Note from "./Note";

import "./assets/css/savedNotes.css";

import {noteFilter} from "../features/note/noteSlice";
import {useSelector} from "react-redux";

const SavedNotes = () => {
	const noteDatas = useSelector(noteFilter);
	return(
		<div className="savedNotes">
			{
					noteDatas.map((noteData,i) => {
						return <Note key={i} noteData={noteData} />
					})
				
			}
		</div>
	)
}

export default SavedNotes