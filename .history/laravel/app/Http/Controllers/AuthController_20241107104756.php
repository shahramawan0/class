<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function register(Request $request) { $validator = Validator::make($request->all(), [ 'name' => 'required|string|max:255', 'email' => 'required|string|email|max:255|unique:users', 'password' => 'required|string|min:8|confirmed', ]); if ($validator->fails()) { return response()->json(['errors' => $validator->errors()], 422); } $user = User::create([ 'name' => $request->name, 'email' => $request->email, 'password' => Hash::make($request->password), ]); return response()->json(['user' => $user, 'message' => 'User registered successfully.'], 201);
}
