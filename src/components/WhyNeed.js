export default function WhyNeed() {
    return (
        <section className="w-full flex flex-col md:flex-row items-start gap-12 px-4 md:px-16 py-16 md:py-32">

            {/* LEFT SIDE: Heading + Paragraph */}
            <div className="w-full md:w-1/2 md:pl-6">
                <h2 className="text-4xl sm:text-5xl md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold leading-tight text-white">
                    WHY YOU NEED
                </h2>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-xl">
                    Choosing Rabt means choosing a team that understands your brand, your goals, and your audience. We bring creativity, expertise, and measurable results to every campaign, making sure your brand stands out in a crowded market.
                </p>
            </div>

            {/* RIGHT SIDE: List */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-start pt-10">
                <ul className="list-disc list-inside text-white space-y-4 text-lg sm:text-xl md:text-2xl max-w-md">
                    <li>Expertise that drives results.</li>
                    <li>Creative solutions tailored to your brand.</li>
                    <li>Measurable campaigns that deliver ROI.</li>
                </ul>
            </div>

        </section>
    );
}
