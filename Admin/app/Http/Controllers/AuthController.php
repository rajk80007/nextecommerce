<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request){
        
        $data = new User();
        $data->name = $request->name;
        $data->email = $request->email;
        $data->password = bcrypt($request->password);
        $data->save();
        $token = $data->createToken('auth_token')->plainTextToken;
        return(
            [
                'message' => 'Successfully Registered',
                'data' => $data,
                'token' => $token,
                'status' => 'success'
            ]
        ) 
        ;
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        if(!auth()->attempt($credentials))
        {

            return (['message' => 'You have entered incorrect Email or Password. Please try again with valid credentials',
            'status' => 401,]);
        }
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response([
            'token' => $token,
            'user' => $user
        ]);

        
       
    }
}
