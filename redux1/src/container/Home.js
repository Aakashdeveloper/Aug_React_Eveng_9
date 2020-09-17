import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../action';
import {bindActionCreators} from'redux';
import DisplayComponent from '../component/DisplayComponent';

class Home extends Component{
    componentDidMount(){
        this.props.movieList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }
}

//To recive the state from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

//To dispatch th action
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);