define(function(require) {

    var React = require('react');

    var Compose = React.createClass({

        submit: function(e){
            e.preventDefault();
            var body = React.findDOMNode(this.refs.body).value.trim();
            if (!body) {
                return;
            }
            this.props.submit({
                thread_id: this.props.thread_id,
                body: body
            });

            React.findDOMNode(this.refs.body).value = '';
        },

        render: function() {
            return (
                <form onSubmit={this.submit}>
                    <div className="input-group">
                        <input type="text" className="form-control" ref="body" placeholder="Type your message here..." />
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-default">Send</button>
                        </div>
                    </div>
                </form>
            );
        }

    });

    return Compose;
});

