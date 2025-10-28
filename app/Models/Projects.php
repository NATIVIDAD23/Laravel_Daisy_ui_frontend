<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Projects extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'project_type',
        'description',
        'image',
        'technologies',
        'advantages',
        'is_hide',
    ];

    /**
     * Casts for JSON and other data types
     */
    protected $casts = [
        'technologies' => 'array',
        'advantages' => 'array',
        'is_hide'    => 'boolean'
    ];
}
