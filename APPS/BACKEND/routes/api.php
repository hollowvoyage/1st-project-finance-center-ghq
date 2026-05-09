<?php

use App\Http\Controllers\EmployeeController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function () {
    return 'hello, from laravel!';
});

//http://localhost:8000/api/employees
route::get('/employees', [EmployeeController::class, 'index']);
route::post('/employees', [EmployeeController::class, 'store']);
//http://localhost:8000/api/employees/2
route::get('/employees/{id}', [EmployeeController::class, 'show']);
Route::put('/employees/{id}', [EmployeeController::class, 'update']);
Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']);
