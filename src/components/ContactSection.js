export default function ContactSection() {
    return (
        <section
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-16"
        >
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center md:items-end gap-10">

                {/* BIG THANK YOU LEFT SIDE */}
                <div className="flex flex-col leading-none items-center md:items-start">
                    <h1 className="text-6xl sm:text-7xl md:text-[120px] lg:text-[160px] xl:text-[200px] font-extrabold tracking-tight text-black">
                        THANK
                    </h1>
                    <h1 className="text-6xl sm:text-7xl md:text-[120px] lg:text-[160px] xl:text-[200px] font-extrabold tracking-tight text-black -mt-2 md:-mt-10">
                        YOU
                    </h1>
                </div>

                {/* RIGHT TEXT BLOCK */}
                <div className="md:pl-10 md:w-2/3 text-center md:text-left">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight">
                        READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mt-2">
                        CONNECT WITH RABT AND LET'S GROW TOGETHER.
                    </p>
                </div>

            </div>
        </section>
    );
}
