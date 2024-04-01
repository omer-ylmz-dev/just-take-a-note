import "./assets/css/noteEditor.css";
import {useDispatch} from "react-redux";
import { MdClose } from "react-icons/md";

const NoteEditor = ({content,processFunction,windowStatusFunction,finalFunction}) => {
	const dispatch = useDispatch();
	return(
		<div className="backGround">
			<div className="noteEditor">
				<div className="title">
					<input value={content.title} type="text" className="createTitle" placeholder="Title" name="title" onChange={(e) => processFunction(e)}/>
					<MdClose size={30} className="exitButton" onClick={() => dispatch(windowStatusFunction())} />
				</div>
				<div className="note">
					<textarea value={content.note} className="createNote" placeholder="Note" name="note" onChange={(e) => processFunction(e)}></textarea>
				</div>
				<div className="send">
					<div className="submitButton" onClick={finalFunction}>Send</div>
				</div>
			</div>
		</div>
	)
}

export default NoteEditor