import React from "react";
import Gasto from "./Gasto";
import ControlSaldo from './ControlSaldo';

const Movimientos = ({ saldo, gastos, restante }) => {
  return (
    <>
      <div>
      
        {gastos.map((gasto) => (
          <Gasto key={gasto.id} gasto={gasto} />
        ))}
         <ControlSaldo saldo={saldo} restante={restante}/>
      </div>
    </>
  );
};

export default Movimientos;
