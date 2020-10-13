import React, { useState } from 'react'
import '../../Styles/PostMaker.css'

import { Avatar } from '@material-ui/core'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useStateValue } from '../../StateProvider';

import db from '../../firebase'
import firebase from 'firebase'

function PostMaker() {

    const [{ user }, dispatch] = useStateValue()
    const [inputData, setInputData] = useState('')
    // const [imageUrl, setImageUrl] = useState('')

    const handleChange = (e) => setInputData(e.target.value)

    const submitPost = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            postContent: inputData,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            profileName: user.displayName
        })

        setInputData('')
    }


    return (
        <div className="postMaker">
            <div className="postMaker__top">
                <Avatar src={user?.photoURL} className="postMaker__avatar" />
                <form>

                    <input
                        value={inputData}
                        onChange={handleChange}
                        className="postMaker__input"

                        placeholder={
                            `What's on your mind, ${user?.displayName}?`
                        }

                        type="text"
                    />

                    <button onClick={submitPost} type="submit" >Post</button>


                </form>
            </div>
            <div className="postMaker__bottom">

                <div className="postMaker__button">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="postMaker__button">
                    <LocalOfferIcon style={{ color: "#2e81f4" }} />
                    <h3>Tag Friends</h3>
                </div>



            </div>


        </div>
    )
}

export default PostMaker
