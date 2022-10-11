import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "../styles/Search.css"
import { FaHeart,FaRegHeart} from 'react-icons/fa';
import axios from 'axios';
import {
  setTrack
} from "./Actions/index";
export default function Search() {
    const [allTracks,setAllTracks] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/track").then((res)=>{
      console.log(res.data)
      dispatch(setTrack(res.data))
      setAllTracks(res.data);
    })
    },[])

    const dispatch = useDispatch();
    const filter = (event) =>{
        const search_text= event.target.value;
        let tracks=allTracks.filter((track)=>{
            return track.name.match(search_text)
        })
        dispatch(setTrack(tracks))
    }
  return (
    <div class="uk-margin ">
        <div class="uk-inline search-bar">
            <span class="uk-form-icon" uk-icon="icon: search"></span>
            <input class="uk-input" type="text" placeholder='search track...' onChange={filter}/>
        </div>
    </div>
  )
}
