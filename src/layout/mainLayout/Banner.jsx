
const Banner = () => {

    const handleSearch = () => {
        console.log('search clicked');
    }

    return (

        <div className="hero h-[70vh] mt-4" style={{ backgroundImage: 'url(./banner.jpg)' }}>
            <div className="hero-overlay bg-gradient-to-l from-white to-transparent"></div>
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold z-10 ">I Grow By Helping People In Need</h1>
                    <div className="flex mt-8 justify-center">
                        <input type="text" placeholder="Search here" className="input w-full max-w-xs rounded-r-none" />
                        <div className="">
                            <button onClick={handleSearch} className="btn bg-red-500 text-white normal-case border-none">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;