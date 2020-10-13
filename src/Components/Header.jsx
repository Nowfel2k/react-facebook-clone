import React from 'react'
import '../Styles/Header.css'

import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FlagIcon from '@material-ui/icons/Flag'
import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import SearchIcon from '@material-ui/icons/Search'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'

import { Avatar, IconButton } from '@material-ui/core'
import { useStateValue } from '../StateProvider'

function Header() {


    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="header">

            <div className="header__left">

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt=""
                />

                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>


            </div>


            <div className="header__middle">

                <div className="header__option selected">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>

            </div>


            <div className="header__right">

                <div className="header__profile">
                    <IconButton>
                        <Avatar src={user?.photoURL} />
                    </IconButton>
                    <h4>{user?.displayName}</h4>
                </div>

                <div className="header__rightIcons">

                    <IconButton>
                        <AddIcon />
                    </IconButton>

                    <IconButton>
                        <ForumIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>



        </div>
    )
}

export default Header
