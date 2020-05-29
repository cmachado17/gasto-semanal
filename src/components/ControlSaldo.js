import React, { Fragment } from "react";
import { revisarSaldo } from '../helpers';

const ControlSaldo = ({ saldo, restante }) => {
  return (
    <Fragment>
      <div className="status bg-azul mb-2"><span className="font-weight-bold">Presupuesto:</span> $ {saldo}</div>
      <div className={revisarSaldo(saldo, restante)}><span className="font-weight-bold">Restante:</span> $ {restante}</div>
    </Fragment>
  );
};

export default ControlSaldo;
