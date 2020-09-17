import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            title:'Developer Funnel',
            keyword:'User Text Here'
        }
    }
    handleChange = (event) => {
        ///console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }
    render(){
        ///console.log("I am in render")
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;