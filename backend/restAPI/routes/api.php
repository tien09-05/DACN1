<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/meal', 'MealController@meal');
Route::get('/meal/{id}', 'MealController@mealByID');
Route::post('/meal', 'MealController@mealSave');
Route::put('/meal/{meal}', 'MealController@mealUpdate');
Route::delete('/meal/{meal}', 'MealController@mealDelete');


Route::get('/user', 'UserController@user');
Route::get('/user/{id}', 'UserController@userByID');
Route::post('/user', 'UserController@userSave');
Route::put('/user/{user}', 'UserController@userUpdate');
Route::delete('/user/{user}', 'UserController@userDelete');
