import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import '../../Styles/Request.css'

function Request({ name, action, id }) {

    const [seed, setSeed] = useState('')
    const [randomDays, setRandomDays] = useState(0)

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
        setRandomDays(Math.floor(Math.random() * 30))
    }, [])


    return (
        <div className="request">
            <Avatar className="request__avatar" src={`https://avatars.dicebear.com/api/avataaars/${(seed)}.svg?options[mouth][]=smile`} />
            <div className="request__info">
                <div className="request__name">
                    <p>{name}</p>
                    <p className="request__date">{randomDays} d</p>
                </div>
                <div className="request__buttons">

                    <button
                        onClick={e => action(e, id)}
                        className="request__accept">Accept</button>
                    <button
                        className="request__delete">Delete</button>

                </div>
            </div>
        </div>
    )
}

export default Request
