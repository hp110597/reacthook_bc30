import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Component:(props)=>{
        return <div>
            Default Component
        </div>
    }

}

const drawerReducer = createSlice({
  name: 'drawerReducer',
  initialState,
  reducers: {
    setComponent:(state,action)=>{
        //Lấy component từ payload
        const Component = action.payload
        state.Component = Component

    }
  }
});

export const {setComponent} = drawerReducer.actions

export default drawerReducer.reducer