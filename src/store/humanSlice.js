import { createSlice, nanoid } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: [],
});
const initialState = [
  createHuman("Mark"),
  createHuman("William"),
  createHuman("Sidharth"),
];
export const humanSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(taskSlice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
            human.taskIds.push(action.payload.taskId);
        }
      }
    });
  },
});
