import {useDispatch,useSelector} from "react-redux";

import useClickOutside from "../hooks/useClickOutside";

import {ReadingScreen,OptionsScreen,OptionsWindow} from "../features/window/windowSlice";

import NoteOptions from "./NoteOptions";


const PostIt = ({noteData,noteIDNumber}) =>{
	
	const reference = useClickOutside(() => dispatch(OptionsScreen(false)))
	const optionsScreenStatus = useSelector(OptionsWindow);
	const dispatch = useDispatch();
	return(
		<>
			<div className="title">
				<p onClick={() => dispatch(ReadingScreen(noteData.id))}>{noteData.title}</p>
			</div>
			<div className="note">
				<p>{noteData.note}</p>
			</div>
			<div className="details">
				<span>{noteData.date} - {noteData.time}</span>
				<div className="optionsButton">
					<span onClick={(e) => {
						e.stopPropagation()
						dispatch(OptionsScreen(noteData.id))
					}}>...</span>
					{optionsScreenStatus === noteIDNumber && <NoteOptions ref={reference} noteID={noteData.id}/>}
				</div>
			</div>
		</>
	)
}


export default PostIt