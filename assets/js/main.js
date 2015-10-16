requirejs.config({
    paths: {
        websockets: '../../websockets/js',
        autobahn: '../../websockets/vendor/autobahn/autobahn',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap',
        jquery: '../vendor/jquery/dist/jquery',
        fontawesome: '../vendor/fontawesome/fonts/*',
        react: '../vendor/react/react',
        selectize: '../vendor/selectize/dist/js/selectize',
        microplugin: '../vendor/microplugin/src/microplugin',
        sifter: '../vendor/sifter/sifter'
    },
    shim: {
        bootstrap: [
            'jquery'
        ]
    },
    packages: [

    ]
});
