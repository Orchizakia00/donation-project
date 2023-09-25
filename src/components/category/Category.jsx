/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({ category }) => {

    const { id, title, type, bg_color, text_color, img, type_bg } = category;

    const divbg = {
        backgroundColor: bg_color,
    };
    const textColor = {
        color: text_color
    };
    const typeBg = {
        backgroundColor: type_bg
    };

    return (
        <Link to={`/card/${id}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body rounded-b-xl" style={divbg}>
                    <div className="w-fit" style={typeBg}>
                        <p className="w-fit p-2" style={textColor}>
                            {type}
                        </p>
                    </div>
                    <p className="font-bold" style={textColor}>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default Category;