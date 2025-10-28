import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import { Input } from '@/Components/Input';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Textarea } from '@/Components/Textarea';

export function CreateUpdate({ className = '', children, project }) {
    const [open, setOpen] = useState(false);

    const {
        data,
        setData,
        post,
        put,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        name: project ? project.name : '',
        descriptions: project ? project.descriptions : '',
        client: project ? project.client : '',
        technologies: project ? project.technologies : '',
        advantages: project ? project.advantages : '',
        image: null,
        project_type: project ? project.project_type : '',
        title: project ? project.title : '',
    });

    const openDialog = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        clearErrors();
        reset();
    };

    const submit = (e) => {
        e.preventDefault();

        if (project) {
            post(route('project.update', project.id), {
                onSuccess: () => {
                    closeModal();
                },
            });
        } else {
            // Create new project
            post(route('project.store'), {
                onSuccess: () => {
                    closeModal();
                },
            });
        }
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <button onClick={openDialog}>
                {children}
            </button>

            <Modal show={open} onClose={closeModal} maxWidth="2xl">
                <form onSubmit={submit} className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        {project ? 'Update Project' : 'Create New Project'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-4">
                            {/* Project Name */}
                            <div>
                                <InputLabel htmlFor="name" value="Project Name" />
                                <Input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-full"
                                    placeholder="Enter project name"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            {/* Project Title */}
                            <div>
                                <InputLabel htmlFor="title" value="Project Title" />
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="mt-1 block w-full"
                                    placeholder="Enter project title"
                                />
                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            {/* Client */}
                            <div>
                                <InputLabel htmlFor="client" value="Client" />
                                <Input
                                    id="client"
                                    type="text"
                                    value={data.client}
                                    onChange={(e) => setData('client', e.target.value)}
                                    className="mt-1 block w-full"
                                    placeholder="Enter client name"

                                />
                                <InputError message={errors.client} className="mt-2" />
                            </div>

                            {/* Project Type */}
                            <div>
                                <InputLabel htmlFor="project_type" value="Project Type" />
                                <Input
                                    id="project_type"
                                    type="text"
                                    value={data.project_type}
                                    onChange={(e) => setData('project_type', e.target.value)}
                                    className="mt-1 block w-full"
                                    placeholder="Enter project type"
                                />
                                <InputError message={errors.project_type} className="mt-2" />
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            {/* Description */}
                            <div>
                                <InputLabel htmlFor="descriptions" value="Description" />
                                <Textarea
                                    id="description"
                                    value={data.descriptions}
                                    onChange={(e) => setData('descriptions', e.target.value)}
                                    rows="3"
                                    className=""
                                    placeholder="Enter project descriptions"
                                />
                                <InputError message={errors.descriptions} className="mt-2" />
                            </div>

                            {/* Technologies */}
                            <div>
                                <InputLabel htmlFor="technologies" value="Technologies" />
                                <Input
                                    id="technologies"
                                    type="text"
                                    value={data.technologies}
                                    onChange={(e) => setData('technologies', e.target.value)}
                                    className="mt-1 block w-full"
                                    placeholder="React, Node.js, MongoDB, etc."
                                />
                                <InputError message={errors.technologies} className="mt-2" />
                            </div>

                            {/* Advantages */}
                            <div>
                                <InputLabel htmlFor="advantages" value="Advantages/Features" />
                                <Textarea
                                    id="advantages"
                                    value={data.advantages}
                                    onChange={(e) => setData('advantages', e.target.value)}
                                    rows="3"
                                    className=""
                                    placeholder="Advance reporting, Analytics, etc."
                                />
                                <InputError message={errors.advantages} className="mt-2" />
                            </div>

                            {/* Image Upload */}
                            <div>
                                <InputLabel htmlFor="image" value="Project Image" />
                                <Input
                                    id="image"
                                    type="file"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                    className="file-input file-input-neutral"
                                    accept="image/*"
                                />
                                <InputError message={errors.image} className="mt-2" />
                                {project?.image && (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="mt-2 w-20 h-20 object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <footer className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            className="btn btn-neutral"
                            onClick={closeModal}
                            disabled={processing}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={processing}
                        >
                            {processing && (
                                <span className="spinner-border spinner-border-sm me-2"></span>
                            )}
                            {project ? 'Update Project' : 'Create Project'}
                        </button>
                    </footer>
                </form>
            </Modal>
        </section>
    );
}
