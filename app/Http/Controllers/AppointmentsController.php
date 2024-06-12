<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointments;

class AppointmentsController extends Controller
{
    //
    public function index(){
        $appointments = Appointments::all();
        return response()->json($appointments,200);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required',
            'doctor_id' => 'required',
            'patient_name' => 'required',
            'doctor_name' => 'required',
            'patient_phone_number' => 'required',
            'doctor_phone_number' => 'required',
            'date' => 'required',
            'time' => 'required',
            'status' => 'required',
        ]);
        
        $appointment = Appointments::create($validatedData);
        
        return response()->json($appointment, 201);
    }
    public function destroyDoctorById(string $id)
    {
        return Appointments::where('doctor_id', $id)->delete();
    }
    public function destroyPatientById(string $id)
    {
        return Appointments::where('patient_id', $id)->delete();
    }
}
