import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  applicant: {},
};

const createPlaceholderApplicant = id => ({
  id,
  name: `Applicant ${id}`,
  address: 'Placeholder Address',
  email: `applicant${id}@company.com`,
  applicationStatus: 'Placeholder Status',
});

const applicantOverlaySlice = createSlice({
  name: 'applicantOverlay',
  initialState,
  reducers: {
    showOverlay(state, action) {
      const applicantId = action.payload;
      state.isVisible = true;
      state.applicant = createPlaceholderApplicant(applicantId);
    },
    hideOverlay(state) {
      state.isVisible = false;
    },
    updateApplicant(state, action) {
      if (state.applicant && state.applicant.id === action.payload.id) {
        state.applicant = { ...state.applicant, ...action.payload };
      }
    },
  },
});

export const { showOverlay, hideOverlay, updateApplicant } = applicantOverlaySlice.actions;

export default applicantOverlaySlice.reducer;
