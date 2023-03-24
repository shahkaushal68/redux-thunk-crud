import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import View from './pages/View';
import { getAllUsers } from './redux/actions';
import { userTypes } from './redux/constants';

function App() {
 
  const dispatch = useDispatch();
 
  useEffect(()=>{
    //console.log({users});
    const fetchAllUsers = async ()=>{
      const response = await getAllUsers();
      //console.log({response});
       dispatch({
        type: userTypes.GET_ALL_USERS,
        payload: response.data,
      });
    }
    fetchAllUsers();
  },[dispatch])

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/view/:id" element={<View/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
