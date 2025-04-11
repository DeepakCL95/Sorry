import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: 1
  },
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    }
  }
});

export const { nextPage } = pageSlice.actions;
export default pageSlice.reducer;