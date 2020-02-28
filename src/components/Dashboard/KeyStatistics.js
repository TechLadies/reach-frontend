import React from "react";
import Box from "./Box";
import donationsCircle from "../../images/donations-circle.svg";
import twoHandsDonation from "../../images/two-hands-donation.svg";
import Steps from "../../images/steps.svg";

const KeyStatistics = (props) => {
  
  return (
    <>
      <div className="keystats">
        <h1 className="dashboard-headertxt">Key Statistics</h1>
       < div className="keystats-wrap">
        <Box>
          <div className="keystats-smallbox">
            <img src={donationsCircle} alt="donationscircle" />
            <div>
              <div className="keystats-amount">${props.data.totalDonationAmt}</div>
              <div className="keystats-label">Total Donation Amount</div>
            </div>
          </div>
        </Box>

        <Box>
          <div className="keystats-smallbox">
            <img src={twoHandsDonation} alt="twohandsdonation" />
            <div>
              <div className="keystats-amount">{props.data.totalNoOfDonations}</div>
              <div className="keystats-label">Total Number of Donations</div>
            </div>
          </div>
        </Box>
        <img src={Steps} className="steps" alt="steps" />
      </div>
      </div>
    </>
  );
};

export default KeyStatistics;
