import React from "react";

import Nav from "./Nav";
import Info from "./Info";
import Product from "./Product";
import Image from "./Img";
import Footer from "./Footer";


function App (){
    return(
    <div>
        <Nav />
            <Info />
                <Product />
                    <Img />
                        <Footer />
    </div>   
    )
}
       export default App;