import "./assets/css/noteReader.css";

import {useDispatch} from "react-redux";
import {ReadingScreen} from "../features/window/windowSlice";
import { MdClose } from "react-icons/md";


const NoteReader = ({noteData}) => {
	const dispatch = useDispatch();
	return(
		<div className="backGround">
			<div className="noteReader">
				<div className="title">
					<h1>{noteData.title}</h1>
					<MdClose size={30} className="exitButton" onClick={() => dispatch(ReadingScreen())} />
				</div>
				<div className="note">
					<span>{noteData.note}</span>
				</div>
				<div className="noteDetails">
					<span className="creatingDate">{noteData.date} - {noteData.time}</span>
				</div>
			</div>
		</div>
	)
}

export default NoteReader