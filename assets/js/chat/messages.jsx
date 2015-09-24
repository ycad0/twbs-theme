define(function(require) {

    var React = require('react');
    var $ = require('jquery');

    var Messages = React.createClass({

        render: function() {

            var messages = this.props.messages.map(function (message){
                 
                // message {
                //     margin: 30px 0;
                // }
                //
                // message-avatar {
                //     style="margin: 0 10px;"
                // }
                //
                // message-avatar {
                //     style="margin: 0 10px;"
                // }
                
                return(
                    <div className="message">
                        <div className="pull-left">
                            <img src="/messages/img/avatar.jpg" className="img-circle message-avatar" alt="John Doe"/>
                        </div>
                        <div>
                            <span className="pull-right">{new Date(message.created).toDateString()}</span>
                            <p><a href="#">{message.user.first + ' ' + message.user.last}</a></p>
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

