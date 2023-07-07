import React, {useState} from 'react'

export default function Todo(props) {
  const [text, settext] = useState('enter your text here');
  const handleupclick =()=>{
    //console.log("lower case was clicked"+text)
    settext(text.toUpperCase())
  }
  const handledownclick =()=>{
    //console.log("upper case was clicked"+text)
    settext(text.toLowerCase())
  }
  const handleclearclick =()=>{
    //console.log("upper case was clicked"+text)
    settext('')
  }
  const handleonchange=(event)=>{
    //console.log("value changed")
    settext(event.target.value)
  }
  return (
    <div style={{color:props.mode==="dark"?"white":"black"}}>
      <h1 >{props.heading}</h1>
      <div className="my-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
      
      <button className="btn btn-primary mx-1" onClick={handledownclick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear data</button>
      <div className='container my-3'>
      <h2 color={`${props.mode==="dark"?"white":"black"}`}>Your text summary</h2>
      <p color={`${props.mode==="dark"?"white":"black"}`}>{text.split(" ").length} words  and {text.length} characters</p>
      </div>
      
      


    </div>
    

  
      
    
  )
}
 