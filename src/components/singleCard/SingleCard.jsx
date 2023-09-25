/* eslint-disable react/prop-types */

import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';


const SingleCard = ({ card }) => {

    const { id, img, description, title, price, btn_color } = card;

    const btnbg = {
        backgroundColor: btn_color,
    };

    const handleDonate = () => {

        const donatedArray = [];

        const donatedItems = JSON.parse(localStorage.getItem('donated'));

        if (donatedItems) {
            donatedArray.push(card)
            localStorage.setItem('donated', JSON.stringify(donatedArray))
            swal("Congratulations!", "You have donated successfully!", "success");
            console.log('clicked');
        }
        else {
            const isExist = donatedItems.find(card => card.id === id)
            if (!isExist) {
                donatedArray.push(...donatedItems, card);
                localStorage.setItem('donated', JSON.stringify(donatedArray))
                // swal("Good job!", "product added", "success");
            }
        }


    }

    return (
        <div className='flex justify-center items-center mx-auto h-screen max-w-[1000px] mt-10'>
            <div>
                <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            className="w-full h-[500px]"
                            src={img}
                            alt="ui/ux review check"
                        />
                        <div className="w-full bg-gray-800 absolute bottom-0 bg-opacity-60 p-8">
                            <button onClick={handleDonate} className="btn text-white normal-case border-none" style={btnbg}>Donate ${price}</button>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl leading-snug tracking-normal font-bold antialiased">
                            {title}
                        </h4>
                        <p className="mt-3 font-normal leading-relaxed text-gray-700 antialiased">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;