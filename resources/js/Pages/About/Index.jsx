import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar';
import { AboutSection } from '@/Reusable/About';
import { ContactSection } from '@/Reusable/ContactUsSection';
import { PageHeader } from '@/Reusable/PageHeader';
import { Head, Link } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="About" />
                <PageHeader
                    title="About Us"
                    subtitle="What makes a company great? That’s simple. It’s all about the people."
                    background="gradient"
                    align="center"
                />
                <AboutSection />
                <ContactSection />
            </GuestLayoutNavBar>
        </>
    );
}
