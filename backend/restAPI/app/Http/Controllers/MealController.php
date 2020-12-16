<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MealModel;

class MealController extends Controller
{
    public function meal()
    {
        return response()->json(MealModel::get(), 200);
    }
    public function mealByID($id)
    {
        return response()->json(MealModel::find($id), 200);
    }
    public function mealSave(Request $request)
    {
        $meal = MealModel::create($request->all());
        return response()->json($meal, 201);
    }
    public function mealUpdate(Request $request, MealModel $meal)
    {
        $meal->update($request->all());
        return response()->json($meal, 200);
    }
    public function mealDelete(Request $request, MealModel $meal)
    {
        $meal->delete($request->all());
        return response()->json(null, 204);
    }
}
