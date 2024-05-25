import React,{useState} from "react";

export default function Dark() {
      const [Mode,setMode]=useState({
        color:'black',
        backgroundColor:'white'
      })
      const changeMode=()=>{
        if(Mode.color==='black'){
            setMode({
                color : 'white',
                backgroundColor:'black'
            })
        }
        else{
            setMode({
                color:'black',
                backgroundColor:'white'
            })
        }
      }
  return (
    <>
    <div className="container my-3" style={Mode}>
      <table className="table">
        <thead>
          <tr style={Mode}>
            <th scope="col" style={Mode}>#</th>
            <th scope="col" style={Mode}>First</th>
            <th scope="col" style={Mode}>Last</th>
            <th scope="col" style={Mode}>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={Mode}>1</th>
            <td style={Mode}>Mark</td>
            <td style={Mode}>Otto</td>
            <td style={Mode}>@mdo</td>
          </tr>
          <tr style={Mode}>
            <th scope="row" style={Mode}>2</th>
            <td style={Mode}>Jacob</td>
            <td style={Mode}>Thornton</td>
            <td style={Mode}>@fat</td>
          </tr>
          <tr style={Mode}>
            <th scope="row" style={Mode}>3</th>
            <td colspan="2" style={Mode}>Larry the Bird</td>
            <td style={Mode}>@twitter</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={changeMode}>Change Mode</button>
      </div>
    </>
  );
}
