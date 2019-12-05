import React, { useState } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import Box from './Box'

const ByIntent  = () => {
    return (
        <div className="">
            <h1 className= "dashboard-headertxt">By Intent</h1>
            <Box>
                bar chart goes here
            </Box>
        </div>
    )
}


export default ByIntent;
