(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(71)},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(16),r=a.n(o),s=(a(32),a(1)),c=a(12),l=a(3),u=a(4),m=a(6),p=a(5),d=a(2),h=a(7),g=(a(37),function(e){var t=e.message;return i.a.createElement("div",{className:"ErrorMsg"},i.a.createElement(s.Icon,{icon:"fa-exclamation-circle"}),i.a.createElement("span",null," ",t))}),v=(a(38),a(11)),f=function(e){var t=e.title,a=e.navigator,n=e.icon,o=e.backButton;return i.a.createElement(s.Toolbar,{className:"NavBar"},i.a.createElement("div",{className:"left NavBar-left"},o?i.a.createElement(s.BackButton,{onClick:function(){return a.popPage()}}):null),i.a.createElement("div",{className:"center NavBar-center"},n," ",t),i.a.createElement("div",{className:"right"},i.a.createElement(s.Button,{modifier:"large--quiet",onClick:function(){return function(e){v.notification.confirm("Are you sure you want to log out?",{buttonLabels:["Yes","No"]}).then(function(t){0===t&&(localStorage.removeItem("scavengerHuntTkn"),e.resetPage({component:A,props:{key:"LOGIN_PAGE".concat(Date.now())}}))})}(a)}},i.a.createElement(s.Icon,{className:"SignOut-icon",icon:"fa-sign-out-alt"}))))},E=a(24),b=a.n(E),y=a(26),k=(a(43),a(44),["#E3423C","#D89E28","#1268CE","#458F0F"]),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={isCorrect:a.props.isDone},a.handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){if(!this.state.isCorrect){var t=this.props.activity.options.find(function(t){return t._id===e});this.setState({isCorrect:t.correct})}}},{key:"componentDidUpdate",value:function(){this.state.isCorrect&&this.props.setActivityDone(this.props.activity._id)}},{key:"render",value:function(){var e=this,t=this.props.activity;return i.a.createElement("div",{className:"QuestionTask-wrapper"},this.state.isCorrect&&i.a.createElement("div",{className:"QuestionTask-completed"},i.a.createElement(s.Icon,{icon:"check",size:28,style:{color:"#FFFFFF"}}),"\xa0\xa0Completed!"),!1===this.state.isCorrect&&i.a.createElement("div",{className:"QuestionTask-wrong"},i.a.createElement(s.Icon,{icon:"check",size:28,style:{color:"#FFFFFF"}}),"\xa0\xa0Try again!"),i.a.createElement("div",{className:"QuestionTask-description_wrapper"},i.a.createElement("span",{className:"QuestionTask-activity_name"},t.activityName),i.a.createElement("p",{className:"QuestionTask-activity_description"},t.activityDescription)),t.options.map(function(t,a){var n=k[a];return i.a.createElement(s.Button,{key:t._id,modifier:"large--cta",className:"QuestionTask-button",style:e.state.isCorrect&&!t.correct?{}:{backgroundColor:n},onClick:function(){return e.handleClick(t._id)},disabled:!(!e.state.isCorrect||t.correct)},t.answer)}))}}]),t}(n.Component),L=(a(45),a(8)),P=a.n(L),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={pictureURL:null,isDone:a.props.isDone},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=this,a=new FormData;a.append("image",e.target.files[0]);P.a.post("https://api.imgur.com/3/image",a,{headers:{Authorization:"Bearer 2c43803a6844c641fd484634c4c591d355c4aaef","Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),t.setState({pictureURL:e.data.data.link,isDone:!0})}).catch(function(e){console.log(e.response.data)})}},{key:"componentDidUpdate",value:function(){this.state.isDone&&this.props.setActivityDone(this.props.activity._id)}},{key:"render",value:function(){var e=this.props.activity;return i.a.createElement("div",{className:"PhotoTask-wrapper"},this.state.isDone&&i.a.createElement("div",{className:"PhotoTask-completed"},i.a.createElement(s.Icon,{icon:"check",size:28,style:{color:"#FFF"}}),"\xa0\xa0Completed!"),i.a.createElement("div",{className:"PhotoTask-description_wrapper"},i.a.createElement("span",{className:"PhotoTask-activity_name"},e.activityName),i.a.createElement("p",{className:"PhotoTask-activity_description"},e.activityDescription)),!this.state.isDone&&i.a.createElement("div",{className:"PhotoTask-camera_wrapper"},i.a.createElement("label",null,i.a.createElement(s.Icon,{icon:"camera",size:72,style:{color:"#FABC39"}}),i.a.createElement("input",{style:{display:"none"},type:"file",accept:"image/*;capture=camera",onChange:this.handleChange}))),this.state.pictureURL&&i.a.createElement("div",null,i.a.createElement("img",{src:this.state.pictureURL,style:{width:"100%"},alt:""})))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(m.a)(this,Object(p.a)(t).call(this,e)),console.log(a.props),a.state={selectedAnswer:null,picture:null,pictureURL:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.activity;return i.a.createElement(s.Page,{renderToolbar:function(){return i.a.createElement(f,{title:"Task",navigator:e.props.navigator,icon:i.a.createElement(s.Icon,{icon:"thumbtack"}),backButton:!0})}},"photo"===t.type?i.a.createElement(N,this.props):i.a.createElement(C,this.props))}}]),t}(n.Component),w=(a(64),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={activities:[],activitiesCompleted:[],isLoading:!1,errors:""},a.renderRow=a.renderRow.bind(Object(d.a)(a)),a.renderThumbnail=a.renderThumbnail.bind(Object(d.a)(a)),a.pushPage=a.pushPage.bind(Object(d.a)(a)),a.fetchActivityList=a.fetchActivityList.bind(Object(d.a)(a)),a.fetchActivityProgress=a.fetchActivityProgress.bind(Object(d.a)(a)),a.setActivityDone=a.setActivityDone.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setActivityDone",value:function(e){var t=this,a=[].concat(Object(y.a)(this.state.activitiesCompleted),[e]),n={Authorization:this.props.token};P.a.post("".concat("/api/users/activities/").concat(e),{},{headers:n}).then(function(e){t.setState({activitiesCompleted:a}),console.log(e.data)}).catch(function(e){console.log(e.response.data)})}},{key:"renderThumbnail",value:function(e){return"photo"===e?i.a.createElement(s.Icon,{icon:"camera",size:32,className:"list-item__thumbnail",style:{color:"#FABC39",height:"auto",width:10}}):"question"===e?i.a.createElement(s.Icon,{icon:"question-circle",size:32,className:"list-item__thumbnail",style:{color:"#AB19DB",height:"auto",width:10}}):void 0}},{key:"pushPage",value:function(e){this.props.navigator.pushPage({component:O,props:{activity:this.state.activities.find(function(t){return t._id===e}),isDone:!!this.state.activitiesCompleted.includes(e)||null,setActivityDone:this.setActivityDone}})}},{key:"fetchActivityList",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token},a="".concat("/api/locations/").concat(this.props.locationId);P.a.get(a,{headers:t}).then(function(t){return e.setState({activities:t.data.activities,locationName:t.data.title,isLoading:!1})}).catch(function(t){e.setState({errors:t.response,isLoading:!1})})}},{key:"fetchActivityProgress",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token};P.a.get("/api/users/activities",{headers:t}).then(function(t){return e.setState({activitiesCompleted:t.data.activitiesCompleted,isLoading:!1})}).catch(function(t){e.setState({errors:t.response,isLoading:!1})})}},{key:"componentDidMount",value:function(){console.log("Before fetchActivityList()"),this.fetchActivityList(),console.log("After fetchActivityList()"),0===this.state.activitiesCompleted.length&&this.fetchActivityProgress()}},{key:"renderRow",value:function(e,t){var a=this;return i.a.createElement(s.ListItem,{key:e._id,modifier:t===this.state.activities.length-1?"longdivider":null,onClick:function(){return a.pushPage(e._id)},tappable:!0},i.a.createElement("div",{className:"left ActivityListPage-thumbnail",style:{minWidth:60}},this.renderThumbnail(e.type),this.state.activitiesCompleted.includes(e._id)&&i.a.createElement(s.Icon,{icon:"check-circle",size:24,className:"ActivityListPage-checkmark"})),i.a.createElement("div",{className:"center ActivityListPage-task_title"},e.activityName),i.a.createElement("div",{className:"right"},i.a.createElement(s.Icon,{icon:"fa-chevron-right",style:{color:"#CCC"}})))}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,{renderToolbar:function(){return i.a.createElement(f,{title:"Activities",navigator:e.props.navigator,icon:i.a.createElement(s.Icon,{icon:"tasks"}),backButton:!0})}},i.a.createElement(s.List,{dataSource:this.state.activities,renderRow:this.renderRow,renderHeader:function(){return i.a.createElement(s.ListHeader,{style:{textAlign:"center"}},e.state.locationName)}}))}}]),t}(n.Component)),j=(a(65),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleScan=function(e){var t=a.props.location;e&&(console.log(e),e===t.title?(a.setState({result:e}),a.setState({displayCamera:!1}),a.pushPage(a.props.navigator)):(a.setState({displayCamera:!1}),v.notification.alert("Sorry, looks like you are not in ".concat(t.title))))},a.handleError=function(e){console.error(e)},console.log(a.props),a.state={result:null,displayCamera:!1},a.getMap=a.getMap.bind(Object(d.a)(a)),a.handleScan=a.handleScan.bind(Object(d.a)(a)),a.handleError=a.handleError.bind(Object(d.a)(a)),a.displayCamera=a.displayCamera.bind(Object(d.a)(a)),a.hideCamera=a.hideCamera.bind(Object(d.a)(a)),a.pushPage=a.pushPage.bind(Object(d.a)(a)),a.resetState=a.resetState.bind(Object(d.a)(a)),a.renderDescription=a.renderDescription.bind(Object(d.a)(a)),a.renderCamera=a.renderCamera.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"displayCamera",value:function(){this.setState({displayCamera:!0})}},{key:"hideCamera",value:function(){this.setState({displayCamera:!1})}},{key:"getMap",value:function(e){window.open("https://maps.google.com/?q=".concat(e.replace(" ","+")))}},{key:"resetState",value:function(){this.setState({result:null,displayCamera:!1})}},{key:"pushPage",value:function(e){e.pushPage({component:w,props:{result:this.state.result,resetState:this.resetState,locationId:this.props.location._id,token:this.props.token}})}},{key:"renderDescription",value:function(){var e=this;console.log(this.props);var t=this.props.location;return i.a.createElement("div",null,i.a.createElement("div",{className:"LocationPage-img-wrapper"},i.a.createElement("img",{src:t.image,alt:t.title})),i.a.createElement("div",{className:"title center LocationPage-title"},t.title),i.a.createElement("div",{className:"content LocationPage-info_wrapper"},i.a.createElement("div",{className:"LocationPage-info"},i.a.createElement("div",null,i.a.createElement("p",{className:"LocationPage-address_lbl"},"Address"),i.a.createElement("p",{className:"LocationPage-address"},t.address)),i.a.createElement("div",{className:"LocationPage-hours_wrapper"},i.a.createElement("p",{className:"LocationPage-hours_lbl"},"Hours"),i.a.createElement("p",{className:"LocationPage-hours"},t.hours))),i.a.createElement("p",{className:"LocationPage-description_lbl"},"Description"),t.description),i.a.createElement("section",{style:{margin:"16px"}},i.a.createElement("div",{style:{margin:"6px"}},i.a.createElement(s.Button,{onClick:this.displayCamera,modifier:"large"},"I am here")),i.a.createElement("div",{style:{margin:"6px"}},i.a.createElement(s.Button,{onClick:function(){return e.getMap(t.title)},modifier:"large outline"},"Get directions"))))}},{key:"renderCamera",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"LocationPage-QR_description"},i.a.createElement("p",null,i.a.createElement(s.Icon,{icon:"qrcode",size:68})),i.a.createElement("p",null,"Find QR code and scan it")),i.a.createElement(b.a,{delay:1e3,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),i.a.createElement(s.Button,{onClick:this.hideCamera,modifier:"large",className:"LocationPage-QR_cancel_btn"},"Cancel"))}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,{renderToolbar:function(){return i.a.createElement(f,{title:e.props.location.title,navigator:e.props.navigator,backButton:!0})}},this.state.displayCamera?this.renderCamera():this.renderDescription())}}]),t}(n.Component)),S=(a(66),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={locations:[],locationsCompleted:[],isLoading:!1,errors:""},a.handleLocationSelection=a.handleLocationSelection.bind(Object(d.a)(a)),a.renderRow=a.renderRow.bind(Object(d.a)(a)),a.fetchLocations=a.fetchLocations.bind(Object(d.a)(a)),a.fetchLocationsProgress=a.fetchLocationsProgress.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"fetchLocations",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token};P.a.get("/api/locations",{headers:t}).then(function(t){return e.setState({locations:t.data,isLoading:!1})}).catch(function(t){localStorage.removeItem("scavengerHuntTkn"),e.setState({errors:t.response,isLoading:!1})})}},{key:"fetchLocationsProgress",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token};P.a.get("/api/users/locations",{headers:t}).then(function(t){return e.setState({locationsCompleted:t.data.locationsCompleted,isLoading:!1})}).catch(function(t){e.setState({errors:t.response,isLoading:!1})})}},{key:"componentDidMount",value:function(){console.log("in ComponentDidMount()"),this.fetchLocations(),this.state.locationsCompleted.length||(console.log("Fetching locations progress"),this.fetchLocationsProgress())}},{key:"handleLocationSelection",value:function(e){console.log("id"+e),this.props.navigator.pushPage({component:j,key:"LOCATION_PAGE",props:{location:this.state.locations.find(function(t){return t._id===e}),token:this.props.token}})}},{key:"renderRow",value:function(e,t){var a=this;return i.a.createElement(s.ListItem,{key:e._id,modifier:t===this.state.locations.length-1?"longdivider":null,onClick:function(){a.handleLocationSelection(e._id)},tappable:!0},i.a.createElement("div",{className:"left",style:{minWidth:60}},i.a.createElement("img",{src:e.image,className:"list-item__thumbnail LocationsPage-thumbnail",alt:""}),this.state.locationsCompleted.includes(e._id)&&i.a.createElement(s.Icon,{icon:"check-circle",size:24,className:"LocationsPage-checkmark"})),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"list-item__title"},e.title),i.a.createElement("div",{className:"list-item__subtitle"},e.subtitle)),i.a.createElement("div",{className:"right"},i.a.createElement(s.Icon,{icon:"fa-chevron-right",style:{color:"#CCC"}})))}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,{renderToolbar:function(){return i.a.createElement(f,{title:"Locations",navigator:e.props.navigator,icon:i.a.createElement(s.Icon,{icon:"map-marker-alt"})})}},this.state.isLoading&&i.a.createElement(s.ProgressBar,{indeterminate:!0}),i.a.createElement(s.List,{dataSource:this.state.locations,renderRow:this.renderRow}))}}]),t}(n.Component)),_=(a(67),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={name:"",email:"",password:"",password2:"",errors:[]},a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleRegistration",value:function(){var e=this,t=this.state,a=(t.errors,Object(c.a)(t,["errors"]));P.a.post("/api/users/register",a).then(function(t){return e.props.navigator.popPage()}).catch(function(t){return e.setState({errors:t.response.data})})}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,null,i.a.createElement("div",{className:"LoginPage"},i.a.createElement("img",{src:"logo-white.png",width:"200",alt:"Tourism Moose Jaw"}),i.a.createElement("section",{className:"LoginPage-form"},i.a.createElement("p",{className:"LoginPage-title"},"Sign Up"),i.a.createElement(s.Input,{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},type:"text","disable-auto-styling":!0,placeholder:"Name",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},type:"email","disable-auto-styling":!0,placeholder:"Email",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},type:"password","disable-auto-styling":!0,placeholder:"Password",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.password2,onChange:function(t){return e.setState({password2:t.target.value})},type:"password","disable-auto-styling":!0,placeholder:"Repeat password",className:"LoginPage-input"}),this.state.errors&&this.state.errors.map(function(e,t){return i.a.createElement(g,{key:t,message:e})}),i.a.createElement(s.Button,{modifier:"large",className:"SignUpPage-register_btn",onClick:this.handleRegistration},"CREATE ACCOUNT"),i.a.createElement(s.Button,{modifier:"large--quiet",className:"LoginPage-signup_btn",onClick:function(){return e.props.navigator.popPage()}},"I've got an account")),i.a.createElement("img",{src:"team-logo-white.png",width:"100",alt:"oowee Entertainment"})))}}]),t}(n.Component)),A=(a(68),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={email:"",password:"",token:localStorage.getItem("scavengerHuntTkn"),errors:[]},a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.openSignUpPage=a.openSignUpPage.bind(Object(d.a)(a)),a.openLocationsPage=a.openLocationsPage.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"openLocationsPage",value:function(){this.props.navigator.pushPage({component:S,props:{key:"LOCATIONS_PAGE",token:this.state.token}})}},{key:"handleLogin",value:function(){var e=this,t=this.state,a=(t.errors,t.token,Object(c.a)(t,["errors","token"]));P.a.post("/api/users/login",a).then(function(t){e.setState({token:t.data.token}),localStorage.setItem("scavengerHuntTkn",e.state.token),e.openLocationsPage()}).catch(function(t){return e.setState({errors:t.response.data})})}},{key:"openSignUpPage",value:function(){this.setState({email:"",password:"",errors:[]}),this.props.navigator.pushPage({component:_,props:{key:"SIGNUP_PAGE"}})}},{key:"render",value:function(){var e=this;return this.state.token&&this.openLocationsPage(),i.a.createElement(s.Page,null,i.a.createElement("div",{className:"LoginPage"},i.a.createElement("img",{src:"logo-white.png",width:"200",alt:"Tourism Moose Jaw"}),i.a.createElement("section",{className:"LoginPage-form"},i.a.createElement("p",{className:"LoginPage-title"},"Scavenger Hunt"),i.a.createElement(s.Input,{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},type:"email","disable-auto-styling":!0,placeholder:"Email",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},type:"password","disable-auto-styling":!0,placeholder:"Password",className:"LoginPage-input"}),this.state.errors&&this.state.errors.map(function(e,t){return i.a.createElement(g,{key:t,message:e})}),i.a.createElement(s.Button,{modifier:"large",className:"LoginPage-login_btn",onClick:this.handleLogin},"SIGN IN"),i.a.createElement(s.Button,{modifier:"large--quiet",className:"LoginPage-signup_btn",onClick:this.openSignUpPage},"or create new account")),i.a.createElement("img",{src:"team-logo-white.png",width:"100",alt:"OOWEE"})))}}]),t}(n.Component)),I=(a(69),function(e,t){var a=e.props||{};return a.navigator=t,i.a.createElement(e.component,a)}),T=function(){return i.a.createElement(s.Navigator,{initialRoute:{component:A,props:{key:"LOGIN_PAGE"}},renderPage:I})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.a42e704a.chunk.js.map