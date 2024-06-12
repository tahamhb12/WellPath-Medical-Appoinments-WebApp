<?php

namespace App\Http\Controllers;

use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{


    public function index(){
        $reviews = Reviews::all();
        return response()->json($reviews,200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'patient_id' => 'required',
            'doctor_id' => 'required',
            'review' => 'required','max:25',
            'date' => 'required','max:25',
        ]);
        
        $reviews = Reviews::create($validatedData);
        
        return response()->json($reviews, 201);
    }
    public function destroyDoctorById(string $id)
    {
        return Reviews::where('doctor_id', $id)->delete();
    }
    public function destroyPatientById(string $id)
    {
        return Reviews::where('patient_id', $id)->delete();
    }
}
