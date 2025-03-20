<?php

// app/Http/Controllers/Admin/SubscriptionPlanController.php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        return inertia('dashboardPlans', [
            'plans' => SubscriptionPlan::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'sub_title' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'monthly_price' => 'required|numeric|min:0',
            'annual_price' => 'required|numeric|min:0',
            'features' => 'required|string',
            'is_most_popular' => 'boolean',
            'message' => 'nullable|string',
        ]);

        SubscriptionPlan::create($validated);
        return redirect()->back()->with('success', 'Plan created successfully.');
    }

    public function update(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'sub_title' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'monthly_price' => 'required|numeric|min:0',
            'annual_price' => 'required|numeric|min:0',
            'features' => 'required|string',
            'is_most_popular' => 'boolean',
            'message' => 'nullable|string',
        ]);

        $subscriptionPlan->update($validated);
        return redirect()->back()->with('success', 'Plan updated successfully.');
    }

    public function destroy(SubscriptionPlan $subscriptionPlan)
    {
        $subscriptionPlan->delete();
        return redirect()->back()->with('success', 'Plan deleted successfully.');
    }
}