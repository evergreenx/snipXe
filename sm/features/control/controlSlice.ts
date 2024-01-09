import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Color, ColorResult, SketchPickerProps } from "react-color";

export interface controlSliceState {
  value: string;
  name: string;
  theme: string;
  mode: string;
  bg: {
    c: string;
    i: string;
  };
  ds: boolean;
  p: {
    v: string;
    h: string;
  };
  font: string;
  fs: string;
  lineH: string;
  os: {
    type: "w" | "m" | "mx";
    active?: boolean;
  };
}

const defaultColorResult: ColorResult = {
  hex: "#cacad7", // Hexadecimal value for blue
  hsl: { h: 240, s: 100, l: 50 }, // Hue: 240 (blue), Saturation: 100%, Lightness: 50%
  rgb: { r: 0, g: 0, b: 255 }, // Red:
};

const initialState: controlSliceState = {
  mode: "javascript",
  theme: "dracula",
  bg: {
    c: "#ddd",
    i: "",
  },
  value: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
  
  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }`,
  name: "untitled snipx",

  ds: true,
  p: {
    v: "55",
    h: "25",
  },
  font: "Rubik",
  fs: "12",
  lineH: "150%",
  os: {
    type: "mx",
    active: true,
  },
};

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    handleBgUpdate: (state, action: PayloadAction<string>) => {
      if (state.bg) {
        state.bg.c = action.payload as string;
      }
    },

    handleBgImageUpdate: (state, action: PayloadAction<string>) => {
      if (state.bg) {
        state.bg.i = action.payload as string;
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

    handleFontSizeUpdate: (state, action: PayloadAction<string>) => {
      state.fs = action.payload;
    },
    handleLineHeightUpdate: (state, action: PayloadAction<string>) => {
      state.lineH = action.payload;
    },
    handleOSUpdate: (
      state,
      action: PayloadAction<controlSliceState["os"]["type"]>
    ) => {
      state.os.type = action.payload;
    },

    handleOSActiveUpdate: (
      state,
      action: PayloadAction<controlSliceState["os"]["active"]>
    ) => {
      state.os.active = action.payload;
    },

    handleNameUpdate: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    handleDropShadowUpdate: (state, action: PayloadAction<boolean>) => {
      state.ds = action.payload;
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
  handleOSActiveUpdate,
  handleDropShadowUpdate,
  handleFontSizeUpdate,
  handleBgImageUpdate
} = controlSlice.actions;

export default controlSlice.reducer;
