import {configureStore} from "@reduxjs/toolkit"
import noteReducer from "../features/note/noteSlice"
import windowReducer from "../features/window/windowSlice"


export const store = configureStore({
	reducer:{
		note: noteReducer,
		windowStatus: windowReducer
	}
})

