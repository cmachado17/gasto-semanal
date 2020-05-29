import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div className="p-3 text-danger text-center">
            <p className="font-weight-bold">{mensaje}</p>
        </div>
      );
}
 

export default Error;