import { useEffect, useRef, useState } from "react";

export default function AnimatedArrow() {
    const arrowRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (arrowRef.current) {
            observer.observe(arrowRef.current);
        }

        return () => {
            if (arrowRef.current) {
                observer.unobserve(arrowRef.current);
            }
        };
    }, []);

    return (
        <div ref={arrowRef} className="flex justify-center items-center w-[120px]">

            {/* When visible → animate infinitely */}
            <svg
                width="120"
                height="220"
                viewBox="0 0 120 220"
                fill="none"
                stroke="black"
                strokeWidth="6"
                strokeLinecap="round"
                className={visible ? "arrow-anim" : ""}
            >
                <path
                    d="M10 10 C 150 100, -40 120, 100 210"
                    className="arrow-line"
                />
                <polyline
                    points="80,170 100,210 60,200"
                    fill="black"
                    className="arrow-head"
                />
            </svg>

            <style jsx>{`
                /* Infinite repeating animation once visible */
                .arrow-anim .arrow-line {
                    stroke-dasharray: 600;
                    stroke-dashoffset: 600;
                    animation: drawLine 2.5s ease-in-out infinite;
                }

                .arrow-anim .arrow-head {
                    opacity: 0;
                    animation: fadeInHead 2.5s ease-in-out infinite;
                    animation-delay: 1.6s;
                }

                @keyframes drawLine {
                    0% {
                        stroke-dashoffset: 600;
                    }
                    60% {
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes fadeInHead {
                    0%, 50% {
                        opacity: 0;
                    }
                    70% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
