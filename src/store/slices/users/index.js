import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
});
export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const getUsers = () => async (dispatch) => {
  let users = await axios.get('https://reqres.in/api/users?page=2');
  users = users.data.data;
  dispatch(setUserList(users));
};
