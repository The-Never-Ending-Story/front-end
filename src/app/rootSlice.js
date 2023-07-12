import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  discoveredWorlds: [],
}

export const rootSlice = createSlice( 
  {
    name: 'root',
    initialState, 
    reducers: {
      getDiscoveredWorlds: (state, action) => {
        state.discoveredWorlds = action.payload
      }
      // saveWorld: (state, action) => {
      //   state.discoveredWorlds.push(action.payload)
      // },
      // deleteWorld: (state, action) => {
      //   state.discoveredWorlds = state.discoveredWorlds.filter(world => world !== action.payload)
      // }
    }
  }
)

export const { getDiscoveredWorlds } = rootSlice.actions;
export default rootSlice.reducer;