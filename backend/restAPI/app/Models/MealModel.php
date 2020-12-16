<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealModel extends Model
{
    use HasFactory;
    protected $table = "meals";
    public $timestamps = false;
    protected $fillable = [
        "id",
        "name",
        "price",
        "photo",
        "created_at",
        "updated_at"
    ];
}
