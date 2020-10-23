import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${show && "nav__show"}`}>
            <img className="nav__logo" src='https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png' alt='Netflix Clone'></img>
            <img className="nav__avatar" src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='Netflix Avatar' />

        </div>
    )
}

export default Nav
