import React from "react";
import Image from "next/image";

export default function Features() {
    const features = [
        {
            title: "SELL YOUR NOTES",
            imgSrc: "/sell_notes.svg",
        },
        {
            title: "BUY SPECIFIC NOTES",
            imgSrc: "/buy_notes.svg",
        },
        {
            title: "USER DASHBOARD",
            imgSrc: "/user_dash.svg",
        },
        {
            title: "USER DASHBOARD",
            imgSrc: "/user_dash.svg",
        },
    ];

    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Our Features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-primary-0 rounded-3xl p-8 hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="relative w-48 h-48 mb-6">
                                        <div className="absolute inset-0">
                                            <Image
                                                src={feature.imgSrc}
                                                alt={feature.title}
                                                layout="fill"
                                                objectFit="contain"
                                                className="drop-shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-xl tracking-wide">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 rounded-lg p-10">
                {/* <h2 className="text-3xl font-semibold text-primary-0 text-center mb-8">
                    Key Features
                </h2> */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Easy Sharing",
                            description: "Upload and share your notes with just a few clicks.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-primary-0 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            )
                        },
                        {
                            title: "Organized Content",
                            description: "Categorize and tag notes for easy discovery.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-primary-0 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            )
                        },
                        {
                            title: "Collaborative Learning",
                            description: "Interact with notes through comments and ratings.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-primary-0 mb-4 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            )
                        }
                    ].map((feature, index) => (
                        <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            {feature.icon}
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};