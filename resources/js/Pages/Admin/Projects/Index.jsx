import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Edit, Eye, Trash2, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { CreateUpdate } from './CreateUpdate';

export default function Project({
    projects
}) {
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <AuthenticatedLayout header="Projects">
            <Head title="Projects" />

            <div className="space-y-6">
                {/* Header with Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Manage projects
                        </p>
                    </div>
                    <CreateUpdate>
                        <button
                            href="/projects/create"
                            className="btn btn-primary flex items-center gap-2"
                        >
                            <Plus className="h-4 w-4" />
                            Add Project
                        </button>
                    </CreateUpdate>
                </div>

                {/* Filters and Search */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Project Name
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Client
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {projects.data?.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <td>
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-12 h-12 object-cover rounded-full"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">
                                                    {project.name}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                                    {project.project_type}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                                            {project.client}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <CreateUpdate project={project}>
                                                    <button
                                                        className="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </button>
                                                </CreateUpdate>
                                                <button
                                                    className="p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Empty State */}
                        {projects.data.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-gray-400 dark:text-gray-500 mb-4">
                                    <Filter className="h-12 w-12 mx-auto" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                    No projects found
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
