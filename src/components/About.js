import React from "react"
import lesley from "../images/lesley.jpeg"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Welcome! I'm Lesley.
                        <br /><br />
                        I love to build amazing apps.
                    </h1>
                    <p className="mb-6 leading-relaxed">
                        I'm a passionate and detail-oriented software engineer with close to 5 years of experience in developing innovative software solutions.
                        My expertise lies in backend development and dabble a lil' in frontend development.
                        <br /><br />
                        I thrive in collaborative environments where I can contribute my technical skills to drive impactful projects from conception to deployment.
                        I am adept at problem-solving and enjoy exploring new technologies to continuously improve efficiency and user experience.
                        <br /><br />
                        Explore my portfolio to see some of my recent projects and learn more about my skills and interests!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="lesley"
                        src={lesley}
                    />
                </div>
            </div>
        </section>
    )
}