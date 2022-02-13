import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { Provider } from 'react-redux';
import store from './store';
function App () {
  return (
    <>
      <Provider store={store}>
        <Navbar brand='Redux React App' />
        <UserList />
      </Provider>
    </>
  );
}

export default App;
