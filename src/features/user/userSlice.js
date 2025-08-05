import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, setUserToLocal } from "../local/local.js";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()
  },

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      setUserToLocal(state.user);
    },

    logOutUser: (state, action) => {
      state.user = null;
      removeUserFromLocal();
    }
  }

});

export const { addUser, logOutUser } = userSlice.actions;