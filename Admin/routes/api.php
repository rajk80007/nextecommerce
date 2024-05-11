<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function (Request $request) {
    return (['message' => 'Hello, World!']);
});

Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);