import { Home, ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export function PageHeader({
    title,
    subtitle,
    breadcrumbs = [],
    background = 'default',
    align = 'left'
}) {
    const backgroundClasses = {
        default: 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700',
        gray: 'bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700',
        gradient: 'bg-gradient-to-r from-[#ff8938] to-orange-500 text-white',
        transparent: 'bg-transparent'
    };

    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <div>
            <section className={`py-8 lg:py-12 ${backgroundClasses[background]} ${alignClasses[align]}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    {breadcrumbs.length > 0 && (
                        <nav className="flex items-center gap-2 text-sm mb-4 justify-center">
                            <Link
                                href="/"
                                className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-[#ff8938] transition-colors"
                            >
                                <Home className="h-4 w-4" />
                                Home
                            </Link>
                            {breadcrumbs.map((crumb, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                    {crumb.href ? (
                                        <Link
                                            href={crumb.href}
                                            className="text-gray-500 dark:text-gray-400 hover:text-[#ff8938] transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-[#ff8938] font-medium">
                                            {crumb.label}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </nav>
                    )}

                    {/* Main Title */}
                    <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${background === 'gradient' ? 'text-white' : ''
                        }`}>
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className={`text-lg lg:text-xl max-w-3xl mx-auto ${background === 'gradient'
                                ? 'text-orange-100'
                                : 'text-gray-600 dark:text-gray-300'
                            } ${align === 'center' ? 'mx-auto' : ''}`}>
                            {subtitle}
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}
