<?php

namespace App\Listeners;

use App\Events\ApplicantApproved;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\ApprovalEmailNotification;

class SendApprovalEmailNotification implements ShouldQueue
{
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
     * @param  ApplicantApproved  $event
     * @return void
     */
    public function handle(ApplicantApproved $event)
    {
        $event->applicant->notify(new ApprovalEmailNotification($event->applicant));
    }
}
