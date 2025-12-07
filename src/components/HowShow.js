import AnimatedArrow from "./AnimatedArrow";

export default function HowBuild() {
    return (
        <section className="flex flex-col md:flex-row items-start gap-12 min-h-[90vh] px-4 md:px-16 py-16 md:py-32">

            {/* TEXT LEFT */}
            <div className="w-full md:w-1/3 md:pl-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] font-bold leading-snug md:leading-tight text-black">
                    HOW WE SHOW
                </h2>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black leading-relaxed max-w-md">
                    A great campaign deserves visibility. We showcase your brand through social media, digital ads, influencer collaborations, and PR initiatives—ensuring maximum reach and engagement.
                </p>
            </div>

            {/* IMAGES RIGHT */}
            <div className="w-full md:w-2/3 flex items-center gap-4 md:gap-6 justify-center">

                {/* BEFORE IMAGE */}
                <div className="flex flex-col items-center w-1/2">
                    <img
                        src="/before_left.jpg"
                        alt="Before"
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded shadow-lg object-cover border-2 border-gray-400"
                    />
                </div>

                {/* Animated Arrow */}
                <div className="flex justify-center items-center w-[60px] md:w-[120px]">
                    <AnimatedArrow />
                </div>

                {/* AFTER IMAGE */}
                <div className="flex flex-col items-center w-1/2">
                    <img
                        src="/after_right.jpg"
                        alt="After"
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded shadow-lg object-cover border-2 border-gray-400"
                    />
                </div>

            </div>
        </section>
    );
}
