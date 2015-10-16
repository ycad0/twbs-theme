define(function(require) {

    var React = require('react');
    var Messages = require('chat/messages');
    var NewThread = require('chat/newThread');
    var Heading = require('chat/heading');
    var Compose = require('chat/compose');
    var CommunicationMixin = require('websockets/mixin');

    var Thread = React.createClass({

        mixins: [CommunicationMixin],

        fetchUrl: "/messages/threads/view.json",
        sendUrl:  "/messages/messages/add.json",
        recieveUri: "messages.add",

        getInitialState: function() {
            return {
                title: this.props.title,
                users: [this.props.users],
                messages: []
            };
        },

        fetched: function(data) {
            if (data['thread'] === null) {
                return;
            }
            var users = [];
            data['thread']['users'].forEach(function(user){
                users.push(user.username);
            });

            this.setState({
                id: data['thread']['id'],
                title: data['thread']['title'],
                users: users,
                messages: data['messages']
            });
        },

        recieved: function(data) {
            this.state.messages.push(data);
            this.setState({messages: this.state.messages});
        },

        render: function() {
            var body;
            if (typeof this.state.id == 'undefined') {
                var body = <NewThread/>;
            } else {
                var body = <Messages messages={this.state.messages}/>;
            }
            return (
                <div>
                    <Heading title={this.state.title} users={this.state.users}/>
                    <hr/>
                    {body}
                    <Compose submit={this.send} thread_id={this.state.id}/>
                </div>
            );
        }
    });

    return Thread;
});

