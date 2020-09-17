import React,{Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import ArtistDetails from './ArtistDetails';
import FormsComponent from './FormComponent';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/artist/:id" component={ArtistDetails}/>
                <Route path="/forms" component={FormsComponent}/>
            </BrowserRouter>
        </Fragment>
    )
}


export default Routing;