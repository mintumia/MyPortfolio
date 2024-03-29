<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about/{id?}/{params?}',function ($id="",$params=""){

    return Inertia::render('AboutPage',['org'=>['name'=>"Mintu Mia",'url'=>"OK"]]);

})->name('about');

Route::get('/service',function (){

    return Inertia::render('ServicePage');

})->name('service');

Route::get('/contactus',function (){
    return Inertia::render('ContactUs');
})->name('contact');

Route::get('/login',function (){
    return Inertia::render('LoginPage');
})->name('login');


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
