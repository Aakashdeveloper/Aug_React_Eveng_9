import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <div>
            <hr/>
            <center>
            <p>&copy; DeveloperFunnel {props.year}</p>
            </center>
        </div>
    )
}

export default Footer;