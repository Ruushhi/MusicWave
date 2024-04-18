import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
// import { IconContext } from "react-icons";
// import { AiFillPlayCircle } from "react-icons/ai";
// import "./library.css";
// import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);


  return(
    <div className="screen-container">
      {playlists?.map((playlist) =>{
      <div>{playlist.name}</div>
      })}
    </div>
  ) ;

   
}
   