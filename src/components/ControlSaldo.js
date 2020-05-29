import React, { Fragment } from "react";

const ControlSaldo = ({ saldo, restante }) => {
  return (
    <Fragment>
      <div>Presupuesto: $ {saldo}</div>
      <div>Restante: $ {restante}</div>
    </Fragment>
  );
};

export default ControlSaldo;
