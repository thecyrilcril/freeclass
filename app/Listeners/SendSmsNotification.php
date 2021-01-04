<?php

namespace App\Listeners;

use App\Events\ApplicantRegistered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\RegistrationSmsNotification;

class SendSmsNotification implements ShouldQueue
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
        $event->applicant->notify(new RegistrationSmsNotification($event->applicant));
    }
}
