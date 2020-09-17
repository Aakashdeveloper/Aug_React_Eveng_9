import React from 'react';
import Home from './Home';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import LifeCycle from './lifecycle';
import HooksComponent from './HooksComponent';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/lifecycle" component={LifeCycle}></Route>
                <Route path="/hooks" component={HooksComponent}></Route>
            </div>
        </BrowserRouter>
    )
}


export default Routing;