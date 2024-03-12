import { useState } from "react";

function App() {
  const nombre = "paulo";
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {

    setNumeroUno(event.target.value);
  }

  const handleChangeDos = (e) => {

    setNumeroDos(event.target.value);
  }
  const handleSumar = (event) => {

    setResultado(parseFloat(numeroUno) + parseFloat(numeroDos))
  }
  const handleRestar = (event) => {

    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos))
  }
  const handleMultiplicacion = (event) => {

    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos))
  }
  const handleDivision = (event) => {

    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos))
  }

  return (
    <>
   <h1>Calculadora con REACT</h1>
   {nombre} {/* variable dentro del html */}
   <input type="text" placeholder="Numero1" value={numeroUno} onChange={handleChangeUno}/>
   <input type="text" placeholder="Numero2" value={numeroDos} onChange={handleChangeDos}/>
    <hr /> {/*pone una linea que divide el salto de linea */}
    <br />  {/*pone un salto de linea normal */}
   <button onClick={handleSumar}>SUMAR</button>
   <button onClick={handleRestar}>RESTAR</button>
   <button onClick={handleMultiplicacion}>MULTIPLICAR</button>
   <button onClick={handleDivision}>DIVIDIR</button>
   <hr />
   <p>RESULTADO: {resultado}</p>
   
   </>
  )
}

export default App