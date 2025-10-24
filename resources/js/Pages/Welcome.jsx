import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar';
import { ClientSaysSection } from '@/Reusable/ClientSaysSection';
import { ContactSection } from '@/Reusable/ContactUsSection';
import { HeroSection } from '@/Reusable/HeroSection';
import { ProjectsSection } from '@/Reusable/ProjectSection';
import { ServicesSection } from '@/Reusable/ServiceSection';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="Welcome" />
                <HeroSection />
                {/* Services Section */}
                <div className="">
                    <ServicesSection />
                </div>

                {/* Projects Section */}
                <div className="">
                    <ProjectsSection />
                </div>

                <div className="">
                    <ClientSaysSection />
                </div>

                {/* Contact Section */}
                <div className="">
                    <ContactSection />
                </div>
            </GuestLayoutNavBar>
        </>
    );
}
