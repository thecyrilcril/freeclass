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
        $message = "Congratulations $recipient, You have been selected to participate in Batch #C of  our free pattern drafting training which starts on Feb. 15, 2021 by 9AM at No.3, Commissioner lodge way, GRA beside Timbola Hotel.\r\nIf you have trouble finding the venue, call 09070895516.\r\nCheck your email for further instructions. We are fired up to meet you in class!\r\n\r\nN.B: If you are not in Ilorin or you won't be able to attend this training at this time, kindly notify us as soon as you get this message via 09070895516.";
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
