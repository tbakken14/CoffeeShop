import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App(){
  return ( 
    <React.Fragment>
        <Header />
        <div className="content"></div>
        <Footer />
    </React.Fragment>
  );
}

export default App;