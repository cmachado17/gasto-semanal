import React,{useState} from "react";
import Formulario from './components/Fomulario';
import TablaGastos from "./components/TablaGastos";

function App() {

  const [saldo, setSaldo] = useState(null)

  const handleClickSaldo = (valor) => {
    setSaldo(valor);
  }
  return (
    <div className="App container">
      <h2 className="my-4 text-center text-light">Gasto Semanal</h2>
      {
        saldo !== null ? 
        <TablaGastos saldo={saldo}/>
        :
        <Formulario handleClickSaldo={handleClickSaldo}/>
      }
     
    </div>
  );
}

export default App;
