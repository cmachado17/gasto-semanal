import React from 'react';  

const Gasto = ({gasto}) => {
    return (
        <div className="d-flex justify-content-between">
        <p><span className="font-weight-bold">{gasto.nombre}:</span></p> 
        <p><span className="gasto">${gasto.valor}</span></p>
        </div>
     );
}
 
export default Gasto;