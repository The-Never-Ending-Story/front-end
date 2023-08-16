import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  discoveredWorlds: [],
  worldPreviews:[],
  isLoading: true,
  error: '',
}

export const rootSlice = createSlice( 
  {
    name: 'root',
    initialState, 
    reducers: {
      getDiscoveredWorlds: (state, action) => {
        const idAndUrls = action.payload.map(world=>{
          const repackage = {'id':world.id, 'previewUrl':world.img.landscape}
          return repackage
        })
        console.log(idAndUrls)
        state.worldPreviews = idAndUrls
        state.discoveredWorlds = action.payload
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