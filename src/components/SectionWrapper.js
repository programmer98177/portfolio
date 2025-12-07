import { useEffect, useState } from "react";

export default function SectionWrapper({ index, bg1, bg2, children }) {
    const [fadeIn, setFadeIn] = useState(false);

    const bgImage = index % 2 === 0 ? bg1 : bg2;

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="relative py-20 overflow-hidden w-full"
        >
            {/* BACKGROUND IMAGE WITH FADE */}
            <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms] ease-in-out ${fadeIn ? "opacity-100" : "opacity-0"
                    }`}
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* CONTENT — remove max-width auto center */}
            <div className="relative px-6 z-10 w-full">
                {children}
            </div>
        </section>
    );
}
