import imgTech from "./imgFTR/tech.jpg";
import imgIA from "./imgFTR/AI.jpg";
import "./Features.css";

const notaConImagen = [
  {
    id: 1,
    imagen: imgTech,
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam labore tempore quasi doloribus aliquam distinctio maiores, eveniet illum ullam nesciunt at reiciendis enim delectus quos vero dolor incidunt nobis.",
  },

  {
    id: 2,
    imagen: imgIA,
    texto:
      "Lorem illum ullam nesciunt at reiciendis enim delectus quos vero dolor",
  },
];

const Features = ({ id }) => {
  return (
    <div className="divFTR">
      {id === 1 ? (
        <div className="subDiv">
          <img className="imgFTR" src={notaConImagen[0].imagen} alt="imgns" />{" "}
          <p className="txtFTR">{notaConImagen[0].texto}</p>
        </div>
      ) : (
        <div className="subDiv">
          <p className="txtFTR">{notaConImagen[1].texto}</p>
          <img className="imgFTR" src={notaConImagen[1].imagen} alt="imgns" />
        </div>
      )}
    </div>
  );
};

export { Features };
