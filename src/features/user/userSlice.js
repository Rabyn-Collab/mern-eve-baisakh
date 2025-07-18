import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUsersToLocal } from "../local/local";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal()
  },
  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setUsersToLocal(state.users);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      })

    },


    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setUsersToLocal(state.users);

    }

  }
});

export const { addUser, updateUser, removeUser } = userSlice.actions;