import React from "react";

import Header from "./App/Header";
import Bloglist from "./App/Bloglist";
import Footer from "./App/Footer";

import "./style.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Bloglist></Bloglist>
            <Footer></Footer>
        </div>
    );
}

export default App;