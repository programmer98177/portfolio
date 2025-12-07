export default function HowBuild() {
    return (
        <section className="w-full flex flex-col md:flex-row items-start gap-12 px-4 md:px-16 py-16 md:py-32">

            {/* TEXT LEFT */}
            <div className="w-full md:w-1/2 md:pr-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] font-bold leading-snug md:leading-tight text-white">
                    HOW WE BUILD
                </h2>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-xl">
                    We turn concepts into tangible designs. From visuals to platforms, we create designs that are cohesive, functional, and optimized for impact.
                </p>
            </div>

            {/* IMAGES RIGHT */}
            <div className="w-full md:w-1/2 flex gap-4">
                {/* BEFORE IMAGE */}
                <div className="flex flex-col items-center w-1/2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-white mb-2">
                        BEFORE
                    </h3>
                    <img
                        src="/before.jpg"
                        alt="Before"
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded shadow-lg object-cover border-2 border-gray-400"
                    />
                </div>

                {/* AFTER IMAGE */}
                <div className="flex flex-col items-center w-1/2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-white mb-2">
                        AFTER
                    </h3>
                    <img
                        src="/after.jpg"
                        alt="After"
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded shadow-lg object-cover border-2 border-gray-400"
                    />
                </div>
            </div>

        </section>
    );
}
