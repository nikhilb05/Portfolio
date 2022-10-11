const Education = () => {
    return (
        <div name="education" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white pb-8">Education</h2>
                <div className="text-gray-500 text-xl font-medium">
                    <p>
                        BSC-INFORMATION TECHNOLOGY - B.N Bandodkar College of Science
                        <br />
                        08/2019-05/2022
                        <br />
                        CGPA - 7.78
                    </p>
                    <p className="mt-4">
                        HSC - New English High School & Junior College
                        <br />
                        2019
                        <br />
                        54.77 %
                    </p>
                    <p className="mt-4">
                        SSC - Presidency English School
                        <br />
                        2017
                        <br />
                        80.80 %
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;