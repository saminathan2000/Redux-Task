import "../styles/Home.css"
import Cards from "./Cards"
import MusicPlayer from "./MusicPlayer";
import Search from "./Search"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";

import {
  setTrack
} from "./Actions/index";
function Home() {
  const [albums,setAlbums] = useState([])
  const [playlists,setPlaylists] = useState([])
  const dispatch = useDispatch();
  const filteredTrack = useSelector((state) => state.filterTrackReducer);
  useEffect(() => {
    
    axios.get("http://localhost:4000/album").then((res)=>{
      console.log(res.data)
      setAlbums(res.data.concat(res.data));
    })
    axios.get("http://localhost:4000/playlist").then((res)=>{
      console.log(res.data)
      setPlaylists(res.data.concat(res.data));
    })
  },[]);
  return (
    <div>
      <Search/>
      <MusicPlayer/>
      <Cards title="Top Tracks" tracks={filteredTrack} />
      <Cards title="Top Albums" tracks={albums} />
      <Cards title="Top Playlists" tracks={playlists} />
      
    </div>
  )
}

export default Home;
