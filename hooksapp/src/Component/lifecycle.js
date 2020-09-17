//Get Initial state
//Set Initial State
//Before Get Created
//render
//After get created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //1Get Initial state
    constructor(props){
        super(props)

        console.log("inside constructor")
        //2Set Initial State
        this.state={
            title:'LifeCycle'
        }
    }

    ///3 Before Get Created
    UNSAFE_componentWillMount(){
        console.log("inside componentWillMount")

    }

    componentWillUpdate(){
        console.log("inside componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("inside componentDidUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("inside shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 render
    render(){
        console.log("inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    Click me
                </div>
            </div>
        )
    }

    //5 After get created
    componentDidMount(){
        console.log("inside componentDidMount")
    }

    componentWillUnmount(){
        alert('Do you want to leave')
    }

}

export default LifeCycle;