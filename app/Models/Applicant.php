<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use \Carbon\Carbon;

class Applicant extends Model
{
    use Notifiable, HasFactory;
    protected $guarded = [];

    public function routeNotificationForApplicant()
    {
        return $this->phone_number;
    }

    /**
     * Route notifications for the mail channel.
     *
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return array|string
     */
    public function routeNotificationForMail($notification)
    {
        // Return email address and name...
        return [$this->email => $this->first_name];
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('jS F, Y');
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('jS F, Y');
    }
}
