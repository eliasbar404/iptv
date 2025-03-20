<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function store(Request $request)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'email'     => 'required|email|unique:users,email',
            'country'   => 'nullable|string|max:100',
        ]);

        if ($validator->fails()) {
            if ($request->header('X-Inertia')) {
                // Return a proper Inertia redirect with errors
                return redirect()->back()
                    ->withErrors($validator)
                    ->withInput();
            }
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a default password by concatenating the full name with a fixed string.
        $password = $request->full_name . "987654321";

        // Create user
        $user = User::create([
            'full_name' => $request->full_name,
            'email'     => $request->email,
            'country'   => $request->country,
            'password'  => Hash::make($password),
        ]);

        if ($request->header('X-Inertia')) {
            // Return a redirect with a success flash message
            return redirect()->back()->with('message', 'User created successfully');
        }

        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }
}
