define(function(require) {

    var React = require('react');
    var Summary = require('chat/summary');

    var summary = document.getElementById('summary');

    React.render(<Summary/>, summary);
});

