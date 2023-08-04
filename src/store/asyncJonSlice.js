import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  name: "",
};

export const fetchGihubUserFromAPI = createAsyncThunk(
  "githubhandlers/fetchUsers",
  async (handle) => {
    const res = await fetch(`https://api.github.com/users/${handle}`).then(
      (res) => res.json()
    );

    return res;
  }
);

export const githubAPISlice = createSlice({
  name: "githubhandlers",
  initialState,
  reducers: {
    add: (state, actions) => {
      //TODO : add some charsP
    },
  },
  extraReducers: {
    [fetchGihubUserFromAPI.fulfilled]: (state, action) => {
        debugger
      state.name = action.payload.name;
    },
  },
});
