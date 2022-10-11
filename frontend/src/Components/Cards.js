import React from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import {
  setSong
} from "./Actions/index";

function Cards(props) {
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <h3>{props.title}</h3>
      <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="true">

              <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-6@m">
                {props.tracks.map((item)=>{
                  return <li>
                    <div className='card-container' onClick={()=>{dispatch(setSong(item))}}>
                            <div className="uk-card uk-card-default uk-padding-small">
                                <div className="uk-card-media-top">
                                    <img src={item.path} width="200" height="180" alt="" />
                                </div>
                                <div className="uk-card-content">
                                    <p className='title uk-text-center	uk-margin-remove'>{item.name}</p>
                                    <p className="uk-text-center	uk-margin-remove">{(item.Artists)&&item.Artists.join(", ")}</p>
                                </div>
                            </div>
                    </div>
                </li>
                })}
                </ul>

        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
      </div>
    </div>
  )
}
export default Cards;