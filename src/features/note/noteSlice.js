import {createSlice,createSelector} from "@reduxjs/toolkit";

const initialState = {
	note : [],
	searchingKeyword : ""
}


export const noteSlice = createSlice({
	name: "note",
	initialState,
	reducers:{
		creatingNote: (state, action) => {
			state.note = [...state.note, action.payload];
		},
		deleteNote: (state, action) => {
			let choice = confirm("Are you sure you want to delete?");
			if(choice == true){
				state.note = [...state.note.filter(n => n.id !== action.payload)];
			}
		},
		editingNote: (state, action) => {
			let choise = confirm("Are you sure you want to edit?");
			if(choise == true){
				state.note = [...state.note.map(n => n.id === action.payload.id ? ({...n, ...action.payload}) : n)];
			}
		},
		searchingNote: (state, action) => {
			state.searchingKeyword = action.payload;		
		}
	}
})
export const {creatingNote,deleteNote,editingNote,searchingNote} = noteSlice.actions;
export default noteSlice.reducer;



export const noteFilter = createSelector(state => state.note.note,state => state.note.searchingKeyword,(note,searchingKeyword) => note.filter(n => n.title.includes(searchingKeyword)));
