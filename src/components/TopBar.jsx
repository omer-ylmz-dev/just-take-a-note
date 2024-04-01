import "./assets/css/topBar.css";
import {useDispatch,useSelector} from "react-redux";
import {useState} from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

import {searchingNote} from "../features/note/noteSlice";
import {CreatingScreen,CreatingWindow} from "../features/window/windowSlice";

import CreateNote from "./CreateNote";


const TopBar = () => {
	const [createdNote,setCreatedNote] = useState({title:"", note:""});
	const creatingScreenStatus = useSelector(CreatingWindow);
	const dispatch = useDispatch();
	
	const searchingProcess = (e) => {
		e.preventDefault();
		dispatch(searchingNote(e.target.value));
	}
	
	const openCreatingScreen = () => {
		dispatch(CreatingScreen());
	}
	return(
	<>
		<div className="topbar">
			<div className="brand">
				<span>Just Take A Note</span>
			</div>
			<div className="search">
				<div>
					<GoSearch size={30}/>
					<input type="text" placeholder="Search" name="searchingTag" onChange={(e) => searchingProcess(e)}/>
				</div>
			</div>
			<div className="create">
				<FaRegEdit size={30} className="createButton" onClick={openCreatingScreen}/>
			</div>
			{creatingScreenStatus && <CreateNote createdNote={createdNote} setCreatedNote={setCreatedNote}/>}
			
		</div>
	</>
	)
}

export default TopBar