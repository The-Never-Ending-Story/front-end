import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  discoveredWorlds: [],
  isLoading: true,
  error: '',
  newlyFoundWorld:{}
}

export const rootSlice = createSlice( 
  {
    name: 'root',
    initialState, 
    reducers: {
      getDiscoveredWorlds: (state, action) => {
        state.discoveredWorlds = action.payload
      },
      findNewWorld:(state, action) => {
        state.newlyFoundWorld = action.payload
      },
      changeIsLoading: (state, action) => {
        state.isLoading = action.payload
      },
      changeError: (state, action) => {
        state.error = action.payload
      }
    }
  }
)

export const { getDiscoveredWorlds, changeIsLoading, changeError } = rootSlice.actions;
export default rootSlice.reducer;