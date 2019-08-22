import React from "react";
import Header from "./Header";
import {Switch, Route} from "react-router-dom";
import Services from "./Services";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";

import "./index.css";

function App(){
    return(
        <div className='appWrap'> 
            <Header />
            <Services />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;