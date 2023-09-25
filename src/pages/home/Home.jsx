import { useLoaderData } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import Banner from "../../layout/mainLayout/Banner";
import { useState } from "react";

const Home = () => {
    const categories = useLoaderData();

    const [results, setResults] = useState(categories);

    // setResults(categories);

    return (
        <div>
            <Banner setResults={setResults}></Banner>
            <Categories categories={categories} results={results}></Categories>
        </div>
    );
};

export default Home;