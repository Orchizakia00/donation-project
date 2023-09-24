/* eslint-disable react/prop-types */

const SingleCard = ({ card }) => {

    const { img, description, title } = card;

    return (
        <div className='flex justify-center items-center mx-auto h-screen w-full'>
            <div>
                <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            src={img}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                        <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;