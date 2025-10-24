// store/features/mainContent/mainContentSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface MainContentState {
	activeDrawer: string | undefined;
}

const initialState: MainContentState = {
	activeDrawer: undefined
};

const mainContentSlice = createSlice({
	name: 'mainContent',
	initialState,
	reducers: {
		setActiveDrawer: (state, action: PayloadAction<string | undefined>) => {
			state.activeDrawer = action.payload;
		}
	}
});

export const { setActiveDrawer } = mainContentSlice.actions;
export default mainContentSlice.reducer;
