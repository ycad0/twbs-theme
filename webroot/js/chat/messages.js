define(["require","react","jquery"],function(e){var t=e("react"),n=e("jquery"),r=t.createClass({displayName:"Messages",render:function(){var n=this.props.messages.map(function(e){return t.createElement("div",{className:"message",key:e.id},t.createElement("div",{className:"pull-left"},t.createElement("img",{src:"/TwbsTheme/img/avatar.jpg",className:"img-circle message-avatar",alt:e.user.username})),t.createElement("div",null,t.createElement("span",{className:"pull-right"},(new Date(e.created)).toDateString()),t.createElement("p",null,t.createElement("a",{href:"#"},e.user.username)),e.body))});return t.createElement("div",null,n)}});return r});