define(function(require) {

    var React = require('react');
    var Threads = require('chat/threads');
    var CommunicationMixin = require('websockets/mixin');

    var Summary = React.createClass({

        mixins: [CommunicationMixin],

        fetchUrl: "/api/threads/index",
        //recieveUri: "threads.add",

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

        recieved: function(data){
            this.setState({
                threads: data['threads']
            });
        },

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
