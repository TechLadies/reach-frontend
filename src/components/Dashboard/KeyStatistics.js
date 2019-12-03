import React, { useState } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";
import Box from "./Box";
import donationsCircle from "../../images/donations-circle.svg";
import twoHandsDonation from "../../images/two-hands-donation.svg";
import Steps from "../../images/steps.png";

const KeyStatistics = () => {
  return (
    <>
      <div className="keystats">
        <h1>Key Statistics</h1>
        <Box>
          <div className="keystats-smallbox">
            <img src={donationsCircle} alt="donationscircle" />
            <div>
              <div className="totaldonationamt">$12,154</div>
              <div className="keystatslabel">Total Donation Amount</div>
            </div>
          </div>
        </Box>

        <Box>
          <div className="keystats-smallbox">
            <img
              src={twoHandsDonation}
              className="twoHandsDonation"
              alt="twohandsdonation"
            />
            <div>
              <div className="totalnumberdonors">6329</div>
              <div className="keystatslabel">Total Number of Donors</div>
            </div>
          </div>
        </Box>

        <img src={Steps} className="steps" alt="steps" />
      </div>
    </>
  );
};

export default KeyStatistics;
