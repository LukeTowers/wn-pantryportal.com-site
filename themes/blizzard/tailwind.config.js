module.exports = {
    content: [
        './theme.yaml',
        './**/*.htm',
        './assets/src/js/**/*.{js,vue}'
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                navy: {
                    darker: '#051016',
                    dark: '#081821',
                    DEFAULT: '#103141',
                    light: '#184962',
                },
                blue: {
                    dark: '#227F96',
                    DEFAULT: '#2DA7C7',
                    light: '#48B9D5',
                },
            },
        },
    },
    plugins: [
    ],
}
