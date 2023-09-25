/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */


const DonationCard = ({ card }) => {

    const { title, type, btn_color, img, price, text_color, bg_color, type_bg } = card;

    const btnbg = {
        backgroundColor: btn_color
    };
    const divbg = {
        backgroundColor: bg_color
    };
    const textColor = {
        color: text_color
    };
    const typeBg = {
        backgroundColor: type_bg
    };


    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={img}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6 w-full rounded-r-xl" style={divbg}>
                <div className="w-fit" style={typeBg}>
                    <h6 className="p-2 mb-4 block font-sans text-base font-semibold leading-relaxed tracking-normal text-pink-500 antialiased"
                        style={textColor} >
                        {type}
                    </h6>
                </div>
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                    {title}
                </h4>
                <p className="mb-4" style={textColor} >Price: ${price}</p>
                <a className="inline-block" href="#">
                    <button className="btn text-white normal-case border-none" style={btnbg}>View Details</button>
                </a>
            </div>
        </div>
    );
};

export default DonationCard;