import { CommandLineIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <CommandLineIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Welcome to my projects showcase!
                        <br />
                        Below are some noteworthy projects I've had the pleasure of building.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        projects.map((project) => (
                            <a
                                href={project.link}
                                key={project.image}
                                className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-scale-down object-center"
                                        src={require(`../images/${project.image}`)}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">{project.description}</p>
                                        <span class="inline-flex items-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-gray-200 ring-1 ring-inset ring-gray-500/10">{project.status}</span>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}