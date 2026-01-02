import {useState,useRef,useEffect} from "react";

export default function App(){
    const[messages,setMessages]= useState([
        {id:1,user:"Bot",text:"Hello! How can I assist you today?"}
    ]);

const [text,setText]= useState("");
const [user,setUser]= useState("Aman")

const chatEndRef= useRef(null);

useEffect(()=>{
    chatEndRef.current?.scrollIntoView({behavior:"smooth"});
},[messages]);


function handleSend(e){

    e.preventDefault();

    if(!text.trim()) return;

    const newMsg={
        id:Date.now(),
        user:user,
        text:text.trim()

    };

    setMessages([...messages,newMsg]);
    setText("");
}

    return(

        <div style={{maxWidth:"600px",margin:"40px auto",fontFamily:"arial",}}>

<h1>VERSION 2 chat box</h1>

<input
value={user}
placeholder="Username.."
onChange={e=>setUser(e.target.value)}
style={{width:"20%",padding:"8px", marginBottom:"10px",marginLeft:"20px"}}/>

<div style={{border:"1px solid grey",height:"300px",borderRadius:"10px",overflowY:"auto",
    background:"white",marginLeft:"20px"}}>

        {messages.map(msg=>(
            <div key={msg.id}
            style={{
                marginBottom:"10px",
                marginTop:"5px",
                textAlign:msg.user===user? "right" : "left",
                display: "block",
                width:"fit-content",
                padding: "8px 12px",
                borderRadius: "10px",
                background:msg.user===user? "skyblue" : "grey",
                marginLeft:msg.user===user? "auto" : "3px",
                marginRight:msg.user===user? "3px" : "auto",



            }}> <strong>{msg.user}:</strong> {msg.text}
            </div>

        ))}

        <div ref={chatEndRef}></div>




</div>

<form onSubmit={handleSend} style={{marginTop:"10px"}}>

<input
value={text}
placeholder="type message"
onChange={e=>setText(e.target.value)}
style={{padding:"8px",width:"92%",marginLeft:"20px"}}

onKeyDown={e=>{if(e.key==="Enter" && !e.shiftKey) handleSend(e);}}/>

<button type="submit"
style={{padding:"8px 16px",marginTop:"10px",marginLeft:"20px"}}>Send</button>

</form>

        </div>
        
    );
}
