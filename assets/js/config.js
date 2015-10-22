requirejs.config({
    paths: {
        chat: 'twbs_theme/js/chat',
        utils: 'twbs_theme/js/utils',
        websockets: 'websockets/js',
        autobahn: 'websockets/vendor/autobahn/autobahn',
        bootstrap: 'twbs_theme/vendor/bootstrap/dist/js/bootstrap',
        jquery: 'twbs_theme/vendor/jquery/dist/jquery',
        fontawesome: 'twbs_theme/vendor/fontawesome/fonts/*',
        react: 'twbs_theme/vendor/react/react',
        selectize: 'twbs_theme/vendor/selectize/dist/js/selectize',
        microplugin: 'twbs_theme/vendor/microplugin/src/microplugin',
        sifter: 'twbs_theme/vendor/sifter/sifter'
    },
    shim: {
        bootstrap: [
            'jquery'
        ]
    },
    packages: [

    ]
});
