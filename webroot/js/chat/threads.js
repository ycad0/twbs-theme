define(["require","react","jquery"],function(e){var t=e("react"),n=e("jquery"),r=t.createClass({displayName:"Threads",render:function(){var n=this.props.threads.map(function(e){var n=[];e.users.forEach(function(e){n.push(e.username)});var r="/threads/index/"+e.id;return t.createElement("div",{className:"panel panel-default"},t.createElement("div",{className:"panel-heading"},t.createElement("span",{className:"pull-right"},t.createElement("i",{className:"fa fa-times"})),(new Date(e.modified)).toDateString()),t.createElement("div",{className:"panel-body"},t.createElement("div",{className:"row"},t.createElement("div",{className:"col-md-3 text-center"},t.createElement("img",{src:"/TwbsTheme/img/avatar.jpg",className:"img-circle img-responsive center-block"}),t.createElement("a",{href:r},"View")),t.createElement("div",{className:"col-md-9"},n,t.createElement("p",null,e._matchingData.Messages.body)))))});return t.createElement("div",null,n)}});return r});