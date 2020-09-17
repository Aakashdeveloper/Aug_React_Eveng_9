import React,{Component} from 'react';
import axios from 'axios';
import Albums from './Albums'


const url = "http://localhost:8900/artists";

class ArtistDetails extends Component{
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    render(){
        //var mydetails = this.state.details
        var {details} = this.state
        return(
            <div>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${details.cover}.jpg')`}}></span>
                    </div>
                    <h3>{details.name}</h3>
                    <div className="bio_text">
                        {details.bio}
                    </div>
                    <Albums albumslist={details.albums}/>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(`${url}/${this.props.match.params.id}`)
        this.setState({details:response.data})
    }

    /*componentDidMount(){
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => {this.setState({details:response.data})})
    }*/
}   


export default ArtistDetails;