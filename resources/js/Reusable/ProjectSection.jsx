import { ExternalLink, Github, Filter } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Modern online shopping experience with seamless checkout.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "web",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            title: "Mobile Banking App",
            description: "Secure banking application with biometric authentication.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "mobile",
            technologies: ["React Native", "Firebase", "Node.js"]
        },
        {
            id: 3,
            title: "SaaS Dashboard",
            description: "Business intelligence dashboard with real-time analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "web",
            technologies: ["Vue.js", "Python", "PostgreSQL"]
        },
        {
            id: 4,
            title: "Fitness Tracking App",
            description: "Comprehensive fitness application with workout plans.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "mobile",
            technologies: ["Flutter", "Firebase", "Health APIs"]
        }
    ];

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'web', name: 'Web' },
        { id: 'mobile', name: 'Mobile' }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-16 lg:py-20 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Check out some of our recent work and successful projects.
                    </p>
                </div>

                {/* Simple Filter */}
                <div className="flex justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                activeCategory === category.id
                                    ? 'bg-[#ff8938] text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/portfolio"
                        className="btn btn-primary px-8 font-semibold"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
