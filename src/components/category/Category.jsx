/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({ category }) => {

    const { id, title, type, color, img } = category;

    const cardTitleStyle = {
        backgroundColor: color,

    };

    return (
        <Link to={`/card/${id}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body rounded-b-xl" style={cardTitleStyle}>
                    <p className="w-fit p-2" style={cardTitleStyle}>
                        {type}
                    </p>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default Category;