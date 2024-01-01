import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Color, ColorResult, SketchPickerProps } from "react-color";

interface OsInterface {}
export interface controlSliceState {
  ref: any | null;
}

const initialState: controlSliceState = {
  ref: 0,
};

export const downloadSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    handleSetRef: (state, action: PayloadAction<any | null>) => {
      state.ref = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleSetRef } = downloadSlice.actions;

export default downloadSlice.reducer;
