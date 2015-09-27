define(function(require) {

    var React = require('react');
    var $ = require('jquery');

    var Messages = React.createClass({

        render: function() {

            var messages = this.props.messages.map(function (message){
                 
                var name = message.user.first + ' ' + message.user.last;
                return(
                    <div className="message">
                        <div className="pull-left">
                            <img src="/messages/img/avatar.jpg" className="img-circle message-avatar" alt="{name}"/>
                        </div>
                        <div>
                            <span className="pull-right">{new Date(message.created).toDateString()}</span>
                            <p><a href="#">{name}</a></p>
                            {message.body}
                        </div>
                    </div>
                );
            });

            return (
                <div>{messages}</div>
            );
        }
    });

    return Messages;
});

