define(function(require) {

    var React = require('react');
    var Messages = require('chat/messages');
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

            var users = [];
            data['thread']['users'].forEach(function(user){
                users.push(user.first + " " + user.last);
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

            return (
                <div>
                    <Heading title={this.state.title} users={this.state.users}/>
                    <hr/>
                    <Messages messages={this.state.messages}/>
                    <Compose submit={this.send} thread_id={this.state.id}/>
                </div>
            );
        }
    });

    return Thread;
});

