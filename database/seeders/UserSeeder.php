<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User; // Adjust namespace if your User model is elsewhere

class UserSeeder extends Seeder
{
    // php artisan make:seeder AdminSeeder
    // php artisan db:seed --class=AdminSeeder
    public function run()
    {
        User::create([
            'full_name' => 'faouzi brahim',
            'email' => 'faouzibrahim@gmail.com',
            'phone' => '0679560208', // Optional, can be null if not needed
            'country' => 'Morocco', // Optional, can be null if not needed
            'password' => Hash::make('admin123'), // Hashed password
            'gender' => 'MALE', // Optional, can be null if not needed
            'role' => 'USER', // Set as ADMIN
            'is_active' => true, // Default is true, explicitly set for clarity
            'created_at' => now(), // Matches Prisma's @default(now())
        ]);
    }
}