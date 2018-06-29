import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App (){
    //Component renders React elements for other components 
    return(
    <div>
        <Header />
            <Content />
                <Footer />
    </div>   
    )
}
       export default App;