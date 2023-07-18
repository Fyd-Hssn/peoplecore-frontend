import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager' },
  // Add more sample employees as needed
];

const applicantSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      return action.payload.trim() === ''
        ? initialState
        : state;
    },
  },
});

export const { setSearchQuery } = applicantSlice.actions;

export default applicantSlice.reducer;
