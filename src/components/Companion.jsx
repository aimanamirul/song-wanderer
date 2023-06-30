import { useState, useRef } from 'react'

import TrackInfo from './TrackInfo'
import '../Styles/companion.css'

function Companion(props) {

    function deletion(track) {
        console.log(track)

        props.setTracks(
            props.tracks.filter(t => t.id !== track.id)
        )
    }

    const trackList = props.tracks.map((track, i) => {
        return <TrackInfo deletion={deletion} setTrack={props.setTrack} track={track} key={track.id} count={i} />
    });

    function handleSubmit(e) {
        const newId = props.tracks.length + 1
        e.preventDefault()

        props.setTracks(
            [...props.tracks,
            { id: newId, name: e.target.trackInput.value, duration: "0:00" }
            ]
        )

        e.target.trackInput.value = ''
    }

    return (
        <section className='companion'>
            <ul>
                {trackList}
            </ul>

            <div>
                <form className='trackInput' onSubmit={handleSubmit}>
                    <input type="text" className='trackInputField' name="trackInput" />
                    <div className="add">
                        <button type="submit">+</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Companion