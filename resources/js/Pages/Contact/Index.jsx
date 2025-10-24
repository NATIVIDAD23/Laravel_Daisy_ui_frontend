import GuestLayoutNavBar from '@/Layouts/GuestLayoutNavBar'
import { ContactSection } from '@/Reusable/ContactUsSection';
import { PageHeader } from '@/Reusable/PageHeader';
import { Head, Link } from '@inertiajs/react';

export default function ContactUsSection() {
    return (
        <>
            <GuestLayoutNavBar>
                <Head title="Contact Us" />
                <PageHeader
                    title="Contact Us"
                    subtitle="Get in touch with our team"
                    background="gradient"
                    align="center"
                />

                <ContactSection />

            </GuestLayoutNavBar>
        </>
    );
}
