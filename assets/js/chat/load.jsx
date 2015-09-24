define(function(require) {

    var React = require('react');
    var Thread = require('chat/thread');
    var Summary = require('chat/summary');

    // components
    var thread = document.getElementById('thread');
    var summary = document.getElementById('summary');


    // initial data
    var threadId = thread.getAttribute('data-thread-id');
    var users = thread.getAttribute('data-thread-users');
    var title = thread.getAttribute('data-thread-title');

    React.render(
        <Thread id={threadId} title={title} users={users}/>,
        thread
    );
    React.render(<Summary/>, summary);

});

