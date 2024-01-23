import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carsList: [],
}

export const carSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCarDetails: (state , action) => {
      state.carsList = [ ...state.carsList , action.payload ]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCarDetails } = carSlice.actions

export default carSlice.reducer