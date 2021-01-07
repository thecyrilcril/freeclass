<?php

namespace App\Notifications;

use App\Models\Applicant;
use App\Channels\SMSChannel;
use Illuminate\Bus\Queueable;
use App\Channels\Messages\SMSMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
// use Illuminate\Notifications\Messages\MailMessage;

class ApprovalSmsNotification extends Notification implements ShouldQueue
{
    public $applicant;

    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Applicant $applicant)
    {
        //
        $this->applicant = $applicant;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [SMSChannel::class];
    }

    /**
     * Determine which queues should be used for each notification channel.
     *
     * @return array
     */
    public function viaQueues()
    {
        return [
            SMSChannel::class => 'sms-queue',
        ];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toSMS($notifiable)
    {
        $recipient = ucfirst($this->applicant->first_name);
        $message = 'Congratulations ' . $recipient . ', You have been selected to participate in our free pattern drafting training. Please check your email for futher instructions. We are fired up to meet you in class!';
        return (new SMSMessage)
            ->content($message);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
