import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar';
import { AboutSection } from '@/Reusable/About';
import { ContactSection } from '@/Reusable/ContactUsSection';
import { Head, Link } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="About" />
                <AboutSection />
                <ContactSection />
            </GuestLayoutNavBar>
        </>
    );
}
