import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignTo: "",
});

const initalState = [
  createTask("Give one interview today"),
  createTask("Give another interview tomorrow"),
];

export const taskSlice = createSlice({
  name: "tasks",
  initalState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
  },
});
//create action manually
export const addTask = createAction("tasks/toggle", (name) => ({
  payload: name,
}));
