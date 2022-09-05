import {useState} from "react"; 
import './Warning.css';


function Warning() {
const [estado, setEstado] = useState (true);

  return (
    <div className='warningDiv'>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<button className='bottonWarning' onClick={() => setEstado(false)}> X </button> </p>


    </div>
  );
}

export {Warning};