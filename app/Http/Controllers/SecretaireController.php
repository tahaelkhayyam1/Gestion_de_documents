<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Secretaire;
use Illuminate\Support\Facades\Hash; // Make sure to include the Hash facade

class SecretaireController extends Controller
{
 

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
            'cin' => 'required|max:255',
            'datedenaissance' => 'nullable|date',
            'mobile_number' => 'required|max:255',
            'address_line1' => 'required|max:255',
            'email' => 'required|email|max:255|unique:secretaires',
            'Country' => 'required|max:255',
            'Region' => 'required|max:255',
          
        ]);
        // Set the default password
        $validatedData['password'] = Hash::make('SecUpf2024');    
        $secretaire = Secretaire::create($validatedData);
        return response()->json([
            'success' => true,
            'redirectPath' => '/admin/ListeSecretaires' 
        ]);
      
    }






    public function index()
    {
        $secretaire = Secretaire::all();
        return response()->json($secretaire);
    }


  


    
    public function destroy($id)
    {
        $secretaire = Secretaire::findOrFail($id);
        $secretaire->delete();

        return response()->json(['message' => 'secretaire successfully deleted']);
    }


    public function show($id)
    {
        $secretaire = Secretaire::find($id);
        if (!$secretaire) {
            return response()->json(['error' => 'Student not found'], 404);
        }
        return response()->json($secretaire);
    }




    public function update(Request $request, $id)
    {
        $secretaire = Secretaire::findOrFail($id);
    
    
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
            'cin' => 'required|max:255',
            'datedenaissance' => 'nullable|date',
            'mobile_number' => 'required|max:255',
            'address_line1' => 'required|max:255',
            'email' => 'required|email|max:255|unique:secretaires,email,' . $secretaire->id,
            'Country' => 'required|max:255',
            'Region' => 'required|max:255',
  
        ]);
    
        $secretaire->update($validatedData);
    
        return response()->json(['message' => 'Student updated successfully', 'secretaire' => $secretaire]);
    }
    
    
    
    

    
}
