import "../styles/musicplayer.css"
import { FaHeart,FaRegHeart} from 'react-icons/fa';
import { MdShuffle,MdSkipNext,MdSkipPrevious,MdPlayArrow,MdRepeat,MdPause } from 'react-icons/md';
import ProgressBar from 'react-animated-progress-bar';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";


function MusicPlayer() {

  const [isPlay,setIsPlay] = useState(true) 
  const [isfav,setFav] = useState(false) 
  
  const song = useSelector((state) => state.currentSongReducer);
  const dispatch = useDispatch();
  return (
    <div>
      {(song)&&
        <div className='player uk-padding-small uk-flex '>
        <div className='leftContent uk-flex uk-width-1-3'>
            <img src={song.path} width={90} height={90}/>
            <div className='uk-margin-left song-desc uk-flex uk-flex-column uk-flex-around'>
              <span>{song.name}</span>
              <span>{song.Artists.join(", ")}</span>
            </div>
            
            {isfav?<FaHeart onClick={()=>{setFav(false)}}/>:<FaRegHeart onClick={()=>{setFav(true)}}/>}
        </div>
        <div className='uk-margin-left song-play uk-flex uk-flex-column uk-flex-around'>
            <div className='uk-flex uk-flex-center'>
              <MdShuffle/>
              <MdSkipPrevious/>
              {isPlay?<MdPlayArrow onClick={()=>{setIsPlay(false)}}/>:<MdPause onClick={()=>{setIsPlay(true)}}/>}
              <MdSkipNext/>
              <MdRepeat/>
            </div>
         
            <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="blue"
            percentage={20}
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="grey"
            defColor={{
              fair: 'grey',
              good: 'grey',
              excellent: 'grey',
              poor: 'grey',
            }}
            trackBorderColor="grey"
          />        
        </div>
      </div>}
    </div>
  )
  
}

export default MusicPlayer;
