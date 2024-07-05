import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    const { loggedIn, email } = props; 

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem('user')
            props.setLoggedIn(false)
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div>WELCOME !</div>
            </div>
            <div>VORSV</div>
            <div className={'buttonContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick()}
                    value={ !loggedIn ? 'Login' : 'Not logged in'}
                />
                    {loggedIn ? <div>' Your email address is {email}'</div> : <div /> }
            </div>
        </div>
    )
}

export default Home;