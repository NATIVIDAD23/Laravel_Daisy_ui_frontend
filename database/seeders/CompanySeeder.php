<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; // ✅ Add this line

class CompanySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('company_profiles')->insert([
            [
                'company_name' => 'DevMike Solutions',
                'logo' => null,
                'descriptions' => 'DevMike Solutions is a full-service web development and digital innovation company founded by Mike, a passionate developer dedicated to turning ideas into powerful online experiences. We specialize in custom website development, web applications, and digital solutions tailored to help businesses grow and thrive in the modern digital landscape.',
                'contact_no' => '+63 912 345 6789',
                'email' => 'hello@devmike.com',
                'address' => 'Unit 5, TechPark Building, Makati City, Philippines',
                'g_map_address' => 'https://goo.gl/maps/example',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
