import { createSlice } from "@reduxjs/toolkit";

//* Create Slice används för att skapa:
// initial State
// Reducers
// Actions

const countSlice = createSlice({
  name: "count",
  // initial State
  initialState: { value: 0 },

  //Reducers är funktionerna som tar emot current state och en action type
  reducers: {
    //* funktionsnamnet är action typen
    increment: (state) => {
      // och detta är är actionens handling
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

//Här exporteras funktionerna som counterSlice.actions, altså actions av denna slice/fil/state
export const { increment, decrement, reset, incrementByAmount } =
  countSlice.actions;
export default countSlice.reducer;
