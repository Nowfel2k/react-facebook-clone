import React from 'react'
import '../Styles/ChatBar.css'
import Friend from './Child Components/Friend'
import Request from './Child Components/Request'

function ChatBar() {

    const friends_list = ['Bobby', 'Faiz', 'Fazil', 'Arief', 'Nabeel', 'Abdullah', 'Aadhil', 'Farhan', 'Kaja', 'Mydeeen', 'Salahudheen']

    return (
        <div className="chatbar">
            <div className="chatbar__requests">
                <div className="chatbar__requests--info">
                    <h4>Friend Requests</h4>
                    <p>See All</p>
                </div>
                <Request
                    src="https://avatars.dicebear.com/api/avataaars/asdiuahshdu.svg?options[mouth][]=smile"
                    name="Aswath"
                />
                <Request
                    src="https://avatars.dicebear.com/api/avataaars/ashdahsgdyuqwuie.svg?options[mouth][]=smile"
                    name="Prashant"
                />
            </div>
            <div className="chatbar__contacts">
                <h4>Contacts</h4>

                {friends_list.map((friend, key) => {

                    return (<Friend
                        key={key}
                        name={friend}
                    />)
                })}

            </div>
        </div>
    )
}

export default ChatBar
