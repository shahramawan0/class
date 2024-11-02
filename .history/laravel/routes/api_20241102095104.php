<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/students', [StudentController::class, 'index']);
