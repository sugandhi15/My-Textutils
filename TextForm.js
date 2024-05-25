import React,{useState} from "react";

export default function TextForm() {
    const onUpClick=()=>{
        let newText=text.toUpperCase();
        settext(newText);
    }
    const onloClick=()=>{
        let newText2=text.toLowerCase();
        settext(newText2);
    }
    const clr=()=>{
        let newtext3=' ';
        settext(newtext3);
    }
    const onChange=(event)=>{
        settext(event.target.value)
    }
    const [text, settext] = useState('enter text of your desire here');
  return (
    <>
    <div className="container">
        <h2>Enter a text here</h2>
      <div className="form-floating my-5">
        <textarea
          className="form-control"
          placeholder="Leave a comment here" 
          id="floatingTextarea" value={text} onChange={onChange}
        ></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
        <br/>
        <button className="btn btn-primary mx-3" onClick={onUpClick}>Change to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={onloClick}>Change to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={clr}>Clear data</button>
      </div>
    </div>
    <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character </p>
        <p>{0.08*text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}