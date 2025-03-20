<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    protected $fillable = [
        'title',
        'sub_title',
        'icon',
        'monthly_price',
        'annual_price',
        'is_most_popular',
        'message',
        'features'
    ];

    protected $casts = [
        'monthly_price' => 'float',
        'annual_price' => 'float',
        'is_most_popular' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];



}