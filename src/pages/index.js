import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyNeed from "../components/WhyNeed";
import HowPlan from "../components/HowPlan";
import HowThink from "../components/HowThink";
import HowCreate from "../components/HowCreate";
import HowBuild from "../components/HowBuild";
import HowShow from "../components/HowShow";
import HowGrow from "../components/HowGrow";
import ContactSection from "../components/ContactSection";

import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
    const bg1 = "/bg1.jpg"; // replace with your image
    const bg2 = "/bg2.jpg"; // replace with your image

    return (
        <div className="text-gray-900 antialiased">

            <Header />

            <main>

                <SectionWrapper index={0} bg1={bg1} bg2={bg2}>
                    <Hero />
                </SectionWrapper>

                <SectionWrapper index={1} bg1={bg1} bg2={bg2}>
                    <WhyNeed />
                </SectionWrapper>

                <SectionWrapper index={2} bg1={bg1} bg2={bg2}>
                    <HowPlan />
                </SectionWrapper>

                <SectionWrapper index={3} bg1={bg1} bg2={bg2}>
                    <HowThink />
                </SectionWrapper>

                <SectionWrapper index={4} bg1={bg1} bg2={bg2}>
                    <HowCreate />
                </SectionWrapper>

                <SectionWrapper index={5} bg1={bg1} bg2={bg2}>
                    <HowBuild />
                </SectionWrapper>

                <SectionWrapper index={6} bg1={bg1} bg2={bg2}>
                    <HowShow />
                </SectionWrapper>

                <SectionWrapper index={7} bg1={bg1} bg2={bg2}>
                    <HowGrow />
                </SectionWrapper>

                <SectionWrapper index={8} bg1={bg1} bg2={bg2}>
                    <ContactSection />
                </SectionWrapper>

            </main>

            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600">
                    © {new Date().getFullYear()} VyralX Agency — VyralXAgency.marketing.co
                </div>
            </footer>

        </div>
    );
}
