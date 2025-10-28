<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'logo',
        'descriptions',
        'facebook_url',
        'instagram_url',
        'linked_in_url',
        'contact_no',
        'email',
        'address',
        'g_map_address'
    ];
}
