import {useState} from "react"; 
import './Warning.css';


function Warning() {


const [estado, setEstado] = useState(true);

 
return (
  <>
    { estado && <div className='warningDiv'>
      <p>Aprovecha nuestras promociones para nuevos clientes
      <button className='bottonWarning' onClick={() => setEstado(false)}> X </button> </p>

    </div> }
  </>
)
}

export default Warning;