<?php

namespace App\Http\Controllers;

use App\Models\Ratings;
use Illuminate\Http\Request;

class RatingsController extends Controller
{
    public function index(){
        $ratings = Ratings::all();
        return response()->json($ratings,200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'rate' => 'required',
            'patient_id' => 'required',
            'doctor_id' => 'required',
            'date' => 'required',
        ]);
        
        $ratings = Ratings::create($validatedData);
        
        return response()->json($ratings, 201);
    }
    public function destroyDoctorById(string $id)
    {
        return Ratings::where('doctor_id', $id)->delete();
    }
    public function destroyPatientById(string $id)
    {
        return Ratings::where('patient_id', $id)->delete();
    }
}
