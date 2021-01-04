<?php

namespace App\Channels;

use Illuminate\Support\Facades\Http;
use Illuminate\Notifications\Notification;

class SMSChannel
{
    /**
     * Send the given notification.
     *
     * @param  mixed  $notifiable
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return void
     */
    public function send($notifiable, Notification $notification)
    {
        $message = $notification->toSMS($notifiable);

        $to = $notifiable->routeNotificationFor('Applicant');
        $from = config('sms.kudisms.from');


        // Http::fake();
        $response = Http::retry(3, 1000)->asForm()->post(config('sms.kudisms.api_url'), [
            'username' => config('sms.kudisms.username'),
            'password' => config('sms.kudisms.password'),
            'message' => $message->content,
            'sender' => $from,
            'mobiles' => $to,
        ]);

        // Send notification to the $notifiable instance...
    }
}
