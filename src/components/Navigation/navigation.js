import React from './node_modules/react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
        return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={()=>onRouteChange("signout")} className='br3 ma2 f3 ma2 shadow-5 link dim black pa3 grow ba b--navy pointer' >Sign out</p>
        </nav>
        )
        } else {
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={()=>onRouteChange("signin")} className='br3 ma2 f3 ma2 shadow-5 link dim black grow ba b--navy pa3 pointer' >Sign In</p>
            <p onClick={()=>onRouteChange("register")} className=' br3 f3 ma2 shadow-5 link dim black grow ba b--navy b--red pa3 pointer' >Register</p>
            </nav>
            )
        }
}
            //b ph3 link pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer
export default Navigation;