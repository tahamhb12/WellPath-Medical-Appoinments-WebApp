<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DemandsController;
use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\RatingsController;
use App\Http\Controllers\ReviewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::put('/user/update', [RegisteredUserController::class, 'update'])->name('user.update');

Route::get('/users', [RegisteredUserController::class, 'users']);
Route::put('/user/{id}', [RegisteredUserController::class, 'updateByid']);
Route::post('/users', [RegisteredUserController::class, 'AddDoctor']);
Route::delete('/users/{id}', [RegisteredUserController::class, 'destroy']);


Route::get('/demands', [DemandsController::class, 'index']);
Route::post('/demands', [DemandsController::class, 'store']);
Route::put('/demands/{demandId}/accept', [DemandsController::class, 'acceptDemand']);
Route::put('/demands/{demandId}/reschedule', [DemandsController::class, 'rescheduleDemand']);
Route::delete('/demands/{id}', [DemandsController::class, 'destroy']);
Route::delete('/demands/doctor/{id}', [DemandsController::class, 'destroyDoctorById']);
Route::delete('/demands/patient/{id}', [DemandsController::class, 'destroyPatientById']);



Route::get('/appointments', [AppointmentsController::class, 'index']);
Route::post('/appointments', [AppointmentsController::class, 'store']);
Route::delete('/appointments/doctor/{id}', [AppointmentsController::class, 'destroyDoctorById']);
Route::delete('/appointments/patient/{id}', [AppointmentsController::class, 'destroyPatientById']);

Route::get('/reviews', [ReviewsController::class, 'index']);
Route::post('/reviews', [ReviewsController::class, 'store']);
Route::delete('/reviews/doctor/{id}', [ReviewsController::class, 'destroyDoctorById']);
Route::delete('/reviews/patient/{id}', [ReviewsController::class, 'destroyPatientById']);

Route::get('/ratings', [RatingsController::class, 'index']);
Route::post('/ratings', [RatingsController::class, 'store']);
Route::delete('/ratings/doctor/{id}', [RatingsController::class, 'destroyDoctorById']);
Route::delete('/ratings/patient/{id}', [RatingsController::class, 'destroyPatientById']);


