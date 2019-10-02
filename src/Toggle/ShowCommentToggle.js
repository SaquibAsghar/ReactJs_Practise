import React,{useState} from 'react';
// import "./ShowCommentToggle.css"


const ShowCommentToggle = ()=>{
  const[comment] = useState("I am comment");
  const[commentstate,setcomentstate] = useState();
  const showCommentHandler = ()=>{
    return (
     setcomentstate(true)
    );
  }
  const hideCommentHandler = ()=>{
    return (
     setcomentstate(!true)
    
    );
  }
  const styels = {
    border: '1px solid black',
    color:  'red',
    marginTop : '20px',
    width : '150px',
    height : '150px',
    textAlign : 'center',
    justifyContent : 'center',
    paddingTop : '50px'
  }
return <div>
  <hr/>
  <h1>Hi this is Show Comment </h1>
  <button 
  onClick= {()=>showCommentHandler()}>
    Show Comment
  </button>
  <button
  onClick= {()=>hideCommentHandler()}>
    Hide Comment
  </button>
  { commentstate ?
    <div className = 'CommentBox'
     style={styels}
     > {comment}</div>
    : null
  }
  <div>
   
  </div>
 
</div>
}

export default ShowCommentToggle;