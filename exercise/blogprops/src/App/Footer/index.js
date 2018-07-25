import React from "react";

import "./Footer.css";

import facebook from "./facebookicon.png";
import twitter from "./twittericon.png";
import github from "./twittericon.png";

function Footer(props) {
    return (
        <div className="footer-wrapper">
            <div className="icons">
                <img className="twitter" src={twitter} alt="" />
                <img className="facebook" src={facebook} alt="" />
                <img className="github" src={github} alt="" />
            </div>
            <div className="copyright">Copyright &copy; Your Website 2017</div>
        </div>
    );
}

export default Footer