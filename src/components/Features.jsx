import React from "react";
import Image from "next/image";

export default function Features() {
    const features = [
        {
            title: "Sell Your Notes",
            imgSrc: "/sell_notes.svg",
        },
        {
            title: "Buy Specific Notes",
            imgSrc: "/buy_notes.svg",
        },
        {
            title: "User Dashboard",
            imgSrc: "/user_dash.svg",
        },
        {
            title: "User Dashboard",
            imgSrc: "/user_dash.svg",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-88">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-white flex flex-col items-center"
                        >
                            <div className="bg-blue-500 p-6 rounded-xl shadow-lg">
                                <div className="relative w-32 h-32 mb-4">
                                    <Image
                                        src={feature.imgSrc}
                                        alt={feature.title}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
