import { useState } from "react";
import "./css/App.css"
export function App (){
  const [resultado, setResultado] = useState("");
  const botonClick = (event) => {
    setResultado(resultado.concat(event.target.value));
  }
  const limpiarPantalla = (e) => {
    setResultado("");
  }
  const calcular = () => {
    setResultado(eval(resultado).toString());
  }
  return (
    <div className="calculadora">
      <input type="text" placeholder="0" id="resultado" value={resultado} />
      <input type="button" value={"9"} className="boton" onClick={botonClick} /> 
      <input type="button" value={"8"} className="boton" onClick={botonClick} />
      <input type="button" value={"7"} className="boton" onClick={botonClick} />
      <input type="button" value={"6"} className="boton" onClick={botonClick} />
      <input type="button" value={"5"} className="boton" onClick={botonClick} />
      <input type="button" value={"4"} className="boton" onClick={botonClick} />
      <input type="button" value={"3"} className="boton" onClick={botonClick} />
      <input type="button" value={"2"} className="boton" onClick={botonClick} />
      <input type="button" value={"1"} className="boton" onClick={botonClick} />
      <input type="button" value={"0"} className="boton" onClick={botonClick} />
      <input type="button" value={"."} className="boton" onClick={botonClick} />
      <input type="button" value={"+"} className="boton" onClick={botonClick} />
      <input type="button" value={"-"} className="boton" onClick={botonClick} />
      <input type="button" value={"*"} className="boton" onClick={botonClick} />
      <input type="button" value={"/"} className="boton" onClick={botonClick} />
      <input type="button" value={"%"} className="boton" onClick={botonClick} />
      <input type="button" value={"DEL"} className="boton boton1" onClick={limpiarPantalla} />
      <input type="button" value={"="} className="boton boton1" onClick={calcular} />
    </div>
  );
}

