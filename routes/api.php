<?php
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\SecretaireController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DocumentRequestController;
 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route:: get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);






Route::apiResource('/etudiants', EtudiantController::class);
Route::post('/add_etudiants', [EtudiantController::class, 'store']);
Route::get('/etudiants/{id}', [EtudiantController::class, 'show']);
Route::put('/etudiants/{id}', [EtudiantController::class, 'update']);




 // Secretaire
 Route::post('/add_secretaires', [SecretaireController::class, 'store']);
 Route::apiResource('/secretaires', SecretaireController::class);
 Route::get('/secretaires/{id}', [SecretaireController::class, 'show']);
 Route::put('/secretaires/{id}', [SecretaireController::class, 'update']);





  Route::get('/Document_Requested', [DocumentRequestController::class, 'index']);
  Route::get('/Requests/{id}', [DocumentRequestController::class, 'find']);


  Route::get('/documents', [DocumentController::class, 'index']);

  Route::post('/document_request', [DocumentRequestController::class, 'store']);
  
   Route::put('/document-requests/{id}/reject', [DocumentRequestController::class, 'rejectDocument']);
  Route::put('/document-requests/{id}/validate', [DocumentRequestController::class, 'validateDocument']);


  Route::get('/user/{id}', [AuthController::class, 'show']);
