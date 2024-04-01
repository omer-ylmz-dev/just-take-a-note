import {createSlice,createSelector} from "@reduxjs/toolkit";

const initialState = {
	creatingScreenStatus: false,
	readingScreenStatus: false,
	editingScreenStatus: false,
	optionsScreenStatus: false
}


export const windowSlice = createSlice({
	name: "window",
	initialState,
	reducers:{
		ReadingScreen: (state,action) => {
			if(state.readingScreenStatus){
				state.readingScreenStatus = false;
			}else{
				state.readingScreenStatus = action.payload;
			}
		},
		EditingScreen: (state,action) => {
			if(state.editingScreenStatus){
				state.editingScreenStatus = false;
			}else{
				state.editingScreenStatus = action.payload;
			}
		},
		CreatingScreen: (state) => {
			state.creatingScreenStatus = !state.creatingScreenStatus;
		},
		OptionsScreen: (state,action) => {
			if(state.optionsScreenStatus){
				state.optionsScreenStatus = false;
			}else{
				state.optionsScreenStatus = action.payload;
			}
		}
	}
})

export const {ReadingScreen,EditingScreen,CreatingScreen,OptionsScreen} = windowSlice.actions;

export default windowSlice.reducer;


export const CreatingWindow = createSelector(state => state.windowStatus, windowStatus => windowStatus.creatingScreenStatus);
export const ReadingWindow = createSelector(state => state.windowStatus, windowStatus => windowStatus.readingScreenStatus);
export const EditingWindow = createSelector(state => state.windowStatus, windowStatus => windowStatus.editingScreenStatus);
export const OptionsWindow = createSelector(state => state.windowStatus, windowStatus => windowStatus.optionsScreenStatus);