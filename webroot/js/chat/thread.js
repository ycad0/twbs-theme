define(["require","react","chat/messages","chat/heading","chat/compose","websockets/mixin"],function(e){var t=e("react"),n=e("chat/messages"),r=e("chat/heading"),i=e("chat/compose"),s=e("websockets/mixin"),o=t.createClass({displayName:"Thread",mixins:[s],fetchUrl:"/messages/threads/view.json",sendUrl:"/messages/messages/add.json",recieveUri:"messages.add",getInitialState:function(){return{title:this.props.title,users:[this.props.users],messages:[]}},fetched:function(t){var n=[];t.thread.users.forEach(function(e){n.push(e.username)}),this.setState({id:t.thread.id,title:t.thread.title,users:n,messages:t.messages})},recieved:function(t){this.state.messages.push(t),this.setState({messages:this.state.messages})},render:function(){return t.createElement("div",null,t.createElement(r,{title:this.state.title,users:this.state.users}),t.createElement("hr",null),t.createElement(n,{messages:this.state.messages}),t.createElement(i,{submit:this.send,thread_id:this.state.id}))}});return o});