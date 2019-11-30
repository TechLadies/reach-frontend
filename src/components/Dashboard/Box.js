import React, { useState } from 'react';

function Box ({children}) {
    return(
        <div className = 'box'>
            {children}
        </div>
    )
}

export default Box