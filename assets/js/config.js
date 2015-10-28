requirejs.config({
    paths: {
        autobahn: 'websockets/vendor/autobahn/autobahn',
        bootstrap: 'twbs_theme/vendor/bootstrap/dist/js/bootstrap',
        chat: 'twbs_theme/js/chat',
        fontawesome: 'twbs_theme/vendor/fontawesome/fonts/*',
        jquery: 'twbs_theme/vendor/jquery/dist/jquery',
        microplugin: 'twbs_theme/vendor/microplugin/src/microplugin',
        react: 'twbs_theme/vendor/react/react',
        selectize: 'twbs_theme/vendor/selectize/dist/js/selectize',
        sifter: 'twbs_theme/vendor/sifter/sifter',
        utils: 'twbs_theme/js/utils',
        websockets: 'websockets/js'
    },
    shim: {
        bootstrap: ['jquery']
    },
    packages: [

    ]
});
