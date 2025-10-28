<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CompanyProfile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
class CompanyProfileController extends Controller
{
    public function index() {

        $company = \App\Models\CompanyProfile::first();
        
        return Inertia::render('Admin/Company/Index', [
            'company'           => $company ? [
                'id'            => encrypt($company->id),
                'name'          => $company->company_name,
                'logo'          => $company->logo ? Storage::url($company->logo) : null, 
                'description'   => $company->descriptions,
                'facebook'      => $company->facebook_url,
                'instagram'     => $company->instagram_url,
                'contact_no'    => $company->contact_no,
                'email'         => $company->email,
                'address'       => $company->address,
                'g_map_address' => $company->g_map_address
            ] : null,
        ]);
    }

   public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name'          => 'required|string|max:255',
            'email'         => 'nullable|email',
            'address'       => 'nullable|string|max:255',
            'logo'          => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'facebook'      => 'nullable|url',
            'instagram'     => 'nullable|url',
            'linked_in_url' => 'nullable|url',
            'g_map_address' => 'nullable|url',
            'contact_no'    => 'nullable|string|max:20',
            'description'   => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        DB::beginTransaction();

        try {
            $company = CompanyProfile::findOrFail(decrypt($id));

            $validated = $validator->validated();

            // ✅ Handle file upload
            if ($request->hasFile('logo')) {
                if ($company->logo && Storage::exists($company->logo)) {
                    Storage::delete($company->logo);
                }

                $path = $request->file('logo')->store('logos', 'public');
                $validated['logo'] = $path;
            }

            // ✅ Update mapped fields properly
            $company->update([
                'company_name'  => $validated['name'],
                'email'         => $validated['email'] ?? $company->email,
                'address'       => $validated['address'] ?? $company->address,
                'logo'          => $validated['logo'] ?? $company->logo,
                'facebook_url'  => $validated['facebook'] ?? $company->facebook_url,
                'instagram_url' => $validated['instagram'] ?? $company->instagram_url,
                'linked_in_url' => $validated['linked_in_url'] ?? $company->linked_in_url,
                'descriptions'  => $validated['description'] ?? $company->descriptions,
                'contact_no'    => $validated['contact_no'] ?? $company->contact_no,
                'g_map_address' => $validated['g_map_address'] ?? $company->g_map_address,
            ]);

            DB::commit();

            return back()->with('success', '✅ Company updated successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', '❌ Something went wrong: ' . $e->getMessage());
        }
    }

}
