(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1675:function(t,e,n){"use strict";n.r(e);var o,r=n(1),i=n.n(r),a=n(3),c=n(26),u=n(49),l=n(20),s=n(515),p=n.n(s),f=(n(512),n(518)),h=n.n(f),d=(n(517),n(87)),y=n(602),v=n(879),b=n(23),m=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),w=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function c(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,e||[])).next())})},E=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[0,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={key:0,input:""},e.handleClose=function(t){return _(e,void 0,void 0,function(){return E(this,function(e){switch(e.label){case 0:return[4,this.topicService.deleteTopics({topicIds:[t]})];case 1:return e.sent(),this.setState({key:this.state.key+1}),[2]}})})},e.onTagValueChange=function(t){e.setState({input:t.target.value})},e.handleAdd=function(){return _(e,void 0,void 0,function(){return E(this,function(t){switch(t.label){case 0:return[4,this.topicService.addTopics({topics:[this.state.input]})];case 1:return t.sent(),this.setState({input:"",key:this.state.key+1}),[2]}})})},e.renderTopics=function(){return _(e,void 0,void 0,function(){var t,e=this;return E(this,function(n){switch(n.label){case 0:return[4,this.topicService.getAllTopics()];case 1:return t=n.sent(),[2,i.a.createElement("div",null,t.topics.map(function(t){return i.a.createElement(h.a,{key:t.topicId,closable:!0,afterClose:function(){return e.handleClose(t.topicId)}},t.value)}))]}})})},e}var n,o;return m(e,t),e.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(l.b,{id:"selfCenter.manageTopics"})),i.a.createElement("br",null),i.a.createElement(p.a,{style:{marginBottom:20,width:150},size:"small",placeholder:"添加标签",onChange:this.onTagValueChange,value:this.state.input,onPressEnter:this.handleAdd}),i.a.createElement(d.a,{key:this.state.key,render:this.renderTopics,componentWhenLoading:i.a.createElement(y.a,null)}))},w([a.Inject,g("design:type","function"==typeof(n=void 0!==c.a&&c.a)&&n||Object)],e.prototype,"userStore",void 0),w([a.Inject,g("design:type","function"==typeof(o=void 0!==u.a&&u.a)&&o||Object)],e.prototype,"topicService",void 0),e=w([Object(v.a)(b.b.ROLE_ADMIN)],e)}(i.a.Component);e.default=O},602:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o,r=n(1),i=n.n(r),a=n(559),c=n.n(a),u=(n(558),n(20)),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(c.a,{size:this.props.size}),i.a.createElement(u.b,{id:"common.loading"}))},e}(i.a.Component)}}]);