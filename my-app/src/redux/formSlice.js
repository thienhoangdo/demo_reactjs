import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name : "",
    age : "", 
    phone : "",
    gender : "",
    valueCity : "",
    valueDistrict : "",
    valueWard : ""
  },
  reducers: {
    setName: (state,action) => {
      console.log(action.payload);
      state.name = action.payload
    },
    setAge: (state,action) => {
      state.age = action.payload
    },
    setPhone: (state,action) => {
      state.phone = action.payload
    },
    setGender: (state,action) => {
      state.gender = action.payload
    },
    setValueCity: (state,action) => {
      state.valueCity = action.payload
    },
    setValueDistrict: (state,action) => {
      state.valueDistrict = action.payload
    },
    setValueWard: (state,action) => {
      state.valueWard = action.payload
    },
    
  },
})

export const {  setName ,setAge,setPhone ,setGender ,setValueCity ,setValueDistrict ,setValueWard} = formSlice.actions


export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value

export default formSlice.reducer
