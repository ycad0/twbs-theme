define(function(require) {

    var React = require('react');
    var $ = require('jquery');

    var Threads = React.createClass({

        render: function() {

            var threads = this.props.threads.map(function (thread){
                 
                var users = [];
                thread['users'].forEach(function(user){
                    users.push(user.first + " " + user.last);
                });
                return(
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <span className="pull-right"><i className="fa fa-times"></i></span>
                            {new Date(thread.modified).toDateString()}
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-3 text-center">
                                    <img src="/messages/img/avatar.jpg" className="img-circle img-responsive center-block"/>
                                    <a href="#">View</a>
                                </div>
                                <div className="col-md-9">
                                    {users}
                                    <p>{thread['_matchingData']['Messages']['body']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });

            return (
                <div>{threads}</div>
            );
        }
    });

    return Threads;
});

