<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\RoleMiddleware;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::middleware(['auth'])->group(function () {
    // Routes accessibles par tous les utilisateurs connectés

    // Routes accessibles uniquement par les administrateurs
    Route::middleware([RoleMiddleware::class . ':admin'])->group(function () {
        // ... vos routes d'administration ...
    });

    // Routes accessibles uniquement par les secrétaires
    Route::middleware([RoleMiddleware::class . ':secretaire'])->group(function () {
        // ... vos routes de secrétaire ...
    });
});
