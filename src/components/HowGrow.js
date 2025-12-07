export default function HowGrow() {
    return (
        <section className="w-full flex flex-col md:flex-row items-start gap-12 px-4 md:px-16 py-16 md:py-32 ">

            {/* IMAGE LEFT */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img
                    src="/dashboard.jpg"
                    alt="Dashboard"
                    className="w-fit max-w-[900px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[650px] rounded shadow-lg object-cover border-2 border-gray-400"
                />
            </div>

            {/* TEXT RIGHT */}
            <div className="w-full md:w-1/2 md:pl-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] font-bold leading-snug md:leading-tight text-white">
                    HOW WE GROW
                </h2>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-xl">
                    Growth isn't just an outcome, it's our design principle. Every visual, every platform, every idea crafted to elevate and expand.
                </p>
            </div>

        </section>
    );
}
