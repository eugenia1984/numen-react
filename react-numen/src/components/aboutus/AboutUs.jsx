import './AboutUs.css';

const AboutUs = (props) => {
  
  return (
    <div className="aboutUsDiv" >
      
      <img className= "aboutUsImg" src={props.aboutUs.imagen} alt="img" />

      <h2>{props.aboutUs.nombre}</h2>

      <p>{props.aboutUs.Ocupacion}</p>

    </div>
  )
}

export {AboutUs};