import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ handleClickSaldo }) => {

  const [saldoInicial, setSaldoInicial] = useState("");

  const [error, setError] = useState(false);

  const handleSaldoInicial = (e) => {
    setSaldoInicial(e.target.value);
    
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (saldoInicial > 0) {
      handleClickSaldo(saldoInicial);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="row text-center">
      <div className="col p-0">
        <form className="p-4 mt-5 bg-light">
          {error !== false && <Error mensaje="El saldo inicial no puede ser menor a 0"/>}
          <div className="form-group">
            <label>Ingresa un saldo inicial</label>
            <input
              type="text"
              className="form-control"
              value={saldoInicial}
              placeholder="Ej: 5000"
              onChange={handleSaldoInicial}
            />
          </div>
          <button className="btn btn-primary" onClick={onSubmitForm}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
