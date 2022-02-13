# Installing Redux

For this part is madatory to research into the offficial documentation, and from there importe the required libraries.

### Link to redux offitial doc
[Redux source](https://redux-toolkit.js.org/tutorials/quick-start)

In this case these were the used libraries that can be installed usign npm i :

- @reduxjs/toolkit
- react-redux
  
```bash
npm install @reduxjs/toolkit react-redux
```

### Where is used redux

Following the documentation redux needs to be saved into a dir that contains file.js like follow:

```js
import { configureStore } from '@reduxjs/toolkit';
import users from './slices/users';
export default configureStore({
  reducer: {
    users
  }
});

```

Also is needed to create an slice to handle specifics states and send them to global state.
For example:

```js
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

```
FInally y inside the specific component is called like follow

```js
  const { list: users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
```
Notice that in this case the state list was rewrite like users and this last is able to be used.
