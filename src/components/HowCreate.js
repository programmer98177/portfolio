export default function HowCreate() {
    return (
        <section className="w-full flex flex-col md:flex-row items-start gap-12 px-4 md:px-16 py-16 md:py-32">

            {/* IMAGE LEFT */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img
                    src="/howWeCreate.png"
                    alt="How We Create"
                    className="w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded shadow-lg object-cover border-2 border-gray-100"
                />
            </div>

            {/* TEXT RIGHT */}
            <div className="w-full md:w-1/2 md:pl-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] font-bold leading-snug md:leading-tight">
                    HOW WE CREATE
                </h2>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black leading-relaxed max-w-xl">
                    Ideas come to life through our creation process. We design visually compelling content, write engaging copy, produce videos, and develop digital campaigns that resonate with your audience. Every asset is crafted with care, creativity, and alignment to your brand identity.
                </p>
            </div>

        </section>
    );
}
