

function Btn(props){
    return(
        <div><a href={props.link}><button  className="join-btn">Join</button></a></div>
    )
}
export default function Lecture(props){
    
    const item = props.item;
    
    const hour =()=>{
        if(item.hourLeft <=0){
            return 0
        }
        return item.hourLeft
    }
    const minute =()=>{
        if(item.minuteLeft <=0){
            return 0
        }
        return item.minuteLeft
    }
    const second =()=>{
        if(item.minuteLeft<=0 && item.hourLeft <=0){
            return 0
        }
        return props.sec
    }
    return(
        <div className="box-element lecture">
            <div><h4>{item.subject} {" with "} {item.teacher}</h4></div>
            <div className="lectime"  style={{color:"blue"}}><p1>{"Lecture in  "} {hour()}hr {": "} {minute()}min  {" : "}{second()}s</p1></div>
            <Btn link={item.link}/>
        </div>
    )
}



{/* <div><a href={props.link}><button  disabled className="join-btn">Join</button></a></div> */}