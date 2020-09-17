import React from 'react';

const NewsDisplay = (props) => {
    console.log(props)

    const renderList = props.newsdata.map((data,index) => {
        return(
            <div key={data.id}>
                <p>{index}</p>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <div>
           {renderList}
        </div>
    )
}

export default NewsDisplay;