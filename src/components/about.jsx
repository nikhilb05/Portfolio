const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white pb-8">About Me</h2>
                </div>
                <div>
                    <p className="text-gray-500 text-xl font-medium">
                        My name is Nikhil and I'm from Badlapur, Thane. I did my graduation in Information Technology from B.N Bandodkar College of Science and my recently developed hobbies are Editing and Gaming.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;