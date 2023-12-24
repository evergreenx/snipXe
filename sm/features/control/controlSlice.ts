import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Color , ColorResult, SketchPickerProps } from "react-color";


export interface controlSliceState {
  value: number;
  name: string;
  theme: string;
  mode: string;
  bg:  ColorResult | undefined;
}


const defaultColorResult: ColorResult = {
  hex: '#FFFFFF',
  hsl: { h: 0, s: 0, l: 100 },
  rgb: { r: 255, g: 255, b: 255 },
};

const initialState: controlSliceState = {
  mode: "javascript",
  theme: "material",
  bg: defaultColorResult,
  value: 0,
  name: "john",
};

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    handleBgUpdate: (state, action: PayloadAction<Color>) => {
      if(state.bg) {
        state.bg.hex = action.payload as string
      };
    },
 

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleBgUpdate, incrementByAmount } = controlSlice.actions;

export default controlSlice.reducer;
