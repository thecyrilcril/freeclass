<?php

use App\Models\Applicant;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicantsController;
use App\Notifications\ApprovalEmailNotification;
use App\Notifications\RegistrationEmailNotification;

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


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

// Route::get('applicants', function () {
//     return view('applicants');
// })->middleware(['auth'])->name('applicants');

Route::get('/', [ApplicantsController::class, 'home'])->name('applicants.home');
Route::get('/applicants', [ApplicantsController::class, 'index'])->middleware(['auth'])->name('applicants.index');
Route::get('apply', [ApplicantsController::class, 'create'])->name('applicants.create');
Route::post('/', [ApplicantsController::class, 'store'])->name('applicants.store');
Route::patch('/{applicant}', [ApplicantsController::class, 'update'])->name('applicants.update');

// Search endpoints
// Route::get('/s/{query?}', [ApplicantsController::class, 'search']);
Route::get('/s', [ApplicantsController::class, 'search']);
// Route::get('/?s={query?}', [ApplicantsController::class, 'search']);
// ->middleware(['auth'])->name('applicants.search');

Route::get('/notification', function () {
    $applicant = Applicant::find(1);

    return (new RegistrationEmailNotification($applicant))
                ->toMail($applicant->first_name);
});

Route::get('/notification2', function () {
    $applicant = Applicant::find(146);

    return (new ApprovalEmailNotification($applicant))
                ->toMail($applicant->first_name);
});


require __DIR__.'/auth.php';
