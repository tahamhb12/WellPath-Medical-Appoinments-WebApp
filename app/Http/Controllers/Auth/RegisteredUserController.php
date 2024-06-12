<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string',"min:1", 'max:10'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
    public function AddDoctor(Request $request): Response
    {
        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string',"min:1", 'max:10'],
            'role' => ['required', 'string', 'max:10'],
            'service' => ['required', 'string', 'max:20'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone_number' => $request->phone_number,
            'role' => $request->role,
            'service' => $request->service,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return response()->noContent();
    }

    public function users(){
        $users = User::all();
        return response()->json($users,200);
    }

    public function update(Request $request): Response
    {
        $request->validate([
            'first_name' => ['string', 'max:255'],
            'last_name' => ['string', 'max:255'],
            'phone_number' => ['string', 'min:10', 'max:10'],
            'password' => ['confirmed', Rules\Password::defaults()],
        ]);

    $user = $request->user(); 

    $dataToUpdate = [
        'first_name' => $request->first_name,
        'last_name' => $request->last_name,
        'phone_number' => $request->phone_number,
    ];
    if (!empty($request->password)) {
        $dataToUpdate['password'] = Hash::make($request->password);
    }

    $user->update($dataToUpdate);

    return response()->noContent();
    }

    public function updateByid(Request $request, $id): Response
{
    $request->validate([
        'first_name' => ['string', 'max:255'],
        'last_name' => ['string', 'max:255'],
        'phone_number' => ['string', 'min:10', 'max:10'],
        'service' => ['string', 'max:20'],
        'role' => ['string', 'max:20'],
        'password' => ['confirmed', Rules\Password::defaults()],
    ]);

    $user = User::findOrFail($id);

    $dataToUpdate = [
        'first_name' => $request->first_name,
        'last_name' => $request->last_name,
        'phone_number' => $request->phone_number,
        'email' => $request->email,
        'service' => $request->service,
        'role' => $request->role,
    ];

    if (!empty($request->password)) {
        $dataToUpdate['password'] = Hash::make($request->password);
    }

    $user->update($dataToUpdate);

    return response()->noContent();
}

public function destroy($id): Response
{
    $user = User::findOrFail($id);
    $user->delete();
    return response()->noContent();
}
}
