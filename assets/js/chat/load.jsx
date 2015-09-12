define(function(require) {

    var React = require('react');
    var ChatBox = require('chat/chatbox');

    React.render(
        <ChatBox id={1}/>,
        document.getElementById('example')
    );

});

