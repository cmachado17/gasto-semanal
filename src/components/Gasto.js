import React from 'react';  

const Gasto = ({gasto}) => {
    return ( 
        <p>{gasto.nombre}: ${gasto.valor}</p>
     );
}
 
export default Gasto;