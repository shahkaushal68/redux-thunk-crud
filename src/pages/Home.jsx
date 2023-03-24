import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const { users } = useSelector(
        (state) => state.userReducer,
      );
  return (
    <ul>
        {
          users && users?.map((user) => (
            <li key={user?.id}><Link to={`/view/${user?.id}`}>{user?.username} - {user?.id}</Link></li>
          ))
        }
      </ul>
  )
}

export default Home