<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SubscriptionPlanController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/alt', function () {
    return Inertia::render('altpage');
})->name('alt');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/pricing', function () {
    return Inertia::render('pricing');
})->name('pricing');

Route::get('/plans', function () {
    return Inertia::render('plansPage');
})->name('plansPage');

Route::get('/sports', function () {
    return Inertia::render('sports');
})->name('sportsPage');

Route::get('/shows', function () {
    return Inertia::render('shows');
})->name('showsPage');

Route::get('/movies', function () {
    return Inertia::render('movies');
})->name('moviesPage');

Route::get('/livetv', function () {
    return Inertia::render('live-tv');
})->name('live-tvPage');

Route::fallback(function () {
    return Inertia::render('notfound');
});

// Get User Information

Route::post('/user/information',[UserController::class, 'store'])->name('user.information');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Routes for Dashboard Users
    Route::get('dashboard/users', [AdminController::class, 'index'])->name('dashboard.users');
    Route::delete('/admin/users/{userId}', [AdminController::class, 'destroy'])->name('admin.users.destroy');
    Route::patch('/admin/users/{userId}/toggle-active', [AdminController::class, 'toggleActive'])->name('admin.users.toggle-active');

    


    // Route::get('/dashboard/plans', [SubscriptionPlanController::class, 'index'])->name('admin.plans');
    // Route::post('/dashboard/plans', [SubscriptionPlanController::class, 'store'])->name('admin.plans.store');
    // Route::patch('/dashboard/plans/{planId}', [SubscriptionPlanController::class, 'update'])->name('admin.plans.update');
    // Route::delete('/dashboard/plans/{planId}', [SubscriptionPlanController::class, 'destroy'])->name('admin.plans.destroy');

    Route::get('/dashboard/subscription-plans', [SubscriptionPlanController::class, 'index'])->name('admin.subscription-plans.index');
    Route::post('/subscription-plans', [SubscriptionPlanController::class, 'store'])->name('admin.subscription-plans.store');
    Route::put('/subscription-plans/{subscriptionPlan}', [SubscriptionPlanController::class, 'update'])->name('admin.subscription-plans.update');
    Route::delete('/subscription-plans/{subscriptionPlan}', [SubscriptionPlanController::class, 'destroy'])->name('admin.subscription-plans.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
