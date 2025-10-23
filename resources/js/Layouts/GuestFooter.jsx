import { Mail, MapPin, ExternalLink, Phone } from "lucide-react";
import { Link } from "@inertiajs/react";

export function Footer({ footerLinks }) {
    return (
        <>
            {/* Enhanced Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="inline-block">
                                <span className="text-2xl font-bold bg-gradient-to-r from-[#ff8938] to-orange-500 bg-clip-text text-transparent">
                                    MyBrand
                                </span>
                            </Link>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                Creating exceptional digital experiences through
                                innovative software solutions and cutting-edge
                                technology.
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ff8938] transition-colors duration-200 cursor-pointer">
                                    <span className="text-sm font-semibold">
                                        f
                                    </span>
                                </div>
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ff8938] transition-colors duration-200 cursor-pointer">
                                    <span className="text-sm font-semibold">
                                        t
                                    </span>
                                </div>
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ff8938] transition-colors duration-200 cursor-pointer">
                                    <span className="text-sm font-semibold">
                                        in
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-[#ff8938] transition-colors duration-200 flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-[#ff8938] transition-colors duration-200 flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Contact
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Phone className="h-4 w-4 text-[#ff8938]" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Mail className="h-4 w-4 text-[#ff8938]" />
                                    <span>hello@mybrand.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <MapPin className="h-4 w-4 text-[#ff8938]" />
                                    <span>123 Business Ave, San Francisco</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-gray-400 text-sm">
                                © 2025 MyBrand. All rights reserved.
                            </div>
                            <div className="flex space-x-6">
                                {footerLinks.legal.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#ff8938] text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
