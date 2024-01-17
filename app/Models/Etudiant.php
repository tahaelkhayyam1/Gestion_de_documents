<?php

 namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Etudiant extends Model
{
    use HasFactory;
    use HasApiTokens;

    protected $fillable = [
        'name', 'surname', 'cin', 'datedenaissance', 'mobile_number',
        'address_line1', 'address_line2', 'email','password', 'filliere', 'annee',
        'Country', 'Region', 'paiement_status'
    ];
}
