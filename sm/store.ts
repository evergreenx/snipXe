import { configureStore } from "@reduxjs/toolkit";
import controlSlice from "./features/control/controlSlice";
import downloadSlice from "./features/control/downloadSlice";

export const store = configureStore({
  reducer: {
    control: controlSlice,
    download: downloadSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
