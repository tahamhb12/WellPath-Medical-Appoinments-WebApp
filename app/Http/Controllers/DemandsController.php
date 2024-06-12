<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demands;

class DemandsController extends Controller
{

    public function index(){
        $demands = Demands::all();
        return response()->json($demands,200);
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
            'patient_email' => 'required',
            'doctor_email' => 'required',
            'date' => 'required'
        ]);
        
        $demand = Demands::create($validatedData);
        
        return response()->json($demand, 201);
    }
    public function acceptDemand($demandId){

    $demand = Demands::findOrFail($demandId);
    
    if ($demand->accepted === 'pending') {
        $demand->accepted = 'accepted';
        $demand->save();
        
        return response()->json( 200);
    } else {
        return response()->json(400);
    }
    }

    public function rescheduleDemand(Request $request, $demandId)
    {
        $demand = Demands::findOrFail($demandId);

        if ($demand->accepted === 'pending') {
            $newDate = $request->date; 
            $demand->date = $newDate; 
            $demand->accepted = 'rescheduled';
            $demand->save();

            return response()->json(200);
        } else {
            return response()->json(400);
        }
    }
    public function destroy(string $id)
    {
     $demands = Demands::find($id);
    return $demands->delete();   
    }
    public function destroyDoctorById(string $id)
    {
        return Demands::where('doctor_id', $id)->delete();
    }
    public function destroyPatientById(string $id)
    {
        return Demands::where('patient_id', $id)->delete();
    }
}
