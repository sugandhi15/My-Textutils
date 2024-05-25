import React,{useState} from 'react';

// creating 
export default function TextForms(props) {
  const [text,settext]=useState();
  const changeUpp = () => {
    let newText =text.toUpperCase();
    settext(newText);
    props.showAlert("converted to Uppercase","success")
  }

  const changeLow = () => {
    let newText =text.toLowerCase();
    settext(newText);
    props.showAlert("converted to Lowercase","success")
  }
  
  const onChange=(event)=>{
    settext(event.target.value)
  }
  return (
    <>
    <div className="container">
        <h2 style={{color: props.mode==='dark'?'white':'black'}}>Enter a text here</h2>
      <div className="form-floating my-5">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"  value={text} onChange={onChange}
          id="floatingTextarea" style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}
        ></textarea>
        <label htmlFor="floatingTextarea" style={{color: props.mode==='dark'?'white':'black'}}>Comments</label>
        <br/>
        <button className='btn' onClick={changeUpp} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black',borderColor:props.mode==='dark'?'white':'black'}}>Change To UpperCase</button>
        <button className='btn' onClick={changeLow} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black',borderColor:props.mode==='dark'?'white':'black'}}>Change To LowerCase</button>
      </div>
    </div>
    </>
  )
}