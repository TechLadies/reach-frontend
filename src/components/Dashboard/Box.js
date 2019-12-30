import React from 'react';

function Box ({children, className}) {
    return(
        <div className={`box ${className}`}>
            {children}
        </div>
    )
}

export default Box