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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
             $table->text('image')->nullable();
            $table->string('project_type');
            $table->text('title')->nullable();
            $table->text('descriptions')->nullable();
            $table->json('technologies')->nullable();
            $table->json('advantages')->nullable();
            $table->boolean('is_hide')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
