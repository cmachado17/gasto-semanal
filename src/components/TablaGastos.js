import React, { useState } from "react";
import Movimientos from "./Movimientos";
import shortid from "shortid";


const TablaGastos = ({ saldo, setGasto, gastos, restante, setCrearGasto}) => {

  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState(0);

  const handleEnviarGasto = (e) => {
    e.preventDefault();

    const gasto = {
      nombre,
      valor,
      id: shortid.generate(),
    };

    setGasto(gasto);
    setCrearGasto(true);

    setNombre("");
    setValor(0);

  };


  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-5 p-3 bg-light">
          <form onSubmit={handleEnviarGasto}>
            <label>Ingresa nombre del gasto </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label>Ingresa monto del gasto</label>
            <input
              type="text"
              className="form-control"
              value={valor}
              onChange={(e) => setValor(parseInt(e.target.value), 10)}
            />
            <div className="text-right">
              <button
              type="submit"
                className="mt-3 btn btn-primary"
                // onClick={handleEnviarGasto}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="col-xs-12 col-sm-2"></div>
        <div className="col-xs-12 col-sm-5 p-3 bg-light">
          <Movimientos saldo={saldo} restante={restante} gastos={gastos} />
        </div>
      </div>
    </div>
  );
};

export default TablaGastos;
