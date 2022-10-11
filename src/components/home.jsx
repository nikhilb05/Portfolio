const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4 text-xl">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Nikhil Bhusande
                </h2>
                <p className="text-gray-500 py-4 font-medium">
                    I'm a quick learner and enthusiastic person, looking for opportunities to enhance my skills and knowledge.
                </p>
                <div>
                    <a href="../Resume.pdf" target="_blank" download className="text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-125 duration-200">
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
