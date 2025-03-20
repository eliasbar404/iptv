<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    // public function __construct()
    // {
    //     // Middleware to ensure only authenticated admins can access these methods
    //     $this->middleware(function ($request, $next) {
    //         if (!auth()->check() || auth()->user()->role !== 'ADMIN') {
    //             abort(403, 'Unauthorized action.');
    //         }
    //         return $next($request);
    //     });
    // }

    // Show the user management page
    public function index()
    {
        $users = User::where('role', '!=', 'ADMIN')
            ->select('id', 'full_name', 'email', 'is_active', 'created_at')
            ->get();

        return Inertia::render('dashboardUsers', [
            'users' => $users,
        ]);
    }

    // Delete a user
    public function destroy(Request $request, $userId)
    {
        $user = User::findOrFail($userId);

        // Prevent deleting admins (extra safety)
        if ($user->role === 'ADMIN') {
            return redirect()->back()->with('error', 'Cannot delete an admin user.');
        }

        $user->delete();

        return redirect()->back()->with('success', 'User deleted successfully.');
    }


    // New method to toggle is_active status
    public function toggleActive(Request $request, $userId)
    {
        $user = User::findOrFail($userId);
        if ($user->role === 'ADMIN') {
            return redirect()->back()->with('error', 'Cannot modify an admin user.');
        }
        $user->is_active = !$user->is_active; // Toggle the status
        $user->save();

        return redirect()->back()->with('success', "User status updated to " . ($user->is_active ? 'active' : 'inactive') . ".");
    }


 
}