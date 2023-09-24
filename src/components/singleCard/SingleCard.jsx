/* eslint-disable react/prop-types */

const SingleCard = ({ card }) => {

    const { img, description, title, price, color } = card;

    const btnbg = {
        backgroundColor: color,

    };

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
                            <button className="btn text-white normal-case border-none" style={btnbg}>Donate ${price}</button>
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