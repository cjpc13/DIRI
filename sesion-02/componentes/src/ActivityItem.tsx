import React from "react";

interface ActivityItemProps{
    valorAlt: string,
    nombreImagen: string,
    time: string,
    description: string
}

const ActivityItem: React.FC<ActivityItemProps> = ({valorAlt, nombreImagen, time, description}) =>{
    return(
        <div className="item">
          <div className="avatar">
            <img alt={valorAlt} src={`/images/${nombreImagen}.jpg`} />
          </div>
            <div className="taskInfo">
                <span className="time">{time}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ActivityItem;