import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    CircleHelp,
    FileText,
    Home,
    Phone,
    Menu,
    X,
    ChevronRightCircle,
} from "lucide-react";
import { Footer } from "./GuestFooter";

export default function GuestLayoutNavBar({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { url, component } = usePage();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const Links = [
        {
            name: "Home",
            href: "/",
            icon: Home },
        {
            name: "About",
            href: route("about.index"),
            icon: CircleHelp
        },
        {
            name: "Services",
            href: "/services",
            icon: FileText },
        {
            name: "Careers",
            href: route("careers.index"),
            icon: ChevronRightCircle,
        },
        {
            name: "Contact",
            href: route("contact.index"),
            icon: Phone
        },
    ];

    const footerLinks = {
        services: [
            { name: "Web Development", href: "/services/web-development" },
            { name: "Mobile Apps", href: "/services/mobile-apps" },
            { name: "Software Design", href: "/services/design" },
            { name: "Support & Maintenance", href: "/services/support" },
        ],
        company: [
            { name: "Blog", href: "/blog" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    };

    const isActive = (href) => {
        const hrefPath = href.startsWith('http') ? new URL(href).pathname : href;

        const normalize = (path) => path.replace(/\/+$/, '') || '/';
        const current = normalize(url);
        const target = normalize(hrefPath);

        if (target === '/') return current === '/';

        return current === target || current.startsWith(target + '/');
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Enhanced Fixed Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50">
                <nav
                    className={`navbar px-4 md:px-8 h-[72px] border-b transition-all duration-300 ease-in-out ${
                        scrolled
                            ? "bg-gray-800/90 text-white dark:bg-gray-900/95 border-gray-400 dark:border-gray-700 shadow-lg"
                            : "bg-white/80 dark:bg-gray-900/80 border-white/20 backdrop-blur-md"
                    }`}
                >
                    {/* Logo on the left */}
                    <div className="flex-none">
                        <Link
                            href="/"
                            className="btn btn-ghost normal-case text-xl hover:scale-105 transition-transform duration-200"
                        >
                            <span className="bg-gradient-to-r from-[#ff8938] to-orange-500 bg-clip-text text-transparent font-bold">
                                MyBrand
                            </span>
                        </Link>
                    </div>

                    {/* Centered navigation links */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex items-center gap-1">
                            {Links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={`btn btn-ghost gap-2 rounded-xl transition-all duration-200 ${
                                        isActive(link.href)
                                            ? "bg-gradient-to-r from-[#ff8938] to-orange-500 text-white shadow-lg transform scale-105"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                                    }`}
                                >
                                    <link.icon className="h-4 w-4" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Inquire Now button on the right */}
                    <div className="hidden md:flex flex-none">
                        <Link
                            href="/get-started"
                            className="btn bg-gradient-to-r from-[#ff8938] to-orange-500 text-white border-none hover:from-orange-500 hover:to-[#ff8938] hover:scale-105 transform transition-all duration-200 shadow-lg rounded-xl font-semibold"
                        >
                            Inquire Now{" "}
                            <ChevronRightCircle className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Mobile menu toggle - Aligned to end */}
                    <div className="md:hidden flex flex-1 justify-end">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded={menuOpen}
                            className="btn btn-ghost rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                        >
                            {menuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Enhanced Mobile menu */}
                {menuOpen && (
                    <div
                        className={`md:hidden backdrop-blur-lg border-b animate-slide-down shadow-xl ${
                            scrolled
                                ? "bg-gray-800/95 text-white border-gray-600"
                                : "bg-white/95 dark:bg-gray-900/95 border-gray-200 dark:border-gray-700"
                        }`}
                        aria-hidden={!menuOpen}
                    >
                        <div className="flex flex-col px-4 py-4 space-y-2">
                            {Links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`btn btn-ghost justify-start gap-3 rounded-xl text-lg transition-all duration-200 ${
                                        isActive(link.href)
                                            ? "bg-gradient-to-r from-[#ff8938] to-orange-500 text-white"
                                            : scrolled
                                            ? "hover:bg-gray-700 text-white"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    <link.icon className="h-5 w-5" />
                                    {link.name}
                                    {isActive(link.href) && (
                                        <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                </Link>
                            ))}
                            <Link
                                href="/get-started"
                                className="btn bg-gradient-to-r from-[#ff8938] to-orange-500 text-white border-none hover:from-orange-500 hover:to-[#ff8938] mt-4 rounded-xl font-semibold text-lg py-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                Inquire Now{" "}
                                <ChevronRightCircle className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Page content */}
            <main className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-[90px]">
                {children}
            </main>
            <Footer footerLinks={footerLinks} />
        </div>
    );
}
