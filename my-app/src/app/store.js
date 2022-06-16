import { configureStore } from '@reduxjs/toolkit';
import formSliceReducer from '../redux/formSlice';

export default configureStore({
  reducer: {
    form: formSliceReducer,
  },
});