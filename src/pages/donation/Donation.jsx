import { useEffect, useState } from "react";
import DonationCard from "../../components/donationCard/DonationCard";
import { useDonationContext } from "../../components/DonationContext/DonationContext";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    // const [numberOfDonations, setNumberOfDonations] = useState(0);

    const { setNumberOfDonations } = useDonationContext();

    useEffect(() => {

        const donatedItems = JSON.parse(localStorage.getItem('donated'))

        if (donatedItems) {
            setDonation(donatedItems);
            setNumberOfDonations(donatedItems.length);
        }

        else {
            setNotFound("No Data Found");
        }

    }, [setNumberOfDonations])

    const handleSeeAll = () => {
        setIsShow(true); // Show all items when the button is clicked
    };


    return (
        <div>
            {
                notFound ? <p className="h-[70vh] flex justify-center items-center">{notFound}</p> : (

                    <div className="h-fit grid grid-cols-1 md:grid-cols-1 mt-10 lg:grid-cols-2 gap-6 justify-center items-center  mx-auto mb-20">
                        {
                            isShow ?
                                donation.map((card) => (
                                    <DonationCard key={card.id} card={card}></DonationCard>
                                ))
                                :
                                donation.slice(0, 4).map(card => (
                                    <DonationCard key={card.id} card={card}></DonationCard>
                                ))
                        }
                    </div>

                )}

            {donation.length > 4 && !isShow && (
                <div className="pb-10 lg:mt-4">
                    <button
                        onClick={handleSeeAll}
                        className="p-4 rounded-md lg:my-4 bg-green-600 text-white btn normal-case block mx-auto"
                    >
                        See All
                    </button>
                </div>
            )}

        </div>
    );
};

export default Donation;