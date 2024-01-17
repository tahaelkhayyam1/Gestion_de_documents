<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

 


class AuthController extends Controller
{
    // Méthode pour l'inscription d'un nouvel utilisateur
    public function signup(SignupRequest $request)
    {
        // Valider les données du formulaire
        $data = $request->validated();

        // Créer un nouvel utilisateur
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        // Générer un jeton d'accès
        $token = $user->createToken('main')->plainTextToken;

        // Retourner la réponse avec l'utilisateur et le jeton
        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request)
    {
        // Valider les données du formulaire
        $credentials = $request->validated();

        // Authentifier l'utilisateur
        if (!Auth::attempt($credentials)) {
            // Si l'authentification échoue, retourner une erreur 422
            return response()->json([
                'message' => 'Adresse e-mail ou mot de passe incorrect'
            ], 422);
        }

        // Si l'authentification réussit, récupérer l'utilisateur authentifié
        $user = Auth::user();

        // Récupérer le rôle de l'utilisateur authentifié
        // Assurez-vous que le modèle User contient bien un attribut 'role'
        $role = $user->role;

        // Générer un jeton d'accès pour l'utilisateur
        $token = $user->createToken('main')->plainTextToken;

        // Retourner une réponse avec les informations de l'utilisateur, le jeton, et le rôle
        return response()->json([
            'user' => $user,
            'token' => $token,
            'role' => $role
        ]);
    }

    // Méthode pour la déconnexion d'un utilisateur
    public function logout(Request $request)
    {
        // Récupérer l'utilisateur authentifié
        $user = $request->user();

        // Supprimer le jeton d'accès actuel
        $user->currentAccessToken()->delete();

        // Retourner une réponse vide avec le statut 204 (No Content)
        return response('', 204);
    }


    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'user not found'], 404);
        }
        return response()->json($user);
    }
    


}
