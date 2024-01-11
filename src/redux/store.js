import { configureStore } from '@reduxjs/toolkit';
import technologiesReducer from './technologies/technologiesSlice.js';

const store = configureStore({
  reducer: {
    technologies: technologiesReducer,
  },
});

export default store;
