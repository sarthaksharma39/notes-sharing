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
    );
};