import React from 'react'
import data from './data'
import { GoLocation } from "react-icons/go";

const Journal = (props) => {
  return (

    <div className="container">
      <div className="row">
        
        <div className="col-md-4 p-3">
        <img src={props.imageUrl} className="img-fluid" alt="" />
        </div>

        <div class="col-md-8 p-5">
          <span><GoLocation color='red'/> {props.location}</span> 
          <span><a className='text-body-secondary px-3' href={props.googleMapsUrl}>View on Google Maps</a></span>
          <h1 className='p-2'>{props.title}</h1>
          <span className="fw-bold p-2">{props.startDate} - {props.endDate}</span>
          <p className="p-2">{props.description}</p>
        </div>

      </div>
    </div>
  )
}

export default Journal
