define(function(require) {

    var React = require('react');
    var Threads = require('chat/threads');
    var CommunicationMixin = require('websockets/mixin');

    var Summary = React.createClass({

        mixins: [CommunicationMixin],

        fetchUrl: "/messages/threads/summary.json",
        //sendUrl:  "/messages/messages/add.json",
        //recieveUri: "messages.send",

        getInitialState: function() {
            return {
                threads: []
            };
        },

        fetched: function(data) {
            this.setState({
                threads: data['threads']
            });
        },

        //recieved: function(data){
        //    this.state.messages.push(data);
        //    this.setState({messages: this.state.messages});
        //},

        render: function() {
            return (
                <div>
                    <Threads threads={this.state.threads}/>
                </div>
            );
        }
    });

    return Summary;
});
