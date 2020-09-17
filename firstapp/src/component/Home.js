import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsDisplay from './NewsDisplay';
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*var a = [23,43,35,36,12,38]
    a.filter((data) => { return data>34})*/
    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return  data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        return (
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2020-2021"/>
            </React.Fragment>
        )
    }
    
}

export default Home;