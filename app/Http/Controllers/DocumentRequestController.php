<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DocumentRequest;

class DocumentRequestController extends Controller
{
    public function index()
    {
        $documentRequests = DocumentRequest::with(['user', 'document'])
            ->where('status', 'pending')
            ->get();
    
        return response()->json($documentRequests);
    }


    
    public function find($id)
    {
        $documentRequests = DocumentRequest::with(['user', 'document'])
            ->where('user_id', $id)
            ->get();
    
        return response()->json($documentRequests);
    }
    
    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|integer',
            'document_id' => 'required|integer',
        ]);

        $req = DocumentRequest::create($validatedData);

        return response()->json([
            'success' => true
        ]);
    }




    public function validateDocument(Request $request, $id)
    {
        // Find the document request by ID
        $documentRequest = DocumentRequest::find($id);

        if (!$documentRequest) {
            return response()->json(['message' => 'Document request not found'], 404);
        }

        // Update the status to 'validé'
        $documentRequest->status = 'accepted';
        $documentRequest->save();

        return response()->json(['message' => 'Document request validated']);
    }


    public function rejectDocument(Request $request, $id)
    {
        // Find the document request by ID
        $documentRequest = DocumentRequest::find($id);

        if (!$documentRequest) {
            return response()->json(['message' => 'Document request not found'], 404);
        }

        // Update the status to 'validé'
        $documentRequest->status = 'rejected';
        $documentRequest->save();

        return response()->json(['message' => 'Document request rejected']);
    }










}
