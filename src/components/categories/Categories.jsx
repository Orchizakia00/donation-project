/* eslint-disable react/prop-types */
import Category from "../category/Category";

const Categories = ({ categories }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {
                categories?.map(category => <Category category={category} key={category.id}></Category>)
            }
        </div>
    );
};

export default Categories;