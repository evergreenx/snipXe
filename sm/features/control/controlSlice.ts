import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Color, ColorResult, SketchPickerProps } from "react-color";

export interface controlSliceState {
  value: string;
  name: string;
  theme: string;
  mode: string;
  bg: string | undefined;
  p: {
    v: string;
    h: string;
  };
  font: string;
  lineH: string;
  os: "w" | "m";
}

const defaultColorResult: ColorResult = {
  hex: "#cacad7", // Hexadecimal value for blue
  hsl: { h: 240, s: 100, l: 50 }, // Hue: 240 (blue), Saturation: 100%, Lightness: 50%
  rgb: { r: 0, g: 0, b: 255 }, // Red:
};

const initialState: controlSliceState = {
  mode: "javascript",
  theme: "dracula",
  bg: "#cacad7",
  value: "console",
  name: "untitled snipx",
  p: {
    v: "15",
    h: "15",
  },
  font: "",
  lineH: "150%",
  os: "w",
};

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    handleBgUpdate: (state, action: PayloadAction<string>) => {
      if (state.bg) {
        state.bg = action.payload as string;
      }
    },

    handleLanguageModeUpdate: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },

    handleValueUpdate: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
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

    handleLineHeightUpdate: (state, action: PayloadAction<string>) => {
      state.lineH = action.payload;
    },
    handleOSUpdate: (state, action: PayloadAction<"w" | "m">) => {
      state.os = action.payload;
    },
    handleNameUpdate: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleNameUpdate,
  handleBgUpdate,
  handleLanguageModeUpdate,
  handleThemeUpdate,
  handleVPaddingUpdate,
  handleHPaddingUpdate,
  handleFontUpdate,
  handleLineHeightUpdate,
  handleOSUpdate,
  handleValueUpdate,
} = controlSlice.actions;

export default controlSlice.reducer;
