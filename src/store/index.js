import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";
import { githubAPISlice } from "./asyncJonSlice";

export const store = configureStore({
  reducer: {
    // tasks: taskSlice.reducer,
    users: githubAPISlice.reducer
  },
});
