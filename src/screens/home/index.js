import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Library from '../library/library';
import Feed from '../feed/feed';
import Player from '../player/player'
import Trending from '../trending/trending';
import { setClientToken } from "../../spotify";
import Login from "../auth/login";
import "../home/home.css"
import Sidebar from '../../components/sidebar';


export default function Home() {
   const [token , setToken] = useState("");

   useEffect(() => {
      const token = window.localStorage.getItem("token");
      const hash = window.location.hash;
      window.location.hash = "";
      if (!token && hash) {
          const _token = hash.split("&")[0].split("=")[1];
          window.localStorage.setItem("token" , _token);
          setToken(_token);
          setClientToken(token);
      }else{
         setToken(token);
         setClientToken(token);
      }
   },[]);
  return !token ? ( 
        <Login />
  ) : (
     <Router>
        <div className='main-body'>
        <Sidebar />
         <Routes>
            <Route path='/' element={<Library />}/>
            <Route path='/feed' element={<Feed />}/>
            <Route path='/player' element={<Player />}/>
            <Route path='/trending' element={<Trending />}/>
            <Route path='/favorites' element={<Favorites />}/>
        </Routes> 
        </div>
     </Router>
  );
     
   
}
