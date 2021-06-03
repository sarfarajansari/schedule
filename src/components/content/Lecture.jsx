import { ButtonToolbar } from "react-bootstrap";

function Btn(props){
    return(
        <div><a href={props.link}><button  className="join-btn">Join</button></a></div>
    )
}
export default function Lecture(props){
    const item = props.item;
    return(
        <div className="box-element lecture">
            <div><h3>{item.subject} {" with "} {item.teacher}</h3></div>
            <div style={{color:"blue",fontSize:"1.5rem"}}><p1>{"Lecture in  "} {item.hourLeft}hr {": "} {item.minuteLeft}min  {" : "}{props.sec}s</p1></div>
            <Btn link={item.link}/>
        </div>
    )
}



{/* <div><a href={props.link}><button  disabled className="join-btn">Join</button></a></div> */}