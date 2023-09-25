import { useLoaderData } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import Banner from "../../layout/mainLayout/Banner";

const Home = () => {
    const categories = useLoaderData();
    // console.log(categories);

    return (
        <div className="">
            <Banner></Banner>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;