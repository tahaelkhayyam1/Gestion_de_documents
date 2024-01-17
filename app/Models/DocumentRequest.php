<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DocumentRequest extends Model
{
    protected $table = 'document_requests';

    protected $fillable = [
        'id',
        'user_id',
        'document_id',
        'created_at',
        'updated_at',
    ];

    public function user()
{
    return $this->belongsTo(User::class, 'user_id');
}
public function document()
{
    return $this->belongsTo(Document::class, 'document_id');
}

}
