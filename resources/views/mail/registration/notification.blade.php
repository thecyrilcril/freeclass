@component('mail::message')
# Hi {{ $first_name }},

Thank you for registering for our free Pattern drafting class.\
I am so excited😁😁 to introduce you to the\
*Foundations of Modern Fashion design* and also meet you __in real life__.

I have a lot of valuable information and techniques to share with you!!!

@component('mail::subcopy')
__Important!__\
Because this class is hands-on, there are few slots available and there is a selection process. You will be contacted if selected.

@endcomponent

\
Good luck,<br><br>
<img src="https://imageclothia.com/images/Kehinde-oni-avatar.png" alt="Kehinde Oni" title="Kehinde Oni, Creative Director, Image Clothia Innovations" width="90"><br>
**Kehinde Oni.**<br>
Creative Director,<br>
{{ config('app.name') }} Innovations.
@endcomponent
