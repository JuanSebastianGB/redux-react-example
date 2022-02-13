import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const url = 'https://reqres.in/api/users?page=2';
  const getUsers = async () => {
    const users = await axios.get(url);
    setUsers(users.data.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {users.map((user, index) => (
          <div key={index} className='col-md-3'>
            <div className='card'>
              <img src={user.avatar} alt='avatar' />
              <div className='card-body'>
                <h5 className='card-title'>{user.first_name} {user.last_name}</h5>
                <p className='card-text'>{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
