import React,{useState} from "react";
export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked")
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase","success")
     }

     const handleLClearClick=()=>{
        // console.log("Uppercase was clicked")
         let newText="";
         setText(newText);
         props.showAlert("Text cleared","success")
     }

     const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
     }

     const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra Spaces Removed","success")
     }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const [text, setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




    </div>
    <div className="container" my-2 style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 >
            Your text summary
        </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text above to preview it here"}</p>

    </div>
    </>
  );
}
