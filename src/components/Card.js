import React from "react";

function Card(props) {
     return(
          <div className="card">
               <img className="card-img" src={require(`../images/${props.item.img}`)} alt="card" />
               <div className="card-details">
                    <p className="location"><i class="fas fa-map-marker-alt"></i>&nbsp;<span>{props.item.location}</span>&nbsp;&nbsp;&nbsp;<a href="http://maps.google.com">View on Google Maps</a></p>
                    <h1>{props.item.sightName}</h1>
                    <h5 className="date-range">{props.item.dateRange}</h5>
                    <p className="description">{props.item.description}</p>
               </div>
           </div>
     )
}

export default Card;