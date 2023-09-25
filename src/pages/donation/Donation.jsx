import { useEffect, useState } from "react";
import DonationCard from "../../components/donationCard/DonationCard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {

        const donatedItems = JSON.parse(localStorage.getItem('donated'))

        if (donatedItems) {
            setDonation(donatedItems);
        }

        else {
            setNotFound("No Data Found");
        }

    }, [])


    return (
        <div>
            {
                notFound ? <p className="h-[70vh] flex justify-center items-center">{notFound}</p> : (
                    <div className="mt-10">

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center h-screen mx-auto mb-10">
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
                        {donation.length > 4 && (
                            <button
                                onClick={() => setIsShow(!isShow)}
                                className={'p-4 rounded-md my-4 bg-white btn normal-case block mx-auto'}
                            >
                                {isShow ? '' : 'See All'}
                            </button>
                        )}

                    </div>
                )}
        </div>
    );
};

export default Donation;