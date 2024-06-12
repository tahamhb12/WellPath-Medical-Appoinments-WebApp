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
        Schema::create('demands', function (Blueprint $table) {
            $table->id();
            $table->integer("patient_id");
            $table->integer("doctor_id");
            $table->string("patient_name");
            $table->string("doctor_name");
            $table->string("patient_phone_number");
            $table->string("doctor_phone_number");
            $table->string("patient_email");
            $table->string("doctor_email");
            $table->date("date");
            $table->string("accepted")->default("pending");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demands');
    }
};
