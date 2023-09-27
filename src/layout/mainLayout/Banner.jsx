/* eslint-disable react/prop-types */
import { useState } from "react";

const Banner = ({ setResults }) => {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                const results = data.filter((card) => {
                    return  card && card.type && card.type.toLowerCase().includes(value)
                });
                setResults(results);
            })
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    };


    return (
        <div className="hero h-[70vh] mt-4" style={{ backgroundImage: 'url(./banner.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-90"></div>
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="mb-10 text-4xl font-bold z-10 ">I Grow By Helping People In Need</h1>
                    <div className="flex mt-8 justify-center">
                        <input value={input}
                            onChange={(e) => handleChange(e.target.value)}
                            type="text" placeholder="Search here" className="input w-full max-w-sm rounded-r-none" />
                        <div className="">
                            <button className="btn bg-red-500 text-white normal-case border-none rounded-l-none">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;