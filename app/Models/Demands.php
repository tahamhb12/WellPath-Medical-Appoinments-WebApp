<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demands extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'doctor_id',
        'patient_name',
        'doctor_name',
        'patient_phone_number',
        'doctor_phone_number',
        'patient_email',
        'doctor_email',
        'date',
    ];
}
