(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1271:function(e,t,n){"use strict";n.d(t,"d",function(){return d}),n.d(t,"c",function(){return h}),n.d(t,"b",function(){return b}),n.d(t,"a",function(){return g});var r,o=n(1),a=n.n(o),i=n(24),c=n(553),s=n.n(c),l=(n(552),n(31)),u=n.n(l),p=(n(86),n(314)),f=n.n(p),m=(n(316),r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=23;function d(e){return e.length<y?e:e.substr(0,y)+"..."}var h=a.a.createElement(i.c,{replacements:{title:"missions.worker.myMissions.loadingCard"}},function(e){return a.a.createElement(s.a,{loading:!0,title:e.title,style:{width:300}},"Whatever content")}),b="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529316137448&di=3908339d93277baf2e5486f7732eb326&imgtype=0&src=http%3A%2F%2Fwww.taopic.com%2Fuploads%2Fallimg%2F140421%2F318743-140421213T910.jpg",g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onClick=function(e){t.props.onClick&&t.props.onClick(e)},t}return m(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(i.c,{replacements:{title:this.props.hoverTextId}},function(t){return a.a.createElement(f.a,{arrowPointAtCenter:!0,placement:"topLeft",title:t.title},a.a.createElement(u.a,{type:e.props.iconType,onClick:e.onClick}))})},t}(a.a.Component)},1291:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r,o,a=n(1),i=n.n(a),c=n(1457),s=(n(1440),n(17)),l=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},u=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=s.a.div.withConfig({displayName:"PlayerContainer"})(o||(o=l(["\nmargin-left: auto;\nmargin-right: auto;\nmax-width: 1000px;\n  //max-height: 1000px;\n"],["\nmargin-left: auto;\nmargin-right: auto;\nmax-width: 1000px;\n  //max-height: 1000px;\n"]))),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={playing:!1},t.onStateChange=function(e,n){if(t.replaySession){if(console.log(e),e.currentTime>t.replaySession.endTime)return t.ref.pause(),void(t.replaySession=null);e.paused&&(t.replaySession=null)}},t.refCallback=function(e){e&&(console.log(e),t.ref=e,t.props.setRef&&t.props.setRef(t),e.subscribeToStateChange(t.onStateChange))},t}return u(t,e),Object.defineProperty(t.prototype,"currentTime",{get:function(){return console.log(this.ref.getState()),this.ref.getState().player.currentTime},enumerable:!0,configurable:!0}),t.prototype.playRegion=function(e,t){this.replaySession={endTime:t},this.ref.pause(),this.ref.seek(e),this.ref.play()},t.prototype.playOrPause=function(){this.state.playing?this.ref.pause():this.ref.play()},t.prototype.componentWillUnmount=function(){this.ref.pause()},t.prototype.render=function(){return i.a.createElement(p,null,i.a.createElement(c.Player,{src:this.props.url,ref:this.refCallback}))},t}(i.a.Component)},1292:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r,o=n(1),a=n.n(o),i=n(101),c=n.n(i),s=(n(138),n(31)),l=n.n(s),u=(n(86),n(562)),p=n.n(u),f=(n(561),n(1458)),m=n.n(f),y=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loadProgress:0,playing:!1,muted:!1,progress:0},t.waveContainerRef=a.a.createRef(),t.onPlay=function(){t.setState({playing:!0}),t.props.onPlay&&t.props.onPlay()},t.onPause=function(){t.setState({playing:!1}),t.props.onPause&&t.props.onPause()},t.playOrPause=function(){t.waveSurfer.isPlaying()?(t.waveSurfer.pause(),t.setState({playing:!1})):(t.setState({playing:!0}),t.waveSurfer.play())},t.toggleMute=function(){t.waveSurfer.toggleMute(),t.setState(function(e){return{muted:!e.muted}})},t}return y(t,e),t.prototype.componentDidMount=function(){var e=this;this.waveSurfer=m.a.create({container:this.waveContainerRef.current,waveColor:"blue",progressColor:"purple",responsive:!0}),this.waveSurfer.load(this.props.url),this.waveSurfer.on("pause",this.onPause),this.waveSurfer.on("play",this.onPlay),this.waveSurfer.on("loading",function(t){return e.setState({loadProgress:t})}),this.waveSurfer.on("audioprocess",function(t){return e.setState({progress:t})}),this.props.setRef&&this.props.setRef(this)},t.prototype.componentWillUnmount=function(){this.waveSurfer.unAll(),this.waveSurfer.stop()},Object.defineProperty(t.prototype,"currentTime",{get:function(){return this.waveSurfer.getCurrentTime()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPlaying",{get:function(){return!!this.waveSurfer&&this.waveSurfer.isPlaying()},enumerable:!0,configurable:!0}),t.prototype.playRegion=function(e,t){this.waveSurfer.play(e,t)},t.prototype.render=function(){return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(p.a,{spinning:100!==this.state.loadProgress,tip:this.state.loadProgress+"%"},a.a.createElement("div",{id:"wavesurfer",ref:this.waveContainerRef}),a.a.createElement(c.a,{onClick:this.playOrPause},a.a.createElement(l.a,{type:this.state.playing?"pause-circle":"play-circle"})),a.a.createElement("span",null,this.state.progress.toFixed(2)," s")))},t}(a.a.Component)},1293:function(e,t,n){"use strict";n.d(t,"a",function(){return j});var r,o=n(1),a=n.n(o),i=n(583),c=n(3),s=n(17),l=n(1302),u=n.n(l),p=(n(1301),n(511),n(47)),f=n(24),m=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})},g=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},v=u.a.TabPane,E=s.a.div.withConfig({displayName:"Container"})(x||(x=m(["\n  //max-width: 1000px;\n  overflow: auto;\n  padding: 8px 8px 8px 8px;\n  margin-right: auto;\n  margin-left: auto;\n"],["\n  //max-width: 1000px;\n  overflow: auto;\n  padding: 8px 8px 8px 8px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),w=s.a.div.withConfig({displayName:"TagContainer"})(T||(T=m(["\n  max-height: 600px;\n  overflow: auto;\n  \n  .ant-tag {\n  font-size: 14px;\n      margin: 4px 2px 4px 2px;\n \n  }\n"],["\n  max-height: 600px;\n  overflow: auto;\n  \n  .ant-tag {\n  font-size: 14px;\n      margin: 4px 2px 4px 2px;\n \n  }\n"]))),O={},_=s.a.div.withConfig({displayName:"MyTag"})(P||(P=m(["\n    border-radius: 6px;\n    background: ",";\n    //border: 2px solid ",";\n    padding: 4px; \n    margin: 4px 2px 4px 2px;\n    display: inline-block;\n    \n    color: ",";\n    \n    :hover {\n      cursor: pointer;\n      color: #108ee9;\n    }\n    \n    transition: color 0.3s, background 0.3s;\n"],["\n    border-radius: 6px;\n    background: ",";\n    //border: 2px solid ",";\n    padding: 4px; \n    margin: 4px 2px 4px 2px;\n    display: inline-block;\n    \n    color: ",";\n    \n    :hover {\n      cursor: pointer;\n      color: #108ee9;\n    }\n    \n    transition: color 0.3s, background 0.3s;\n"])),function(e){return e.selected?"#108ee9":"#FAFAFA"},function(e){return e.selected?"#FFFFFF":"#D8D8D8"},function(e){return e.selected?"white":void 0});function I(e){return a.a.createElement(_,{onClick:e.onClick,selected:e.selected},e.content)}var x,T,P,k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(w,null,this.props.words.map(function(t,n){return a.a.createElement(I,{key:n,content:t,selected:e.props.selectedWords.indexOf(t)>=0,onClick:function(){return e.props.onClick(t)}})}))},t}(a.a.PureComponent),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loading:!1,textToken:""},t.onTagClick=function(e){t.props.onTagClicked&&t.props.onTagClicked(e)},t}var n;return y(t,e),t.prototype.componentDidMount=function(){this.load()},t.prototype.componentDidUpdate=function(){this.props.textToken!==this.state.textToken&&this.load()},t.prototype.load=function(){return b(this,void 0,void 0,function(){var e,t,n;return g(this,function(r){switch(r.label){case 0:return this.setState({loading:!0,textToken:this.props.textToken}),(e=O[this.props.textToken])?(this.text=e.text,this.segmented=e.segmented,[3,4]):[3,1];case 1:return t=this,[4,this.missionService.getTextByToken(this.props.textToken)];case 2:return t.text=r.sent(),n=this,[4,this.missionService.segmentWord(this.props.textToken,this.props.missionId)];case 3:n.segmented=r.sent(),O[this.props.textToken]={text:this.text,segmented:this.segmented},r.label=4;case 4:return this.setState({loading:!1}),[2]}})})},t.prototype.render=function(){return this.state.loading?a.a.createElement(i.a,null):a.a.createElement(E,null,a.a.createElement(u.a,null,a.a.createElement(v,{key:"raw",tab:a.a.createElement(f.b,{id:"drawingPad.textReader.raw"})},this.text),a.a.createElement(v,{key:"segmented",tab:a.a.createElement(f.b,{id:"drawingPad.textReader.segmented"})},a.a.createElement(k,{onClick:this.onTagClick,words:this.segmented,selectedWords:this.props.selectedTags}))))},t.defaultProps={selectedTags:[]},d([c.Inject,h("design:type","function"==typeof(n=void 0!==p.a&&p.a)&&n||Object)],t.prototype,"missionService",void 0),t}(a.a.Component)},1325:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(94),o=n.n(r);function a(e){return"string"==typeof e?o.a.parse(e.substring(1)):o.a.parse(e.location.search.substring(1))}},1367:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r,o=n(26),a=n(1503),i=n(1),c=n.n(i),s=((r={})[o.b.ROLE_REQUESTER]="requester",r[o.b.ROLE_WORKER]="worker",r);function l(e){var t=s[e.role];return c.a.createElement(a.a,{to:"/mission/"+t})}},1519:function(e,t,n){"use strict";n.r(t);var r,o=n(1),a=n.n(o),i=n(1530),c=n(1529),s=n(1325),l=n(3),u=n(47),p=n(87),f=n(583),m=n(1466),y=n.n(m),d=(n(1460),r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){return a.a.createElement(y.a,{items:this.props.images.map(function(e){return{original:e,thumbnail:e}})})},t}(a.a.Component),b=n(24),g=n(512),v=n.n(g),E=(n(511),n(797)),w=n.n(E),O=(n(815),n(796)),_=n.n(O),I=(n(814),n(549)),x=n(31),T=n.n(x),P=(n(86),n(1302)),k=n.n(P),j=(n(1301),n(1271)),S=k.a.TabPane,C="missions.missionDetail.";function R(e){return a.a.createElement(I.a,{prompt:a.a.createElement(b.b,{id:C+e.promptTextId})},e.children)}function A(e){return a.a.createElement(k.a,{defaultActiveKey:"1"},a.a.createElement(S,{key:"1",tab:a.a.createElement("span",null,a.a.createElement(T.a,{type:"picture"}),a.a.createElement(b.b,{id:C+"cover"}))},a.a.createElement(h,{images:[e.coverUrl||j.b]})),a.a.createElement(S,{key:"2",tab:a.a.createElement("span",null,a.a.createElement(T.a,{type:e.titleIcon}),a.a.createElement(b.b,{id:e.titleId}))},e.children))}var D,U=n(101),M=n.n(U),F=(n(138),n(659)),N=n.n(F),W=(n(658),n(25)),L=n(72),G=n(1528),V=n(20),X=n(33),K=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),q=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},z=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},B=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})},H=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},Y="missions.worker.detailOperationBar.",J=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={key:0},t.accept=function(){return B(t,void 0,void 0,function(){var e,t,n;return H(this,function(r){switch(r.label){case 0:return e=this.props.missionPublicItem,t=e.missionId,n=e.missionType,[4,this.workerService.acceptMission(t,n)];case 1:return r.sent(),N.a.success(this.localeStore.get(Y+"accepted")),this.setState(function(e){return{key:e.key+1}}),[2]}})})},t.renderContent=function(){return B(t,void 0,void 0,function(){var e,t,n,r;return H(this,function(o){switch(o.label){case 0:e=this.props.missionPublicItem,t=e.missionId,n=e.minimalWorkerLevel,o.label=1;case 1:return o.trys.push([1,3,,7]),[4,this.workerService.getInstanceDetail(t)];case 2:return r=o.sent(),[2,a.a.createElement("div",null,a.a.createElement("h3",null,a.a.createElement(b.b,{id:Y+"state."+r.detail.instance.missionInstanceState})),a.a.createElement("p",null,r.detail.instance.missionInstanceState===X.a.IN_PROGRESS&&a.a.createElement(G.a,{to:"/mission/worker/"+t+"/doWork"},a.a.createElement(M.a,null,a.a.createElement(b.b,{id:Y+"continueWorking"}))),a.a.createElement(G.a,{to:"/mission/worker/"+t},a.a.createElement(M.a,null,a.a.createElement(b.b,{id:Y+"seeResult"})))))];case 3:return 404!==o.sent().statusCode?[3,5]:[4,this.workerService.getWorkerInfo(this.userStore.user.username)];case 4:return o.sent().level>=n?[2,a.a.createElement(M.a,{type:"primary",onClick:this.accept},a.a.createElement(b.b,{id:Y+"accept"}))]:[2,a.a.createElement(M.a,{disabled:!0,type:"primary"},a.a.createElement(b.b,{id:Y+"levelNotEnough"}))];case 5:return[2,a.a.createElement("div",null)];case 6:return[3,7];case 7:return[2]}})})},t}var n,r,o;return K(t,e),t.prototype.render=function(){return a.a.createElement(p.a,{key:this.state.key,render:this.renderContent})},q([l.Inject,z("design:type","function"==typeof(n=void 0!==W.a&&W.a)&&n||Object)],t.prototype,"userStore",void 0),q([l.Inject,z("design:type","function"==typeof(r=void 0!==L.a&&L.a)&&r||Object)],t.prototype,"workerService",void 0),q([l.Inject,z("design:type","function"==typeof(o=void 0!==V.a&&V.a)&&o||Object)],t.prototype,"localeStore",void 0),t}(a.a.Component),Q=n(16),Z=n(5),$=n(26),ee=n(17),te=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ne=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),re=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},oe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ae=ee.a.h1.withConfig({displayName:"Title"})(D||(D=te(["\n  margin-bottom: 16px;\n"],["\n  margin-bottom: 16px;\n"]))),ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n;return ne(t,e),Object.defineProperty(t.prototype,"showOperationBar",{get:function(){return this.userStore.loggedIn&&this.userStore.user.role===$.b.ROLE_WORKER},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.props.publicItem,t=e.missionId,n=e.title,r=e.jobCount,o=e.requesterUsername,i=(e.coverUrl,e.description),c=e.end,s=e.missionType,l=e.start,u=e.topics,p=e.minimalWorkerLevel,f=e.level,m=e.credits;return a.a.createElement(_.a,{gutter:32},a.a.createElement(w.a,{md:12,sm:24},this.props.picPanel),a.a.createElement(w.a,{md:12,sm:24},a.a.createElement(ae,null,n),a.a.createElement(R,{promptTextId:"missionId"},t),a.a.createElement(R,{promptTextId:"topics"},u.map(function(e){return a.a.createElement(v.a,{key:e,color:"geekblue"},e)})),a.a.createElement(R,{promptTextId:"dateRange"},a.a.createElement(b.b,{id:C+"dateRangeFormat",replacements:{start:a.a.createElement(b.a,{formatId:C+"dateFormat",input:l}),end:a.a.createElement(b.a,{formatId:C+"dateFormat",input:c})}})),a.a.createElement(R,{promptTextId:"jobCount"},r),a.a.createElement(R,{promptTextId:"minimalWorkerLevel"},p),a.a.createElement(R,{promptTextId:"level"},f),a.a.createElement(R,{promptTextId:"credits"},m),a.a.createElement(R,{promptTextId:"description"},i),a.a.createElement(R,{promptTextId:"requesterUsername"},o),a.a.createElement(R,{promptTextId:"missionType"},a.a.createElement(b.b,{id:C+s+".name"})),this.props.children,this.showOperationBar&&a.a.createElement(J,{missionPublicItem:this.props.publicItem})))},re([l.Inject,oe("design:type","function"==typeof(n=void 0!==W.a&&W.a)&&n||Object)],t.prototype,"userStore",void 0),re([Z.computed,oe("design:type",Object),oe("design:paramtypes",[])],t.prototype,"showOperationBar",null),t=re([Q.observer],t)}(a.a.Component),ce=n(88),se=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),le=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},ue=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(le(arguments[t]));return e},pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return se(t,e),t.prototype.render=function(){var e=this.props.detail,t=Object(ce.c)(e.missionAssetVos.map(function(e){return e.tagConfTuple}));return console.log(t),a.a.createElement(ie,{publicItem:e.publicItem,picPanel:a.a.createElement(h,{images:ue([e.publicItem.coverUrl||j.b],e.missionAssetVos.map(function(e){return e.url}))})},a.a.createElement(R,{promptTextId:"IMAGE.tags"},Object(ce.d)(t,5).map(function(e){return a.a.createElement(v.a,{key:e.tag},e.tag)}),a.a.createElement(b.b,{id:"missions.missionDetail.IMAGE.allowCustomTag."+e.publicItem.allowCustomTag})),a.a.createElement(R,{promptTextId:"IMAGE.imageMissionTypes"},e.publicItem.imageMissionTypes.map(function(e){return a.a.createElement(v.a,{key:e},a.a.createElement(b.b,{id:"missions.missionDetail.IMAGE.types."+e}))})))},t}(a.a.Component),fe=n(832),me=n(69),ye=n(1293),de=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();function he(e){switch(e.textMissionType){case me.a.CLASSIFICATION:return a.a.createElement(R,{key:"TEXT.CLASSIFICATION.classes",promptTextId:"TEXT.CLASSIFICATION.classes"},e.classes.map(function(e){return a.a.createElement(v.a,{key:e},e)}));case me.a.KEYWORDS:return a.a.createElement(R,{key:"TEXT.KEYWORDS.keywords",promptTextId:"TEXT.KEYWORDS.keywords"},e.keywords.map(function(e){return a.a.createElement(v.a,{key:e},e)}))}}var be=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return de(t,e),t.prototype.render=function(){var e=this.props.detail;return a.a.createElement(ie,{publicItem:e.publicItem,picPanel:a.a.createElement(A,{titleId:"missions.missionDetail.TEXT.sampleTitle",titleIcon:"file-text",coverUrl:e.publicItem.coverUrl},a.a.createElement(ye.a,{textToken:e.tokens[0],missionId:e.publicItem.missionId}))},a.a.createElement(R,{promptTextId:"TEXT.types"},e.publicItem.missionTypes.map(function(e){return a.a.createElement(v.a,{key:e},a.a.createElement(b.b,{id:"missions.missionDetail.TEXT."+e+".name"}))})),e.settings.map(he))},t}(a.a.Component),ge=n(11),ve=n(1292),Ee=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),we=(k.a.TabPane,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ee(t,e),t.prototype.render=function(){var e=this.props.detail;return a.a.createElement(ie,{publicItem:e.publicItem,picPanel:a.a.createElement(A,{titleId:"missions.missionDetail.AUDIO.sampleTitle",titleIcon:"sound",coverUrl:e.publicItem.coverUrl},a.a.createElement(ve.a,{url:e.audioUrls[0]}))},a.a.createElement(R,{promptTextId:"AUDIO.tags"},e.publicItem.tags.map(function(e){return a.a.createElement(v.a,{key:e},e)}),a.a.createElement(b.b,{id:"missions.missionDetail.AUDIO.allowCustomTag."+e.publicItem.allowCustomTag})),a.a.createElement(R,{promptTextId:"AUDIO.audioMissionTypes"},e.audioMissionTypes.map(function(e){return a.a.createElement(v.a,{key:e},a.a.createElement(b.b,{id:"missions.missionDetail.AUDIO.types."+e}))})))},t}(a.a.Component)),Oe=n(1291),_e=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _e(t,e),t.prototype.render=function(){var e=this.props.detail;return a.a.createElement(ie,{publicItem:e.publicItem,picPanel:a.a.createElement(A,{titleId:"missions.missionDetail.VIDEO.sampleTitle",titleIcon:"sound",coverUrl:e.publicItem.coverUrl},a.a.createElement(Oe.a,{url:e.videoUrls[0]}))},a.a.createElement(R,{promptTextId:"VIDEO.tags"},e.publicItem.tags.map(function(e){return a.a.createElement(v.a,{key:e},e)}),a.a.createElement(b.b,{id:"missions.missionDetail.VIDEO.allowCustomTag."+e.publicItem.allowCustomTag})),a.a.createElement(R,{promptTextId:"VIDEO.videoMissionTypes"},e.videoMissionTypes.map(function(e){return a.a.createElement(v.a,{key:e},a.a.createElement(b.b,{id:"missions.missionDetail.VIDEO.types."+e}))})))},t}(a.a.Component),xe=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Te=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return xe(t,e),t.prototype.render=function(){var e=this.props.detail;return a.a.createElement(ie,{publicItem:e.publicItem,picPanel:a.a.createElement(h,{images:[e.publicItem.coverUrl]})},a.a.createElement(R,{promptTextId:"THREE_DIMENSION.tags"},e.publicItem.tags.map(function(e){return a.a.createElement(v.a,{key:e},e)}),a.a.createElement(b.b,{id:"missions.missionDetail.THREE_DIMENSION.allowCustomTag."+e.publicItem.allowCustomTag})))},t}(a.a.Component),Pe=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ke=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Se=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})},Ce=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},Re=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderPage=function(){return Se(t,void 0,void 0,function(){var e;return Ce(this,function(t){switch(t.label){case 0:return[4,this.missionService.getAMission(this.props.missionId)];case 1:switch((e=t.sent()).publicItem.missionType){case ge.b.TEXT:return[2,a.a.createElement(be,{detail:e})];case ge.b.IMAGE:return[2,a.a.createElement(pe,{detail:e})];case ge.b.AUDIO:return[2,a.a.createElement(we,{detail:e})];case ge.b.VIDEO:return[2,a.a.createElement(Ie,{detail:e})];case ge.b.THREE_DIMENSION:return[2,a.a.createElement(Te,{detail:e})]}return[2,null]}})})},t}var n;return Pe(t,e),t.prototype.render=function(){return a.a.createElement(p.a,{render:this.renderPage,componentWhenLoading:a.a.createElement(f.a,null)})},ke([l.Inject,je("design:type","function"==typeof(n=void 0!==u.a&&u.a)&&n||Object)],t.prototype,"missionService",void 0),t=ke([Object(fe.a)()],t)}(a.a.Component),Ae=n(144),De=n(1367),Ue=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Me=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},Fe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ue(t,e),t.prototype.render=function(){var e=Object(s.a)(this.props.search).missionId;return e?a.a.createElement(Re,{missionId:e}):a.a.createElement(De.a,{role:this.props.role})},t}(a.a.Component),Ne=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ue(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(c.a,null,a.a.createElement(i.a,{exact:!0,path:"/mission",render:function(t){return a.a.createElement(Fe,{search:t.location.search,role:e.props.currentRole})}}),a.a.createElement(Ae.a,{path:"/mission/requester",component:n.e(41).then(n.bind(null,1527))}),a.a.createElement(Ae.a,{path:"/mission/worker",component:n.e(40).then(n.bind(null,1526))}))},t=Me([Object(fe.a)()],t)}(a.a.Component);t.default=Ne},549:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r,o,a,i=n(17),c=n(1),s=n.n(c),l=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},u=i.a.span.withConfig({displayName:"Prompt"})(r||(r=l(["\n    float: left;\n    width: 120px;\n    color: darkgray;\n   \n"],["\n    float: left;\n    width: 120px;\n    color: darkgray;\n   \n"]))),p=i.a.span.withConfig({displayName:"Content"})(o||(o=l(["\n\n"],["\n\n"]))),f=i.a.div.withConfig({displayName:"Container"})(a||(a=l(["\n    margin-bottom: 1em;\n"],["\n    margin-bottom: 1em;\n"])));function m(e){return s.a.createElement(f,null,s.a.createElement(u,null,e.prompt),s.a.createElement(p,null,e.children))}},583:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r,o=n(1),a=n.n(o),i=n(562),c=n.n(i),s=(n(561),n(24)),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){return a.a.createElement("div",null,a.a.createElement(c.a,{size:this.props.size}),a.a.createElement(s.b,{id:"common.loading"}))},t}(a.a.Component)},832:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r,o=n(1),a=n.n(o),i=n(16),c=n(3),s=n(25),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function m(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){var n=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}var o;return l(r,n),r.prototype.render=function(){return this.userStore.loggedIn?e.length>0&&-1==e.indexOf(this.userStore.user.role)?"Not accessible role. Expected: "+e:a.a.createElement(t,u({},this.props,{token:this.userStore.token,currentRole:this.userStore.user.role})):"Not login"},p([c.Inject,f("design:type","function"==typeof(o=void 0!==s.a&&s.a)&&o||Object)],r.prototype,"userStore",void 0),r}(a.a.Component);return Object(i.observer)(n)}}}}]);