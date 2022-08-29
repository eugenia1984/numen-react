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
      
      <img src={props.aboutUs?props.aboutUs.imagen:'aboutUs vacio'} alt="img" style={{height:200, maxWidth:`100%`}}/>

      <h2>{props.aboutUs?props.aboutUs.nombre:'aboutUs vacio'}</h2>

      <p>{props.aboutUs?props.aboutUs.Ocupacion:'aboutUs vacio'}</p>

    </div>
  )
}

export {AboutUs};