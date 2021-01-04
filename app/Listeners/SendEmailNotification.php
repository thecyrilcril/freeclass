<?php

namespace App\Listeners;

use App\Events\ApplicantRegistered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\RegistrationEmailNotification;

class SendEmailNotification implements ShouldQueue
{
    // public $queue = 'listeners';

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ApplicantRegistered  $event
     * @return void
     */
    public function handle(ApplicantRegistered $event)
    {
        $event->applicant->notify(new RegistrationEmailNotification($event->applicant));
    }
}
