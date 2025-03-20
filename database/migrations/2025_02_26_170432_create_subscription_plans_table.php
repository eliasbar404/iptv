<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionPlansTable extends Migration
{
    public function up()
    {
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id(); // Int @id @default(autoincrement())
            $table->string('title'); // String
            $table->string('sub_title'); // String
            $table->string('icon')->nullable(); // String?
            $table->decimal('monthly_price', 8, 2); // Float
            $table->decimal('annual_price', 8, 2); // Float
            $table->longText('features');
            $table->boolean('is_most_popular')->default(false); // Boolean @default(false)
            $table->string('message')->nullable(); // String?
            $table->timestamps(); // Covers createdAt and updatedAt
        });
    }

    public function down()
    {
        Schema::dropIfExists('subscription_plans');
    }
}
