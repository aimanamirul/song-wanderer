import { useState } from 'react'

import '../Styles/track.css'

function TrackInfo(props) {
    function handleDel(e) {
        console.log(e.target)
        props.deletion(props.track)
    }

    return (
        <div className="track">
            <div className = "info">
                <p className="name">{props.count+1}. {props.track.name}</p>
                <p className="duration">{props.track.duration}</p>
            </div>
            <div className="del">
                <button onClick={handleDel}>-</button>
            </div>
        </div>
    )
}

export default TrackInfo