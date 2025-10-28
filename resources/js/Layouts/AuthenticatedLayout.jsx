import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link, usePage } from '@inertiajs/react';
import { Building, Home, TerminalIcon, User } from 'lucide-react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const userInitials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const company = usePage().props.company;

    const navigationLinks = [
        {
            href: route('dashboard'),
            label: 'Dashboard',
            icon: Home,
            active: route().current('dashboard'),
        },
        {
            href: route('project.index'),
            label: 'Projects',
            icon: TerminalIcon,
            active: route().current('project.index'),
        },
        {
            href: route('company.index'),
            label: 'Company Profile',
            icon: Building,
            active: route().current('company.index'),
        },
        {
            href: route('profile.edit'),
            label: 'Profile',
            icon: User,
            active: route().current('profile.edit'),
        },
    ];

    return (
        <div className="flex bg-base-200 text-base-content">
            {/* ✅ FIXED SIDEBAR */}
            <aside className="fixed top-0 left-0 h-screen w-64 bg-base-100 shadow-lg border-r border-base-300 flex flex-col z-40">
                {/* Logo */}
                <div className="flex items-center justify-center p-4 border-b border-base-300">
                    <Link href="/" className="flex items-center gap-2">
                        {/* <ApplicationLogo logo={company.logo} /> */}
                        <span className="text-lg font-semibold">{company.name}</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                    {navigationLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                                    link.active
                                        ? 'bg-gradient-to-r from-[#ff8938] to-orange-500 text-white shadow-md'
                                        : 'hover:bg-base-300 text-base-content/80'
                                }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

            </aside>

            {/* ✅ MAIN CONTENT AREA */}
            <div className="flex-1 ml-64 flex flex-col min-h-screen">
                {/* ✅ FIXED HEADER */}
                <header className="fixed top-0 left-64 right-0 h-16 bg-base-100 shadow-sm border-b border-base-300 flex items-center justify-between px-6 z-30">
                    <h2 className="text-lg font-semibold">{header}</h2>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <div className="avatar placeholder cursor-pointer">
                                <div className="bg-primary text-primary-content rounded-full w-9">
                                    <span>{userInitials}</span>
                                </div>
                            </div>
                        </Dropdown.Trigger>
                        <Dropdown.Content align="right">
                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">Logout</Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </header>

                {/* ✅ SCROLLABLE PAGE CONTENT */}
                <main className="flex-1 mt-16 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
