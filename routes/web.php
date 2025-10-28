<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\CompanyProfileController;
use App\Http\Controllers\Admin\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/careers', function () {
    return Inertia::render('Careers/Index');
})->name('careers.index');

Route::get('/about', function () {
    return Inertia::render('About/Index');
})->name('about.index');

Route::get('/contact-us', function () {
    return Inertia::render('Contact/Index');
})->name('contact.index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/company-profile', [CompanyProfileController::class, 'index'])->name('company.index');
    Route::post('/company-profile/{id}', [CompanyProfileController::class, 'update'])->name('company.update');

    Route::get('/projects', [ProjectController::class, 'index'])->name('project.index');
    Route::post('project', [ProjectController::class, 'store'])->name('project.store');
    Route::post('project/{id}', [ProjectController::class, 'update'])->name('project.update');
});

require __DIR__.'/auth.php';
