import React from 'react';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import PostDetails from './PostDetail';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/post" component={Post}></Route>
                <Route path="/post/:topic" component={PostDetails}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    )
}


export default Routing;