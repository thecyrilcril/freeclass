<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $title ?? 'Dashboard' }}</title>
    <meta name="description" content="{{ $description ?? 'Free Class Dashboard'}}">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <style>
        body: {
            font-family: 'Commissioner', 'sans-serif';
        }
        .swal-title {
            letter-spacing: 0.01rem;
            font-weight: 400;
        }
        .swal-loader {
            background: '#F87171';
        }
        .swal-container {
            box-shadow: none;
        }

    </style>

    <!-- Scripts -->
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
  </head>
  <body>
    @inertia
  </body>
</html>
