/* eslint-disable react/prop-types */

import { useDonationContext } from "../../components/DonationContext/DonationContext";
import PieChart from "../../components/pieChart/PieChart";

const Statistics = () => {

    const { numberOfDonations } = useDonationContext();

    return (
        <div className="flex justify-center items-center">
            <PieChart numberOfDonations={numberOfDonations}></PieChart>
        </div>
    );
};

export default Statistics;
