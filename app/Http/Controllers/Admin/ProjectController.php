<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $query = Projects::query();

        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        $projects = $query->paginate($request->per_page ?? 10);

        $formattedProjects = $projects->through(function ($project) {
            return [
                'id'           => $project->id,
                'name'         => $project->name,
                'image'        => $project->image ? Storage::url($project->image) : null,
                'project_type' => $project->project_type,
                'descriptions'  => $project->descriptions,
                'client'       => $project->client,
                'title'        => $project->title,
                'technologies' => json_decode($project->technologies),
                'advantages'   => json_decode($project->advantages),
            ];
        });

        return Inertia::render('Admin/Projects/Index', [
            'projects' => $formattedProjects
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'         => 'required|string|max:255',
            'image'        => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'project_type' => 'required|string|max:255',
            'title'        => 'required|string|max:255',
            'descriptions'  => 'required|string',
            'client'       => 'required|string|max:255',
            'technologies' => 'required|string|max:255',
            'advantages'   => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        DB::beginTransaction();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('projects', 'public');
            $request->merge(['image' => $imagePath]);
        }

        try {
            $project = Projects::create([
                'name'         => $request->name,
                'image'        => $imagePath,
                'project_type' => $request->project_type,
                'descriptions'  => $request->descriptions,
                'client'       => $request->client,
                'title'        => $request->title,
                'technologies' => json_encode($request->technologies, true),
                'advantages'   => json_encode($request->advantages, true),

            ]);

            DB::commit();

            return back()->with('success', 'Project created successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Error creating project');
           //return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name'         => 'required|string|max:255',
            'image'        => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'project_type' => 'required|string|max:255',
            'title'        => 'required|string|max:255',
            'descriptions'  => 'required|string',
            'client'       => 'required|string|max:255',
            'technologies' => 'required|string|max:255',
            'advantages'   => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        DB::beginTransaction();

        try {
            $project = Projects::findOrFail($id);

            if ($request->hasFile('image')) {
                // Delete old image if it exists
                if ($project->image && \Storage::disk('public')->exists($project->image)) {
                    \Storage::disk('public')->delete($project->image);
                }

                // Store new image
                $image = $request->file('image');
                $imagePath = $image->store('projects', 'public');
            } else {
                // Keep the existing image path
                $imagePath = $project->image;
            }

            $project->update([
                'name'          => $request->name,
                'image'         => $imagePath,
                'project_type'  => $request->project_type,
                'descriptions'  => $request->descriptions,
                'client'        => $request->client,
                'title'         => $request->title,
                'technologies'  => json_encode($request->technologies, true),
                'advantages'    => json_encode($request->advantages, true),
            ]);

            DB::commit();

            return back()->with('success', 'Project updated successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Error updating project');
        }
    }
}
