import React from 'react';

function DisplayComponent(props){
    const renderNews = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div>
                        <h1>Data</h1>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>News Display</h2>
            </center>
            {renderNews(props)}
        </div>
    )
}

export default DisplayComponent;