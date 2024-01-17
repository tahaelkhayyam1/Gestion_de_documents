<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class Secretaire extends Model
{ 
       use HasApiTokens;
    use HasFactory;
    protected $fillable = [
        'name', 'surname', 'cin', 'datedenaissance', 'mobile_number',
        'address_line1', 'email','password',
        'Country', 'Region'
    ];

}
