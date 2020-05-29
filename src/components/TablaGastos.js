import React from 'react';
import Movimientos from './Movimientos';

const TablaGastos = ({saldo}) => {


    return ( 
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-5 p-3 bg-light">
                    <form>
                        <label>Ingresa un nuevo monto</label>
                        <input 
                        type="text"
                        className="form-control"
                        />
                        <div className="text-right">
                        <button className="mt-3 btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="col-xs-12 col-sm-2">
                </div>
                <div className="col-xs-12 col-sm-5 p-3 bg-light">
                  <Movimientos saldo={saldo} />
                </div>
            </div>
        </div>
     );
}
 
export default TablaGastos;