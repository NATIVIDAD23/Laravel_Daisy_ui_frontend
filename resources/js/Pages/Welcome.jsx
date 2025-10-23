import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar';
import { CareerSectionSimple } from '@/Reusable/CareerSection';
import { ContactSectionSimple } from '@/Reusable/ContactUsSection';
import { HeroSection } from '@/Reusable/HeroSection';
import { ProjectsSectionSimple } from '@/Reusable/ProjectSection';
import { ServicesSection } from '@/Reusable/ServiceSection';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="Welcome" />
                <HeroSection />
                {/* Services Section */}
                <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <ServicesSection />
                    </div>
                </div>

                {/* Projects Section */}
                <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <ProjectsSectionSimple />
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <ContactSectionSimple />
                    </div>
                </div>
            </GuestLayoutNavBar>
        </>
    );
}
