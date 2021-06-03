import Getrequest from "../request/get_request"
import React, { useEffect, useState } from 'react'
import Lecture from "./Lecture"
import "./content.css"
var n = 60


export default function Content() {
    const [data, setdata] = useState([])
    const [loaded, setloaded] = useState(1)
    const [sec, setsec] = useState(60)
    const down=()=>{
        setsec(n)
    }
    useEffect(() => {
        Getrequest("",setdata,setloaded)
        setInterval(() => {
            Getrequest("",setdata,setloaded)
            console.log(data)
        },60000);
        
        const interval = setInterval(() => {
            n-=1
            if(n<0){
                n=60
            }
            down()
            console.log(n)
        }, 1000);
        console.log(sec)
        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
          };
    }, [])
    console.log(data)
    return (
        <div className="content-container">
            {data.map((item)=>{
                return(
                    <Lecture item={item} sec={sec}/>
                )
            })}
        </div>
    )
}
