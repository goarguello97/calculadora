import { MouseEventHandler } from "react";
import "./Boton.css";

interface Params {
  texto: string;
  clase: string;
  handleClick: MouseEventHandler;
}

const Boton = (params: Params) => {
  const { texto, clase, handleClick } = params;
  return (
    <button className={clase} onClick={handleClick}>
      {texto}
    </button>
  );
};

export default Boton;
