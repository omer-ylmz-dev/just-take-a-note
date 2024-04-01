import TopBar from "../components/TopBar"
import SavedNotes from "../components/SavedNotes"
import {useSelector,useDispatch} from "react-redux"
import {OptionsWindow,OptionsScreen} from "../features/window/windowSlice"

const App = () => {
	const dispatch = useDispatch()
	const optionsScreenStatus = useSelector(OptionsWindow)
	const closeAllWindows = () => {
		if(optionsScreenStatus){
			dispatch(OptionsScreen())
		}
	}
	return(
			<div onClick={() => closeAllWindows()}>
				<TopBar/>
				<SavedNotes/>
			</div>
		
	)
}

export default App