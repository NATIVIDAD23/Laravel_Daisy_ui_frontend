<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Storage;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $company = \App\Models\CompanyProfile::first();
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'company'           => $company ? [
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
        ];
    }
}
