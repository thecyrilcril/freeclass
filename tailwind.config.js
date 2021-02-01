const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
      purgeLayersByDefault: true,
    },
    purge: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        ],

    theme: {
        extend: {
            fontFamily: {
                'sans': ['Commissioner', ...defaultTheme.fontFamily.sans],
                'spectral-sc': ['Spectral sc', 'serif'],
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/forms'),
    ],
};
