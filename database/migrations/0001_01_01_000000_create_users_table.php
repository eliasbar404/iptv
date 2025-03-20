<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Int @id @default(autoincrement())
            $table->string('full_name')->unique(); // String @unique
            $table->string('email')->unique(); // String @unique
            $table->string('phone')->unique()->nullable(); // String? @unique
            $table->string('country')->nullable(); // String?
            $table->string('password')->nullable(); // String
            $table->enum('gender', ['MALE', 'FEMALE'])->nullable(); // String? with specific values
            $table->enum('role', ['ADMIN', 'USER'])->default('USER'); // String @default("USER")
            $table->boolean('is_active')->default(true); // Boolean @default(true)
            $table->timestamps(); // Covers createdAt (DateTime @default(now()))
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
