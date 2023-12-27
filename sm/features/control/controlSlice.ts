import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Color, ColorResult, SketchPickerProps } from "react-color";

export interface controlSliceState {
  value: number;
  name: string;
  theme: string;
  mode: string;
  bg: ColorResult | undefined;
  p: {
    v: string;
    h: string;
  };
  font: string
}

const defaultColorResult: ColorResult = {
  hex: "#cacad7", // Hexadecimal value for blue
  hsl: { h: 240, s: 100, l: 50 }, // Hue: 240 (blue), Saturation: 100%, Lightness: 50%
  rgb: { r: 0, g: 0, b: 255 }, // Red:
};

const initialState: controlSliceState = {
  mode: "javascript",
  theme: "dracula",
  bg: defaultColorResult,
  value: 0,
  name: "john",
  p: {
    v: "15",
    h: "15",
  },
  font: 'Roboto, sans-serif'
};

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    handleBgUpdate: (state, action: PayloadAction<Color>) => {
      if (state.bg) {
        state.bg.hex = action.payload as string;
      }
    },

    handleLanguageModeUpdate: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },

    handleThemeUpdate: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },

    handleVPaddingUpdate: (state, action: PayloadAction<string>) => {
      state.p.v = action.payload;
    },

    handleHPaddingUpdate: (state, action: PayloadAction<string>) => {
      state.p.h = action.payload;
    },
    handleFontUpdate: (state, action: PayloadAction<string>) => {
      state.font = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleBgUpdate,
  handleLanguageModeUpdate,
  handleThemeUpdate,
  handleVPaddingUpdate,
  handleHPaddingUpdate,
  handleFontUpdate
} = controlSlice.actions;

export default controlSlice.reducer;
