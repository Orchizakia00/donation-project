/* eslint-disable react/prop-types */

const Category = ({ category }) => {

    const { title, type, color, img } = category;

    // const validColorClass = color ? `bg-${color}` : '';

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className={`card-body bg-${color}`}>
                <h2 className={`card-title p-2 ${color}`}>
                    {type}
                </h2>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Category;