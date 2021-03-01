import React from 'react'
import "./Module.css";


function Module({id,title,Icon}) {
    return (
        <div className="module">
            
           <Icon style={{ fontSize: 100 }}/>
           <p>{title}</p>
          


        </div>
    )
}

export default Module
