<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Document;

class DocumentController extends Controller
{
    // Method to retrieve documents
    public function index()
    {
        $documents = Document::all(); // Retrieve all documents
        return response()->json($documents); // Return documents as JSON
    }

    // Method to validate a document
    public function validateDocument(Document $document)
    {
        // Ensure only admins can access this
        // You'll need to add your own authorization logic here

        $document->is_validated = true; // Update the document's validation status
        $document->save(); // Save the updated document

        return response()->json($document); // Return the updated document
    }
}

