webpackJsonp([24],{1858:function(e,t,l){try{(function(){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{actions:(0,m.bindActionCreators)(E,e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},i=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),d=function(e,t,l){for(var a=!0;a;){var n=e,r=t,u=l;a=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,r);if(void 0!==s){if("value"in s)return s.value;var o=s.get;if(void 0===o)return;return o.call(u)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,t=r,l=u,a=!0,s=i=void 0}},c=l(1),f=n(c),p=l(40),m=l(41),y=l(1914),E=a(y),h=l(1859),v=function(e){function t(e){r(this,l),d(Object.getPrototypeOf(l.prototype),"constructor",this).call(this,e),this.pid=""}u(t,e),i(t,[{key:"index",value:function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.props.actions.index(this.pid));case 2:return e.abrupt("return",this.props.summary.ecode);case 3:case"end":return e.stop()}},null,this)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.actions,l=e.params.key;t.index(l),this.pid=l}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.actions,l=e.params.key;l!==this.pid&&(t.index(l),this.pid=l)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(h,o({index:this.index.bind(this),project:this.props.project.item},this.props.summary)))}}],[{key:"propTypes",value:{actions:c.PropTypes.object.isRequired,location:c.PropTypes.object.isRequired,params:c.PropTypes.object.isRequired,project:c.PropTypes.object.isRequired,summary:c.PropTypes.object.isRequired},enumerable:!0}]);var l=t;return t=(0,p.connect)(function(e){var t=e.project,l=e.summary;return{project:t,summary:l}},s)(t)||t}(c.Component);t.default=v,e.exports=t.default}).call(this)}finally{}},1859:function(e,t,l){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),s=function(e,t,l){for(var a=!0;a;){var n=e,r=t,u=l;a=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,r);if(void 0!==s){if("value"in s)return s.value;var o=s.get;if(void 0===o)return;return o.call(u)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,t=r,l=u,a=!0,s=i=void 0}},o=l(1),i=a(o),d=l(67),c=l(3),f=(l(6),l(4)),p=a(f),m=l(5),y=function(e){function t(e){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={pulseShowModel:"percentage",assigneeShowModel:"percentage",priorityShowModel:"percentage",moduleShowModel:"percentage"}}return r(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props,l=t.project,a=t.data,n=t.options,r=t.loading,u={marginRight:"50px"};return r?i.default.createElement("div",{style:{marginTop:"20px"}},i.default.createElement("div",{className:"detail-view-blanket",style:{display:r?"block":"none"}},i.default.createElement("img",{src:m,className:"loading"}))):i.default.createElement("div",{style:{marginTop:"20px",marginBottom:"30px"}},i.default.createElement("div",{style:{marginBottom:"15px"}},i.default.createElement("span",{style:{fontSize:"19px"}},l.name||"-"),i.default.createElement("span",{style:{marginLeft:"15px",fontSize:"14px"}},"键值：",l.key||"-"),i.default.createElement("span",{style:{marginLeft:"15px",fontSize:"14px"}},"负责人：",l.principal&&l.principal.name||"-"),i.default.createElement("span",{style:{marginLeft:"15px",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis"}},"备注：",l.description||"-")),i.default.createElement("div",{style:{paddingLeft:"5px",marginBottom:"20px"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue"},i.default.createElement("span",{style:u},"全部问题")),i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved"},i.default.createElement("span",{style:u},"未解决的")),i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?assignee=me"},i.default.createElement("span",{style:u},"分配给我的")),i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?reporter=me"},i.default.createElement("span",{style:u},"我报告的")),i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?watcher=me"},i.default.createElement("span",{style:u},"我关注的")),i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?created_at=2w"},i.default.createElement("span",{style:u},"最近增加的")),i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?updated_at=2w"},i.default.createElement("span",{style:u},"最近更新的"))),i.default.createElement(c.Panel,{header:i.default.createElement("div",null,i.default.createElement("span",null,"一周动态："+(n.weekAgo||"")+" ~ 现在"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({pulseShowModel:"detail"==e.state.pulseShowModel?"percentage":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},a.new_issues&&a.new_issues.total?i.default.createElement(c.Table,{responsive:!0,hover:!0},"detail"==this.state.pulseShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"类别"),i.default.createElement("th",null,"问题"),p.default.map(n.types||[],function(e){return i.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.pulseShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"类别"),i.default.createElement("th",null,"问题"))),"detail"==this.state.pulseShowModel&&i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?created_at=1w"},"新建问题")),i.default.createElement("td",{style:{width:"10%"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?created_at=1w"},a.new_issues&&a.new_issues.total||0)),p.default.map(n.types||[],function(e){return i.default.createElement("td",{key:e.id},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?type="+e.id+"&created_at=1w"},a.new_issues&&a.new_issues[e.id]||0))})),i.default.createElement("tr",null,i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?state=Closed&updated_at=1w"},"关闭问题")),i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?state=Closed&updated_at=1w"},a.closed_issues&&a.closed_issues.total||0)),p.default.map(n.types||[],function(e){return i.default.createElement("td",{key:e.id},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?type="+e.id+"&state=Closed&updated_at=1w"},a.closed_issues&&a.closed_issues[e.id]||0))}))),"percentage"==this.state.pulseShowModel&&i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?created_at=1w"},"新建问题")),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"90%"}},i.default.createElement("tr",null,i.default.createElement("td",{style:{width:a.new_issues.percent+"%"}},i.default.createElement("div",{className:"green-bar"})),i.default.createElement("td",{style:{width:100-a.new_issues.percent+"%",paddingLeft:"10px"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?created_at=1w"},a.new_issues&&a.new_issues.total||0)))))),i.default.createElement("tr",null,i.default.createElement("td",null,i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?state=Closed&updated_at=1w"},"关闭问题")),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"90%"}},i.default.createElement("tr",null,i.default.createElement("td",{style:{width:a.closed_issues.percent+"%"}},i.default.createElement("div",{className:"red-bar"})),i.default.createElement("td",{style:{width:100-a.closed_issues.percent+"%",paddingLeft:a.closed_issues.percent?"10px":"0px"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?state=Closed&updated_at=1w"},a.closed_issues&&a.closed_issues.total||0)))))))):i.default.createElement("div",null,"暂无信息")),i.default.createElement(c.Panel,{header:i.default.createElement("div",null,i.default.createElement("span",null,"未解决问题：按经办人"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({assigneeShowModel:"detail"==e.state.assigneeShowModel?"percentage":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},a.assignee_unresolved_issues&&!p.default.isEmpty(a.assignee_unresolved_issues)?i.default.createElement(c.Table,{responsive:!0,hover:!0},"detail"==this.state.assigneeShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"经办人"),i.default.createElement("th",null,"问题"),p.default.map(n.types||[],function(e){return i.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.assigneeShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"经办人"),i.default.createElement("th",null,"问题"),i.default.createElement("th",null,"百分比"))),"detail"==this.state.assigneeShowModel&&i.default.createElement("tbody",null,p.default.map(a.assignee_unresolved_issues,function(e,t){return i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&assignee="+t},n.users&&n.users[t]||"")),i.default.createElement("td",{style:{width:"10%"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&assignee="+t},e.total||0)),p.default.map(n.types||[],function(a){return i.default.createElement("td",{key:a.id},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&type="+a.id+"&assignee="+t},e[a.id]||0))}))})),"percentage"==this.state.assigneeShowModel&&i.default.createElement("tbody",null,p.default.map(a.assignee_unresolved_issues,function(e,t){return i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&assignee="+t},n.users&&n.users[t]||"")),i.default.createElement("td",{style:{width:"10%"}},i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&assignee="+t},e.total||0)),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"100%"}},i.default.createElement("tr",null,i.default.createElement("td",{style:{width:e.percent+"%"}},i.default.createElement("div",{className:"color-bar"})),i.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%")))))}))):i.default.createElement("div",null,"暂无信息")),i.default.createElement(c.Panel,{header:i.default.createElement("div",null,i.default.createElement("span",null,"未解决问题：按优先级"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({priorityShowModel:"detail"==e.state.priorityShowModel?"percentage":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},a.priority_unresolved_issues&&!p.default.isEmpty(a.priority_unresolved_issues)?i.default.createElement(c.Table,{responsive:!0,hover:!0},"detail"==this.state.priorityShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"优先级"),i.default.createElement("th",null,"问题"),p.default.map(n.types||[],function(e){return i.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.priorityShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"优先级"),i.default.createElement("th",null,"问题"),i.default.createElement("th",null,"百分比"))),"detail"==this.state.priorityShowModel&&i.default.createElement("tbody",null,p.default.map(a.priority_unresolved_issues,function(e,t){return i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},n.priorities&&n.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&priority="+t},n.priorities[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},n.priorities&&n.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&priority="+t},e.total||0):e.total||0),p.default.map(n.types||[],function(a){return i.default.createElement("td",{key:a.id},n.priorities&&n.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&type="+a.id+"&priority="+t},e[a.id]||0):e[a.id]||0)}))})),"percentage"==this.state.priorityShowModel&&i.default.createElement("tbody",null,p.default.map(a.priority_unresolved_issues,function(e,t){return i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},n.priorities&&n.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&priority="+t},n.priorities[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},n.priorities&&n.priorities[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&priority="+t},e.total||0):e.total||0),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"100%"}},i.default.createElement("tr",null,i.default.createElement("td",{style:{width:e.percent+"%"}},i.default.createElement("div",{className:"color-bar"})),i.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%")))))}))):i.default.createElement("div",null,"暂无信息")),i.default.createElement(c.Panel,{header:i.default.createElement("div",null,i.default.createElement("span",null,"未解决问题：按模块"),i.default.createElement("span",{className:"exchange-icon",onClick:function(){return e.setState({moduleShowModel:"detail"==e.state.moduleShowModel?"percentage":"detail"})},title:"切换"},i.default.createElement("i",{className:"fa fa-retweet"})))},a.module_unresolved_issues&&!p.default.isEmpty(a.module_unresolved_issues)?i.default.createElement(c.Table,{responsive:!0,hover:!0},"detail"==this.state.moduleShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"模块"),i.default.createElement("th",null,"问题"),p.default.map(n.types||[],function(e){return i.default.createElement("th",{key:e.id},e.name)}))),"percentage"==this.state.moduleShowModel&&i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"模块"),i.default.createElement("th",null,"问题"),i.default.createElement("th",null,"百分比"))),"detail"==this.state.moduleShowModel&&i.default.createElement("tbody",null,p.default.map(a.module_unresolved_issues,function(e,t){return i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},n.modules&&n.modules[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&module="+t},n.modules[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},n.modules&&n.modules[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&module="+t},e.total||0):e.total||0),p.default.map(n.types||[],function(a){return i.default.createElement("td",{key:a.id},n.modules&&n.modules[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&type="+a.id+"&module="+t},e[a.id]||0):e[a.id]||0)}))})),"percentage"==this.state.moduleShowModel&&i.default.createElement("tbody",null,p.default.map(a.module_unresolved_issues,function(e,t){return i.default.createElement("tr",null,i.default.createElement("td",{style:{width:"20%"}},n.modules&&n.modules[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&module="+t},n.modules[t]):"其他"),i.default.createElement("td",{style:{width:"10%"}},n.modules&&n.modules[t]?i.default.createElement(d.Link,{to:"/project/"+l.key+"/issue?resolution=Unresolved&module="+t},e.total||0):e.total||0),i.default.createElement("td",null,i.default.createElement("table",{style:{width:"100%"}},i.default.createElement("tr",null,i.default.createElement("td",{style:{width:e.percent+"%"}},i.default.createElement("div",{className:"color-bar"})),i.default.createElement("td",{style:{width:100-e.percent+"%",paddingLeft:"10px"}},e.percent+"%")))))}))):i.default.createElement("div",null,"暂无信息")))}}],[{key:"propTypes",value:{project:o.PropTypes.object.isRequired,data:o.PropTypes.object.isRequired,options:o.PropTypes.object.isRequired,loading:o.PropTypes.bool.isRequired,index:o.PropTypes.func.isRequired},enumerable:!0}]),t}(o.Component);t.default=y,e.exports=t.default}).call(this)}finally{}},1914:function(e,t,l){try{(function(){"use strict";function e(e){return(0,a.asyncFuncCreator)({constant:"PROJECT_SUMMARY",promise:function(t){return t.request({url:"/project/"+e+"/summary"})}})}Object.defineProperty(t,"__esModule",{value:!0}),t.index=e;var a=l(43)}).call(this)}finally{}}});
//# sourceMappingURL=summary-a7ea79ac8ca764d8b8cd.js.map