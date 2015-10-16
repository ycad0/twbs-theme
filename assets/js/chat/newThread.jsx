define(function(require) {

    var React = require('react');
    var $ = require('jquery');
    var Autocomplete = require('utils/autocomplete');

    var NewThread = React.createClass({
        componentDidMount: function() {
            autocomplete = new Autocomplete();
            console.log($('#test'));
        },
        render: function() {
            return (
                <div className="message">
                </div>
            );
        }
    });

    return NewThread;
});

