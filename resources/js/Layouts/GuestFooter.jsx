import {
    Mail,
    MapPin,
    ExternalLink,
    Phone,
    FacebookIcon,
    LinkedinIcon,
    InstagramIcon,
} from "lucide-react";
import { Link, usePage } from "@inertiajs/react";

export function Footer({ footerLinks }) {
    const { company } = usePage().props;

    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <div className="flex justify-start items-center">
                            <Link
                                href="/"
                                className="flex items-center gap-2 btn btn-link normal-case text-xl hover:scale-105 transition-transform duration-200"
                            >
                                <img
                                    src={company.logo}
                                    alt="Company Logo"
                                    className="h-30 md:h-30 lg:h-50 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        <p className="mt-4 text-gray-300 leading-relaxed text-xs">
                            {company.description ?? ""}
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4 mt-6">
                            {company.facebook && (
                                <a
                                    href={company.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ff8938] transition-all duration-200"
                                >
                                    <FacebookIcon className="h-5 w-5" />
                                </a>
                            )}
                            {company.instagram && (
                                <a
                                    href={company.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ff8938] transition-all duration-200"
                                >
                                    <InstagramIcon className="h-5 w-5" />
                                </a>
                            )}
                            {company.linkedin && (
                                <a
                                    href={company.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ff8938] transition-all duration-200"
                                >
                                    <LinkedinIcon className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
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
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
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
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            {company.contact_no && (
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-[#ff8938]" />
                                    <span>{company.contact_no}</span>
                                </div>
                            )}
                            {company.email && (
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-[#ff8938]" />
                                    <span>{company.email}</span>
                                </div>
                            )}
                            {company.address && (
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-[#ff8938]" />
                                    <span>{company.address}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2025 {company.name}. All rights reserved.
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
    );
}
