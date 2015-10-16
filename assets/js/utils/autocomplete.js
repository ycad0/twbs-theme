define(function(require) {

    var $ = require('jquery');
    var selectize = require('selectize');

    function Autocomplete() {
        $('#test').selectize({
            valueField: 'id',
            labelField: 'username',
            searchField: ['username'],
            maxOptions: 10,
            options: [],
            create: false,
            render: {
                option: function (item, escape) {
                    return '<div>' + escape(item.username) + '</div>';
                }
            },
            load: function (query, callback) {
                var data = {};
                console.log(query);
                $.ajax({
                    url: '/api/users.json',
                    dataType: 'json',
                    data: data,
                    error: function() {
                        console.log('fail');
                        callback();
                    },
                    success: function(res) {
                        console.log(res.data);
                        callback(res.data);
                    }
                });
            },
        });
    };

    return Autocomplete;
});

