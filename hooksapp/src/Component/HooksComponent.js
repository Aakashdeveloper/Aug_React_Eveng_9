import React,{useState,useEffect} from 'react';
import DisplayNews from './DisplayNews';

var url ="";

function HooksComponent() {
    const [title] = useState('Developer Funnel');
    const [topic] = useState('Hooks Component');
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [news,setNews] = useState();

    useEffect(() => {
        console.log("Inside useEffect")
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setNews(data)
        });
    });


    return(
        <div>
            <h1>{topic}</h1>
            <h2>{title}</h2>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>
                Counter
            </button>
            <h2>{count1}</h2>
            <button onClick={()=>{setCount1(count1+1)}}>
                Counter
            </button>
            <DisplayNews mydata={news}/>
        </div>
    )
}


export default HooksComponent;