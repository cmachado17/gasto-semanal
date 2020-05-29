import React, { useState, useEffect } from "react";
import Formulario from "./components/Fomulario";
import TablaGastos from "./components/TablaGastos";


function App() {

  const [saldo, setSaldo] = useState(null);
  const [restante, setRestante] = useState(0)
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  //Actualizar el restante
useEffect(() => {
 if(crearGasto){

  //agrega el nuevo presupuesto
  setGastos([
    ...gastos,
    gasto
  ])

  //restar
  const saldoRestante = restante - gasto.valor;
  setRestante(saldoRestante);

  setCrearGasto(false)
 }
}, [gasto]);

  const handleClickSaldo = (valor) => {
    setSaldo(parseInt(valor), 10);
    setRestante(parseInt(valor), 10);
  };


  return (
    <div className="App container">
      <h2 className="my-4 text-center text-light">Gasto Semanal</h2>
      {saldo !== null ? (
        <TablaGastos saldo={saldo} restante={restante} setGasto={setGasto} gastos={gastos} setCrearGasto={setCrearGasto}/>
      ) : (
        <Formulario handleClickSaldo={handleClickSaldo}  />
      )}
    </div>
  );
}

export default App;
