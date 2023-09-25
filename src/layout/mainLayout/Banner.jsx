
const Banner = () => {
    return (
        // <div className="hero h-[70vh] style={{backgroundImage: 'url(./banner.jpg)'}}">
        <div className="hero h-[70vh] mt-4" style={{backgroundImage: 'url(./banner.jpg)'}}>
            <div className="hero-overlay bg-gradient-to-l from-white to-transparent"></div>
            <div className="hero-overlay bg-gradient-to-r from-white to-transparent"></div>
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex mt-8 justify-center">
                        <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs relative" />
                        <div className="absolute">
                            <button className="btn bg-red-500 text-white ml-64 normal-case border-none">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;