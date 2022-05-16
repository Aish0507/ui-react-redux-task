import React, { Fragment, useState } from 'react';
import './Landing.scss'
import Users from './Users';
const Landing = () => {
    const [showUserList, setshowUserList] = useState(false);
    const handleUserListClick = () => {
        setshowUserList(!showUserList)
    }
    return (
        <Fragment>
            <div className="main1">
                <div className="bg-img">
                    <nav className="menu-bar">
                        <h2>amdocs test</h2>

                        <button className="contact-btn" onClick={handleUserListClick}>{showUserList ? 'Hide User List' : 'User List'}</button>

                        <div className="hamburger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </nav>
                    <div className="create-arrow">
                        <h1 className="creative">MAKE IT AMAZING</h1>
                        <img alt='' src="/images/icon-arrow-down.svg" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="onestyle">
                    <h4>What is Lorem Ipsum?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Ut tellus elementum sagittis vitae et. Consequat nisl vel pretium lectus quam id leo. Nec tincidunt praesent semper feugiat nibh sed pulvinar.
                    </p>
                </div>
                <img alt='' src="/images/desktop/image-transform.jpg" />
                <img alt='' src="/images/desktop/image-stand-out.jpg" />
                <div className="onestyle">
                    <h4>What is Lorem Ipsum?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Ut tellus elementum sagittis vitae et. Consequat nisl vel pretium lectus quam id leo. Nec tincidunt praesent semper feugiat nibh sed pulvinar.
                    </p>
                </div>
            </div>
            {JSON.stringify(showUserList) === 'true' ? (<Users showUserList={showUserList} />) : ''}
        </Fragment>
    )
}
export default Landing