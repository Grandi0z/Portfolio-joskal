import { createSlice } from '@reduxjs/toolkit';

const name = 'technologies';
const initialState = {
  technologies: [],
  isLoading: false,
  error: '',
};

const technologiesSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export default technologiesSlice.reducer;
export const arrTechnologies = (state) => state.technologies;
