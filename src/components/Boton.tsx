import "./Boton.css";

interface Params {
  texto: string;
  clase: string;
}

const Boton = (params: Params) => {
  const { texto, clase } = params;
  return <button className={clase}>{texto}</button>;
};

export default Boton;
