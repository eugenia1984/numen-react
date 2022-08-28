import './AboutUs.css';

const AboutUs = (props) => {
  
  return (
    <div className="aboutUsCss" style={
      {
      width: 200,
      display: `block`,
      textAlign: `center` ,
      borderRadius: 8,
      border:`2px solid rgba(30, 30, 30)`,}}>

      <img src={props.aboutUs.imagen} alt="img" style={{height: 200, maxWidth: `100%`}}/>

      <h2>{props.aboutUs.nombre} </h2>

      <p>{props.aboutUs.ocupacion}</p>

    </div>
  )
}

export {AboutUs};