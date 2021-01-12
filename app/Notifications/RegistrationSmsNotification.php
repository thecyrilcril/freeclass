<?php

namespace App\Notifications;

use App\Models\Applicant;
use App\Channels\SMSChannel;
use Illuminate\Bus\Queueable;
use App\Channels\Messages\SMSMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
// use Illuminate\Notifications\Messages\MailMessage;

class RegistrationSmsNotification extends Notification implements ShouldQueue
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
     * @return SMS
     */
    public function toSMS($notifiable)
    {
        $recipient = ucfirst($this->applicant->first_name);
        $message = "Welcome $recipient, Thanks for taking time to register. I am so excited to see you in class. Please bear in mind that this is a real life training that happens in batches, as such we have very limited slots and there is a screening process. You will be contacted if you are selected\r\nGood luck!";
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
