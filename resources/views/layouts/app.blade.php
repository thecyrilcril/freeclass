<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"> --}}

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <style>
            body {
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
        <script src="{{ asset('js/dashboard.js') }}" defer></script>
        <script src="https://unpkg.com/moment"></script>
        <script src="https://cdn.jsdelivr.net/npm/pikaday@1.8.2/pikaday.min.js"></script>
    </head>
    <body class="font-sans antialiased">
        <div class="min-h-screen bg-gray-100">
            @include('layouts.navigation')

            <!-- Page Heading -->
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {{ $header }}
                </div>
            </header>

            <!-- Page Content -->
            <main>
                {{ $slot }}
            </main>
        </div>
{{--         <script>
            let fromPicker = new Pikaday({
                field: document.getElementById('from-datepicker'),
                minDate: new Date(2021, 01, 02),
                maxDate: new Date(),
            });
            let toPicker = new Pikaday({
                field: document.getElementById('to-datepicker'),
                minDate: new Date(2021, 01, 02),
                maxDate: new Date(),
            });
        </script> --}}
    </body>
</html>
