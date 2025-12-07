export default function HowThink() {
    return (
        <section className="w-full flex flex-col md:flex-row items-start gap-12 px-4 md:px-16 py-16 md:py-32">

            {/* TEXT LEFT */}
            <div className="w-full md:w-1/2 md:pl-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] font-bold leading-snug md:leading-tight text-white">
                    HOW WE THINK
                </h2>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-xl">
                    Creativity is at the heart of Rabt. We think differently, challenge conventions, and craft ideas that are innovative, bold, and data-informed. Our solutions are not just creative—they are smart and strategic.
                </p>
            </div>

            {/* IMAGE RIGHT */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-12 md:mt-0">
                <img
                    src="/howWeThink.png"
                    alt="How We Think"
                    className="w-full max-w-[900px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[650px] rounded shadow-lg object-cover border-2 border-gray-400"
                />
            </div>

        </section>
    );
}
