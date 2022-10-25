import html from "../assets1/html.png"
import css from "../assets1/css.png"
import javascript from "../assets1/javascript.png"
import react from "../assets1/react.png"
import tailwind from "../assets1/tailwind.png"
import premiere from "../assets1/premiere.png"
import java from "../assets1/java.png"
import sql from "../assets1/sql.png"



const Skills = () => {

    const technologies = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-cyan-500',
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500',
        },
        {
            id: 6,
            src: premiere,
            title: 'Premiere Pro',
            style: 'shadow-purple-500',
        },
        {
            id: 7,
            src: java,
            title: 'Java',
            style: 'shadow-white',
        },
        {
            id: 8,
            src: sql,
            title: 'SQL',
            style: 'shadow-blue-500',
        },
        
    ]

    return (
        <div name="skills" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center">
                <div>
                    <h2 className="text-4xl sm:text-7xl font-bold pb-8">
                        Skills
                    </h2>
                    <p className="text-gray-500 text-xl font-medium">
                        These are the technologies I've worked with.
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        technologies.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className=" mx-auto w-20" />
                        <p className=" mt-4 ">{title}</p>
                    </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Skills;