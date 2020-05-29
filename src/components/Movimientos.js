import React from "react";
import Gasto from "./Gasto";
import ControlSaldo from './ControlSaldo';

const Movimientos = ({ saldo, gastos, restante }) => {
  return (
    <>
  
        {gastos.map((gasto) => (
          <div key={gasto.id}>
          <Gasto gasto={gasto} />
          <hr/>
          </div>
        ))}
         <ControlSaldo saldo={saldo} restante={restante}/>
         
  
     
    </>
  );
};

export default Movimientos;
