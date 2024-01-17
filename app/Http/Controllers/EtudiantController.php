<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etudiant;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash; // Make sure to include the Hash facade

class EtudiantController extends Controller
{
  

    public function index()
    {
        $etudiants = Etudiant::all();
        return response()->json($etudiants);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
            'cin' => 'required|max:255',
            'datedenaissance' => 'nullable|date',
            'mobile_number' => 'required|max:255',
            'address_line1' => 'required|max:255',
            'address_line2' => 'nullable|max:255',
            'email' => 'required|email|max:255|unique:etudiants',
            'filliere' => 'required|max:255',
            'annee' => 'required|integer',
            'Country' => 'required|max:255',
            'Region' => 'required|max:255',
            'paiement_status' => 'required|integer'
        ]);
    
        // Set the default password
        $validatedData['password'] = Hash::make('Upf2024');
    
        // Create the Etudiant with the validated data
        $etudiant = Etudiant::create($validatedData);
    
        session()->flash('success', 'Etudiant added successfully.');
    
        return response()->json([
            'success' => true,
            'redirectPath' => '/admin/ListeEtudiants'
        ]);
    }



    public function destroy($id)
    {
        $etudiant = Etudiant::findOrFail($id);
        $etudiant->delete();

        return response()->json(['message' => 'Student successfully deleted']);
    }




// In EtudiantController
public function show($id)
{
    $etudiant = Etudiant::find($id);
    if (!$etudiant) {
        return response()->json(['error' => 'Student not found'], 404);
    }
    return response()->json($etudiant);
}





public function update(Request $request, $id)
{
    $etudiant = Etudiant::findOrFail($id);


    $validatedData = $request->validate([
        'name' => 'required|max:255',
        'surname' => 'required|max:255',
        'cin' => 'required|max:255',
        'datedenaissance' => 'nullable|date',
        'mobile_number' => 'required|max:255',
        'address_line1' => 'required|max:255',
        'address_line2' => 'nullable|max:255',
        'email' => 'required|email|max:255|unique:etudiants,email,' . $etudiant->id,
        'filliere' => 'required|max:255',
        'annee' => 'required|integer',
        'Country' => 'required|max:255',
        'Region' => 'required|max:255',
        'paiement_status' => 'required|integer'
    ]);

    $etudiant->update($validatedData);

    return response()->json(['message' => 'Student updated successfully', 'etudiant' => $etudiant]);
}





}
