<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Applicant;
use Illuminate\Http\Request;
use App\Events\ApplicantRegistered;
use App\Http\Requests\ApplicantRequest;
use Illuminate\Support\Facades\Redirect;

class ApplicantsController extends Controller
{
    /**
     * [home loads the homepage]
     * @return [type] [returns the Home component]
     */
    public function home()
    {
        return Inertia::render('Applications/Home')
        ->withViewData([
            'title' => 'Free Pattern Drafting Training',
            'description' => 'Register for Image Clothia Innovations FREE pattern drafting training',
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $applicants = new Applicant();
        return response()->json([
            'status' => 'success',
            'applicants' =>  $applicants->select([
                'id',
                'first_name',
                'last_name',
                'gender',
                'email',
                'phone_number',
                'stay_in_ilorin',
                'experience',
                'channel',
            ])->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Applications/Register')
        ->withViewData([
            'title' => 'Free Pattern Drafting Training',
            'description' => 'Register for Image Clothia Innovations FREE pattern drafting training',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApplicantRequest $request)
    {
        try {
            $applicant = Applicant::create($request->validated());

            event(new ApplicantRegistered($applicant));

            // Manually works
            // $request->session()->put('message', ucfirst($applicant->first_name) .', you are registered!');

            // withFlash method doesn't work
            // return Redirect::route('applicants.create')->withFlash([
            //     'message' => ucfirst($applicant->first_name) .', you are registered!',
            // ]);

            // with method works
            // return Redirect::route('applicants.create')->with('message', ucfirst($applicant->first_name) .', you are registered!');

            $request->session()->flash(
                'message',
                ucfirst($applicant->first_name) .', you are registered!'
            );

            return Redirect::route('applicants.create');



        } catch( \Exception $e ) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        } catch( \Error $e ) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function show(Applicant $applicant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function edit(Applicant $applicant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Applicant $applicant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Applicant $applicant)
    {
        //
    }
}
