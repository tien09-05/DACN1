<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;

class UserController extends Controller
{
    public function user()
    {
        return response()->json(UserModel::get(), 200);
    }
    public function userByID($id)
    {
        return response()->json(UserModel::find($id), 200);
    }
    public function userSave(Request $request)
    {
        $user = UserModel::create($request->all());
        return response()->json($user, 201);
    }
    public function userUpdate(Request $request, UserModel $user)
    {
        $user->update($request->all());
        return response()->json($user, 200);
    }
    public function userDelete(Request $request, UserModel $user)
    {
        $user->delete($request->all());
        return response()->json(null, 204);
    }
}
