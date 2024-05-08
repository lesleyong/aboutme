import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    return (
        <section>
            <div className="container py-10 mx-auto">
                <div className="text-center">
                    <PhoneIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Contact Me
                    </h1>
                </div>
                <div className="lg md bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=marina+one&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 px-12 rounded shadow-md">
                        <div className="lg:w-1/2">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Marina One <br />
                                Singapore 018936
                            </p>
                        </div>
                        <div className="lg:w-1/2 pr-10 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                lesleyongweibin@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}