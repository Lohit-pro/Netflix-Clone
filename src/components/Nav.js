import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const tansitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", tansitionNavBar);
    return () => window.removeEventListener("scroll", tansitionNavBar);
  }, []);

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__left">
        <Link to="/">
          <img
            className="nav__netflix__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix_logo"
            onClick={() => navigate('/')}
          ></img>
        </Link>
      </div>
      <div className="nav__right">
        <img
          className="nav__account__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix_account"
          onClick={handleProfileClick}
        ></img>
      </div>
    </div>
  );
}

export default Nav;
