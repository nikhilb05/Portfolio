import github from "../assets1/github.png"
import linkedin from "../assets1/linkedin.png"
import mail from "../assets1/mail.png"



const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center">
                <div>
                    <h2 className="text-4xl sm:text-7xl font-bold pb-8">
                        Contact
                    </h2>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    <a href="mailto:nikhilbhusande123@gmail.com" target="_blank" rel="noreferrer">
                        <img src={mail} alt="mail" className="shadow-md hover:scale-105 duration-500 rounded-lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/nikhil-bhusande-69b669237/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin" className="shadow-md hover:scale-105 duration-500 rounded-lg" />
                    </a>
                    <a href="https://github.com/nikhilb05" target="_blank" rel="noreferrer">
                        <img src={github} alt="github" className="shadow-md hover:scale-105 duration-500 rounded-lg" />
                    </a>
                    
                </div>
            </div>
        </div>
    );
}

export default Contact;