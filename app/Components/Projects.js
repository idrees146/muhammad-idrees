import { useState } from "react";

const slides = [
    {
        category: "Web Development",
        projects: ["invenexus.png", "hire.png", "generous.png"],
        titles: ["InveNexus", "HireTask", "Mr.Generous"],
        descriptions: [
            "An Inventory Management System",
            "A Job Portal For Freelancers",
            "Donation Simulation to NGOs"
        ],
        navigate: [
            "https://invenexus.vercel.app/Dashboard", 
            "http://virtual-job-market-analysis-tool.vercel.app/", 
            "https://mr-generous.vercel.app/"
        ],
    },
    {
        category: "Web Designing",
        projects: ["hire.png", "invenexus.png", "generous.png"],
        titles: ["InveNexus", "HireTask", "Mr.Generous"],
        descriptions: [
            "An Inventory Management System",
            "A Job Portal For Freelancers",
            "Donation Simulation to NGOs"
        ],
        navigate: ["#", "#", "#"] // Placeholder to prevent errors
    },
    {
        category: "SEO BlogPosts",
        projects: ["invenexus.png", "hire.png", "generous.png"],
        titles: ["InveNexus", "HireTask", "Mr.Generous"],
        descriptions: [
            "An Inventory Management System",
            "A Job Portal For Freelancers",
            "Donation Simulation to NGOs"
        ],
        navigate: ["#", "#", "#"] // Placeholder to prevent errors
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const goToSlide = (index) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsFading(false);
        }, 200);
    };

    return (
        <div className="md:w-[60vw] mx-auto p-4">
            {/* CATEGORY BUTTONS */}
            <div className="flex justify-center space-x-4 mb-4">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${currentIndex === index ? "bg-pink-500" : "bg-pink-300"
                            }`}
                    >
                        {slide.category}
                    </button>
                ))}
            </div>

            {/* PROJECT SLIDES WITH FADE-IN EFFECT */}
            <div className="overflow-hidden relative rounded-lg p-2">
                <div
                    className={`flex flex-wrap gap-4 justify-center transition-opacity duration-500 ease-in-out ${isFading ? "opacity-0" : "opacity-100"
                        }`}
                >
                    {slides[currentIndex].projects.map((src, idx) => (
                        <div key={idx} className="relative lg:h-[250px] lg:w-[370px] group rounded-xl bg-green-300">
                            {/* IMAGE */}
                            <img className="object-cover group-hover:brightness-[20%] transition duration-200 rounded-xl h-full w-full" src={src} alt={slides[currentIndex].titles[idx]} />

                            {/* TITLE OVER IMAGE */}
                            <h1 className="absolute top-[30%] left-1/2 transform -translate-x-1/2 hidden group-hover:block text-white text-3xl font-bold px-3 py-1 rounded-md">
                                {slides[currentIndex].titles[idx]}
                            </h1>

                            <p className="absolute top-[50%] hidden group-hover:block text-white transition duration-200 w-full text-center">
                                {slides[currentIndex].descriptions[idx]}
                            </p>

                            <div className="group-hover:flex gap-4 absolute hidden top-[70%] justify-center w-full items-center">
                                <a target="_blank" href={slides[currentIndex].navigate[idx]}>
                                    <button className="bg-white p-2 rounded-full">
                                        <img className="hover:rotate-45 transition duration-300" width={35} src="linki.svg" alt="Link" />
                                    </button>
                                </a>
                                <button className="bg-white p-2 rounded-full">
                                    <img className="hover:rotate-180 transition duration-300" width={35} src="doc.svg" alt="Document" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
