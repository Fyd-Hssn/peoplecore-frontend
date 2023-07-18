import { configureStore } from '@reduxjs/toolkit';
import applicantReducer from '../components/applicantSlice';
import applicantOverlayReducer from '../components/overlaySlice';


const store = configureStore({
  reducer: {
    applicants: applicantReducer,
    applicantOverlay: applicantOverlayReducer,
  },
});

export default store;
