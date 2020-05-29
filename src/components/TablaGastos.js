import React, { useState } from "react";
import Movimientos from "./Movimientos";
import shortid from "shortid";
import Error from "./Error";

const TablaGastos = ({ saldo, setGasto, gastos, restante, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState(0);
  const [error, setError] = useState(false);

  const handleEnviarGasto = (e) => {
    e.preventDefault();

    if (nombre.length > 0 && valor > 0) {
      //CREAR GASTO
      const gasto = {
        nombre,
        valor,
        id: shortid.generate(),
      };

      //PASAR GASTO A TABLA
      setGasto(gasto);
      setCrearGasto(true);

      //RESETEAR FORM
      setNombre("");
      setValor(0);

      //eliminar mensaje de error
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChangeValor = (e) => {
    if (e.target.value === '') {
      setValor(0);
    } else {
      setValor(parseInt(e.target.value), 10);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="max-altura mb-3 col-sm-12 col-md-5 p-3 bg-light">
          <form onSubmit={handleEnviarGasto}>
            {error !== false && (
              <Error mensaje="Ambos campos son obligatorios" />
            )}
            <div className="form-group">
              <label>Ingresa nombre del gasto </label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Comida..."
              />
            </div>
            <div className="form-group">
              <label>Ingresa monto del gasto</label>
              <input
                type="text"
                className="form-control"
                value={valor}
                onChange={handleChangeValor}
              />
            </div>
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
        <div className="col-sm-12 col-md-2"></div>
        <div className="col-sm-12 col-md-5 p-3 bg-light">
          <Movimientos saldo={saldo} restante={restante} gastos={gastos} />
        </div>
      </div>
    </div>
  );
};

export default TablaGastos;
