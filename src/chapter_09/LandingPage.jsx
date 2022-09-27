import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedin, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };
    
    return (
        <div>
            <Toolbar
            isLoggedin={isLoggedin}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16}}>리액트 공부!</div>
        </div>
    );
}

export default LandingPage;