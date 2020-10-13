import { Avatar } from '@material-ui/core'
import React from 'react'
import '../../../Styles/Story.css'

function Story({ storyImage, profileImage, profileName }) {
    return (
        <div
            style={{ backgroundImage: `url(${storyImage})` }}
            className="story"
        >
            <Avatar className="story__avatar" src={profileImage} alt="PROFILE IMAGE" />
            <h4>{profileName}</h4>
        </div>
    )
}

export default Story
