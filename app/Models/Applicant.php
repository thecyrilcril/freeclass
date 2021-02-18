<?php

namespace App\Models;

use Sofa\Eloquence\Eloquence;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use \Carbon\Carbon;

class Applicant extends Model
{
    use Eloquence, Notifiable, HasFactory;

    protected $guarded = [];

    protected $searchableColumns = [
        'first_name',
        'last_name',
        'gender' => 8, //8
        'email',
        'phone_number',
        'stay_in_ilorin' => 10,
        'experience' => 10, //10
        'is_accepted' => 10,
        'channel',
    ];

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
