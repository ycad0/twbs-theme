define(function(require) {

    var React = require('react');

    var Heading = React.createClass({

        render: function() {
            return (
                <h2> 
                    {this.props.users.join(", ")} <small>{this.props.title}</small>
                </h2>
            );
        }
    });

    return Heading;
});
