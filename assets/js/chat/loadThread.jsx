define(function(require) {

    var React = require('react');
    var Thread = require('chat/thread');

    // components
    var thread = document.getElementById('thread');

    if (thread) {

        var threadId = thread.getAttribute('data-thread-id');
        var users = thread.getAttribute('data-thread-users');
        var title = thread.getAttribute('data-thread-title');

        React.render(
            <Thread id={threadId} title={title} users={users}/>,
            thread
        );
    }
});

