(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(74)},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),r=a.n(o),s=(a(32),a(1)),c=a(14),l=a(3),u=a(4),p=a(6),h=a(5),m=a(2),d=a(7),g=(a(37),function(e){var t=e.message;return i.a.createElement("div",{className:"ErrorMsg"},i.a.createElement(s.Icon,{icon:"fa-exclamation-circle"}),i.a.createElement("span",null," ",t))}),v=a(13),f=(a(38),a(10)),y=function(e){var t=e.title,a=e.navigator,n=e.icon,o=e.backButton;return i.a.createElement(s.Toolbar,{className:"NavBar"},i.a.createElement("div",{className:"left NavBar-left"},o?i.a.createElement(s.BackButton,{onClick:function(){return a.popPage()}}):null),i.a.createElement("div",{className:"center NavBar-center"},n," ",t),i.a.createElement("div",{className:"right"},i.a.createElement(s.Button,{modifier:"large--quiet",onClick:function(){return function(e){f.notification.confirm("Are you sure you want to log out?",{buttonLabels:["Yes","No"]}).then(function(t){0===t&&(localStorage.removeItem("scavengerHuntTkn"),e.resetPage({component:B,props:{key:"LOGIN_PAGE".concat(Date.now())}}))})}(a)}},i.a.createElement(s.Icon,{className:"SignOut-icon",icon:"fa-sign-out-alt"}))))},b=a(12),E=a.n(b),k=(a(43),a(44),a(45),function(e){var t=e.type;return i.a.createElement("div",{className:"FeedbackMsg "+("correct"===t?"FeedbackMsg-correct":"FeedbackMsg-wrong")},i.a.createElement(s.Icon,{icon:"correct"===t?"check":"times"}),"\xa0\xa0","correct"===t?"Completed!":"Try again!")}),C=(a(46),function(e){var t=e.name,a=e.description;return i.a.createElement("div",{className:"TaskDescription-wrapper"},i.a.createElement("span",{className:"TaskDescription-name"},t),i.a.createElement("p",{className:"TaskDescription-details"},a))}),L=["#732181","#009ABE","#81BC00","#F38A00","#EA1C75"],w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={isCorrect:a.props.isDone},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){if(!this.state.isCorrect){var t=this.props.activity.options.find(function(t){return t._id===e});this.setState({isCorrect:t.correct})}}},{key:"componentDidUpdate",value:function(){this.state.isCorrect&&this.props.setActivityDone(this.props.activity._id)}},{key:"render",value:function(){var e=this,t=this.props.activity;return i.a.createElement("div",{className:"QuestionTask-wrapper"},this.state.isCorrect&&i.a.createElement(k,{type:"correct"}),!1===this.state.isCorrect&&i.a.createElement(k,{type:"wrong"}),i.a.createElement(C,{name:t.activityName,description:t.activityDescription}),t.options.map(function(t,a){var n=L[a];return i.a.createElement(s.Button,{key:t._id,modifier:"large--cta",className:"QuestionTask-button",style:e.state.isCorrect&&!t.correct?{}:{backgroundColor:n},onClick:function(){return e.handleClick(t._id)},disabled:!(!e.state.isCorrect||t.correct)},t.answer)}))}}]),t}(n.Component),O=(a(47),a(8)),P=a.n(O),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={pictureURL:null,isDone:a.props.isDone},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=this,a=new FormData;a.append("image",e.target.files[0]),a.append("album","3OYirzt"),a.append("title","".concat(this.props.locationName," - ").concat(this.props.activity.activityName));P.a.post("https://api.imgur.com/3/image",a,{headers:{Authorization:"Bearer 2c43803a6844c641fd484634c4c591d355c4aaef","Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),t.setState({pictureURL:e.data.data.link,isDone:!0})}).catch(function(e){console.log(e.response.data)})}},{key:"componentDidUpdate",value:function(){this.state.isDone&&this.props.setActivityDone(this.props.activity._id)}},{key:"render",value:function(){var e=this.props.activity;return i.a.createElement("div",{className:"PhotoTask-wrapper"},this.state.isDone&&i.a.createElement(k,{type:"correct"}),i.a.createElement(C,{name:e.activityName,description:e.activityDescription}),!this.state.isDone&&i.a.createElement("div",{className:"PhotoTask-camera_wrapper"},i.a.createElement("label",{className:"PhotoTask-camera_label"},i.a.createElement(s.Icon,{icon:"camera",size:72,style:{color:"#FABC39"}}),i.a.createElement("input",{style:{display:"none"},type:"file",accept:"image/*;capture=camera",onChange:this.handleChange}))),this.state.pictureURL&&i.a.createElement("div",null,i.a.createElement("img",{src:this.state.pictureURL,style:{width:"100%"},alt:""})))}}]),t}(n.Component),j=(a(66),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={isCorrect:a.props.isDone,answer:""},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){if(!this.state.isCorrect){var e=this.props.activity.answers.map(function(e){return e.toLowerCase()});this.setState({isCorrect:e.includes(this.state.answer.toLowerCase().trim())})}}},{key:"componentDidUpdate",value:function(){this.state.isCorrect&&this.props.setActivityDone(this.props.activity._id)}},{key:"render",value:function(){var e=this,t=this.props.activity;return i.a.createElement("div",{className:"ShortAnswerTask-wrapper"},this.state.isCorrect&&i.a.createElement(k,{type:"correct"}),!1===this.state.isCorrect&&i.a.createElement(k,{type:"wrong"}),i.a.createElement(C,{name:t.activityName,description:t.activityDescription}),i.a.createElement("div",{className:"ShortAnswerTask-answer_wrapper"},i.a.createElement("div",null,i.a.createElement(s.Input,{className:"ShortAnswerTask-input",value:this.state.isCorrect?t.answers[0]:this.state.answer,float:!0,onChange:function(t){e.setState({answer:t.target.value})},type:"text",placeholder:this.state.isCorrect?"The answer":"Your answer",readOnly:!!this.state.isCorrect,required:!0})),i.a.createElement(s.Button,{className:"ShortAnswerTask-button",modifier:"cta",ripple:!0,onClick:this.handleClick,disabled:!!this.state.isCorrect},"Submit")))}}]),t}(n.Component)),S=(a(67),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleScan=function(e){var t=a.props.activity;e&&(e===t.content?a.setState({isDone:!0,displayCamera:!1}):f.notification.alert({message:"Sorry, seems like you scanned a wrong QR code!",title:"Ooops"}))},a.handleError=function(e){console.error(e)},a.state={displayCamera:null,isDone:a.props.isDone},a.displayCamera=a.displayCamera.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"displayCamera",value:function(){this.setState({displayCamera:!0})}},{key:"componentDidUpdate",value:function(){this.state.isDone&&this.props.setActivityDone(this.props.activity._id)}},{key:"render",value:function(){var e=this.props.activity;return i.a.createElement("div",{className:"ScanQRCodeTask-wrapper"},this.state.isDone&&i.a.createElement(k,{type:"correct"}),i.a.createElement(C,{name:e.activityName,description:e.activityDescription}),this.state.isDone?i.a.createElement("div",{className:"ScanQRCodeTask-content"},e.content):i.a.createElement("div",null,i.a.createElement(E.a,{delay:1e3,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}})))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={selectedAnswer:null,picture:null,pictureURL:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.activity;return i.a.createElement(s.Page,{renderToolbar:function(){return i.a.createElement(y,{title:"Task",navigator:e.props.navigator,icon:i.a.createElement(s.Icon,{icon:"thumbtack"}),backButton:!0})}},"photo"===t.type&&i.a.createElement(N,this.props),"multiple-choice-question"===t.type&&i.a.createElement(w,this.props),"short-answer"===t.type&&i.a.createElement(j,this.props),"qr-code"===t.type&&i.a.createElement(S,this.props))}}]),t}(n.Component),_=(a(68),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={activities:[],activitiesCompleted:[],isLoading:!1,errors:""},a.renderRow=a.renderRow.bind(Object(m.a)(a)),a.renderThumbnail=a.renderThumbnail.bind(Object(m.a)(a)),a.pushPage=a.pushPage.bind(Object(m.a)(a)),a.fetchActivityList=a.fetchActivityList.bind(Object(m.a)(a)),a.fetchActivityProgress=a.fetchActivityProgress.bind(Object(m.a)(a)),a.setActivityDone=a.setActivityDone.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"setActivityDone",value:function(e){var t=this,a=[].concat(Object(v.a)(this.state.activitiesCompleted),[e]),n={Authorization:this.props.token};P.a.post("".concat("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/users/activities/").concat(e),{},{headers:n}).then(function(e){t.setState({activitiesCompleted:a}),t.state.activities.map(function(e){return e._id}).every(function(e){return a.includes(e)})&&t.props.setLocationDone(t.props.locationId),console.log(e.data)}).catch(function(e){console.log(e.response.data)})}},{key:"renderThumbnail",value:function(e){return"photo"===e?i.a.createElement(s.Icon,{icon:"camera",size:32,className:"list-item__thumbnail",style:{color:"#FABC39",height:"auto",width:10}}):"multiple-choice-question"===e?i.a.createElement(s.Icon,{icon:"list-alt",size:32,className:"list-item__thumbnail",style:{color:"#F17D80",height:"auto",width:10}}):"short-answer"===e?i.a.createElement(s.Icon,{icon:"question-circle",size:32,className:"list-item__thumbnail",style:{color:"#AB19DB",height:"auto",width:10}}):"qr-code"===e?i.a.createElement(s.Icon,{icon:"qrcode",size:32,className:"list-item__thumbnail",style:{color:"#68A8AD",height:"auto",width:10}}):void 0}},{key:"pushPage",value:function(e){this.props.navigator.pushPage({component:D,props:{activity:this.state.activities.find(function(t){return t._id===e}),isDone:!!this.state.activitiesCompleted.includes(e)||null,setActivityDone:this.setActivityDone,setLocationDone:this.props.setLocationDone,locationId:this.props.locationId,locationName:this.state.locationName,key:"ACTIVITY_PAGE_".concat(Date.now())}})}},{key:"fetchActivityList",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token},a="".concat("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/locations/").concat(this.props.locationId);P.a.get(a,{headers:t}).then(function(t){return e.setState({activities:t.data.activities,locationName:t.data.title,isLoading:!1})}).catch(function(t){e.setState({errors:t.response,isLoading:!1})})}},{key:"fetchActivityProgress",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token};P.a.get("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/users/activities",{headers:t}).then(function(t){return e.setState({activitiesCompleted:t.data.activitiesCompleted,isLoading:!1})}).catch(function(t){e.setState({errors:t.response,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.fetchActivityList(),0===this.state.activitiesCompleted.length&&this.fetchActivityProgress()}},{key:"renderRow",value:function(e,t){var a=this;return i.a.createElement(s.ListItem,{key:e._id,modifier:t===this.state.activities.length-1?"longdivider":null,onClick:function(){return a.pushPage(e._id)},tappable:!0},i.a.createElement("div",{className:"left ActivityListPage-thumbnail",style:{minWidth:60}},this.renderThumbnail(e.type),this.state.activitiesCompleted.includes(e._id)&&i.a.createElement(s.Icon,{icon:"check-circle",size:24,className:"ActivityListPage-checkmark"})),i.a.createElement("div",{className:"center ActivityListPage-task_title"},e.activityName),i.a.createElement("div",{className:"right"},i.a.createElement(s.Icon,{icon:"fa-chevron-right",style:{color:"#CCC"}})))}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,{renderToolbar:function(){return i.a.createElement(y,{title:"Activities",navigator:e.props.navigator,icon:i.a.createElement(s.Icon,{icon:"tasks"}),backButton:!0})}},this.state.isLoading&&i.a.createElement(s.ProgressBar,{indeterminate:!0}),i.a.createElement(s.List,{dataSource:this.state.activities,renderRow:this.renderRow,renderHeader:function(){return i.a.createElement(s.ListHeader,{style:{textAlign:"center"}},e.state.locationName)}}))}}]),t}(n.Component)),A=(a(69),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleScan=function(e){var t=a.props.location;e&&(e===t.title?(a.setState({result:e}),a.setState({displayCamera:!1}),a.pushPage(a.props.navigator)):(a.setState({displayCamera:!1}),f.notification.alert("Sorry, looks like you are not at ".concat(t.title))))},a.handleError=function(e){console.error(e)},a.state={result:null,displayCamera:!1},a.getMap=a.getMap.bind(Object(m.a)(a)),a.handleScan=a.handleScan.bind(Object(m.a)(a)),a.handleError=a.handleError.bind(Object(m.a)(a)),a.displayCamera=a.displayCamera.bind(Object(m.a)(a)),a.hideCamera=a.hideCamera.bind(Object(m.a)(a)),a.pushPage=a.pushPage.bind(Object(m.a)(a)),a.resetState=a.resetState.bind(Object(m.a)(a)),a.renderDescription=a.renderDescription.bind(Object(m.a)(a)),a.renderCamera=a.renderCamera.bind(Object(m.a)(a)),a.getDistance=a.getDistance.bind(Object(m.a)(a)),a.isWithinLocation=a.isWithinLocation.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"displayCamera",value:function(){this.setState({displayCamera:!0})}},{key:"hideCamera",value:function(){this.setState({displayCamera:!1})}},{key:"getDistance",value:function(e,t,a,n){function i(e){return e*(Math.PI/180)}var o=i(a-e),r=i(n-t),s=Math.sin(o/2)*Math.sin(o/2)+Math.cos(i(e))*Math.cos(i(a))*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}},{key:"isWithinLocation",value:function(){var e=this,t=this.props.location;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){console.log(t.coords.latitude),console.log(t.coords.longitude);var n=e.getDistance(a.coords.latitude,a.coords.longitude,t.coords.latitude,t.coords.longitude);console.log(n),n<=.3?e.pushPage(e.props.navigator):f.notification.alert("Sorry, looks like you are not at ".concat(t.title,". Maybe get closer?"))},null,{enableHighAccuracy:!0}):console.log("Geolocation is not supported by your browser")}},{key:"getMap",value:function(e){window.open("https://maps.google.com/?q=".concat(e.replace(" ","+")))}},{key:"resetState",value:function(){this.setState({result:null,displayCamera:!1})}},{key:"pushPage",value:function(e){e.pushPage({component:_,props:{result:this.state.result,resetState:this.resetState,locationId:this.props.location._id,token:this.props.token,setLocationDone:this.props.setLocationDone,key:"ACTIVITY_LIST_PAGE_".concat(Date.now())}})}},{key:"renderDescription",value:function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("div",{className:"LocationPage-img-wrapper"},i.a.createElement("img",{src:t.image,alt:t.title})),i.a.createElement("div",{className:"title center LocationPage-title"},t.title),i.a.createElement("div",{className:"content LocationPage-info_wrapper"},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("p",{className:"LocationPage-address_lbl"},"Location"),i.a.createElement("p",{className:"LocationPage-address"},t.address)),i.a.createElement("div",null,i.a.createElement("p",{className:"LocationPage-hours_lbl"},"Hours"),i.a.createElement("p",{className:"LocationPage-hours"},t.hours)),i.a.createElement("div",null,i.a.createElement("p",{className:"LocationPage-description_lbl"},"Description"),i.a.createElement("p",{className:"LocationPage-hours"},t.description)))),i.a.createElement("section",{style:{margin:"16px"}},i.a.createElement("div",{style:{margin:"6px"}},i.a.createElement(s.Button,{onClick:"external"===t.type?this.isWithinLocation:this.displayCamera,modifier:"large"},"I am here")),"external"===this.props.location.type&&i.a.createElement("div",{style:{margin:"6px"}},i.a.createElement(s.Button,{onClick:function(){return e.getMap(t.address)},modifier:"large outline"},"Get directions"))))}},{key:"renderCamera",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"LocationPage-QR_description"},i.a.createElement("p",null,i.a.createElement(s.Icon,{icon:"qrcode",size:68})),i.a.createElement("p",null,"Scan QR code to open a list of activities")),i.a.createElement(E.a,{delay:1e3,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),i.a.createElement(s.Button,{onClick:this.hideCamera,modifier:"large",className:"LocationPage-QR_cancel_btn"},"Cancel"))}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,{onDeviceBackButton:this.props.navigator.popPage,renderToolbar:function(){return i.a.createElement(y,{title:e.props.location.title,navigator:e.props.navigator,backButton:!0})}},this.state.displayCamera?this.renderCamera():this.renderDescription())}}]),t}(n.Component)),I=(a(70),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={locations:[],locationsCompleted:[],isLoading:!1,errors:""},a.handleLocationSelection=a.handleLocationSelection.bind(Object(m.a)(a)),a.renderRow=a.renderRow.bind(Object(m.a)(a)),a.fetchLocations=a.fetchLocations.bind(Object(m.a)(a)),a.fetchLocationsProgress=a.fetchLocationsProgress.bind(Object(m.a)(a)),a.setLocationDone=a.setLocationDone.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"fetchLocations",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token};P.a.get("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/locations",{headers:t}).then(function(t){return e.setState({locations:t.data,isLoading:!1})}).catch(function(t){localStorage.removeItem("scavengerHuntTkn"),e.setState({errors:t.response,isLoading:!1})})}},{key:"fetchLocationsProgress",value:function(){var e=this;this.setState({isLoading:!0});var t={Authorization:this.props.token};P.a.get("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/users/locations",{headers:t}).then(function(t){return e.setState({locationsCompleted:t.data.locationsCompleted,isLoading:!1})}).catch(function(t){e.setState({errors:t.response,isLoading:!1})})}},{key:"setLocationDone",value:function(e){var t=this,a=[].concat(Object(v.a)(this.state.locationsCompleted),[e]),n={Authorization:this.props.token};P.a.post("".concat("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/users/locations/").concat(e),{},{headers:n}).then(function(e){t.setState({locationsCompleted:a}),console.log(e.data)}).catch(function(e){console.log(e.response.data)})}},{key:"componentDidMount",value:function(){this.fetchLocations(),this.state.locationsCompleted.length||this.fetchLocationsProgress()}},{key:"handleLocationSelection",value:function(e){this.props.navigator.pushPage({component:A,props:{location:this.state.locations.find(function(t){return t._id===e}),token:this.props.token,key:"LOCATION_PAGE_".concat(Date.now()),setLocationDone:this.setLocationDone}})}},{key:"renderRow",value:function(e,t){var a=this;return i.a.createElement(s.ListItem,{key:e._id,modifier:t===this.state.locations.length-1?"longdivider":null,onClick:function(){a.handleLocationSelection(e._id)},tappable:!0},i.a.createElement("div",{className:"left",style:{minWidth:60,maxWidth:60}},i.a.createElement("img",{src:e.image,className:"list-item__thumbnail LocationsPage-thumbnail",alt:""}),this.state.locationsCompleted.includes(e._id)&&i.a.createElement(s.Icon,{icon:"check-circle",size:24,className:"LocationsPage-checkmark"})),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"list-item__title"},e.title),i.a.createElement("div",{className:"list-item__subtitle"},e.subtitle)),i.a.createElement("div",{className:"right"},i.a.createElement(s.Icon,{icon:"fa-chevron-right",style:{color:"#CCC"}})))}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,{onDeviceBackButton:this.props.navigator.popPage,renderToolbar:function(){return i.a.createElement(y,{title:"Locations",navigator:e.props.navigator,icon:i.a.createElement(s.Icon,{icon:"map-marker-alt"})})}},this.state.isLoading&&i.a.createElement(s.ProgressBar,{indeterminate:!0}),i.a.createElement(s.List,{dataSource:this.state.locations,renderRow:this.renderRow}))}}]),t}(n.Component)),T=(a(71),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={name:"",email:"",password:"",password2:"",errors:[]},a.handleRegistration=a.handleRegistration.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleRegistration",value:function(){var e=this,t=this.state,a=(t.errors,Object(c.a)(t,["errors"]));P.a.post("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/users/register",a).then(function(t){return e.props.navigator.popPage()}).catch(function(t){return e.setState({errors:t.response.data})})}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,null,i.a.createElement("div",{className:"LoginPage"},i.a.createElement("img",{src:"sask-polytech-logo-compressed.png",width:"200",alt:"Saskatchewan Polytechnic"}),i.a.createElement("section",{className:"LoginPage-form"},i.a.createElement("p",{className:"LoginPage-title"},"Sign Up"),i.a.createElement(s.Input,{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},type:"text","disable-auto-styling":!0,placeholder:"Name",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},type:"email","disable-auto-styling":!0,placeholder:"Email",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},type:"password","disable-auto-styling":!0,placeholder:"Password",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.password2,onChange:function(t){return e.setState({password2:t.target.value})},type:"password","disable-auto-styling":!0,placeholder:"Repeat password",className:"LoginPage-input"}),this.state.errors&&this.state.errors.map(function(e,t){return i.a.createElement(g,{key:t,message:e})}),i.a.createElement(s.Button,{modifier:"large",className:"SignUpPage-register_btn",onClick:this.handleRegistration},"CREATE ACCOUNT"),i.a.createElement(s.Button,{modifier:"large--quiet",className:"LoginPage-signup_btn",onClick:function(){return e.props.navigator.popPage()}},"I've got an account")),i.a.createElement("img",{src:"team-logo-white.png",className:"LoginPage-logo_bottom",width:"100",alt:"oowee Entertainment"})))}}]),t}(n.Component)),B=(a(72),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={email:"",password:"",token:localStorage.getItem("scavengerHuntTkn"),errors:[]},a.handleLogin=a.handleLogin.bind(Object(m.a)(a)),a.openSignUpPage=a.openSignUpPage.bind(Object(m.a)(a)),a.openLocationsPage=a.openLocationsPage.bind(Object(m.a)(a)),a.state.token&&a.openLocationsPage(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"openLocationsPage",value:function(){this.props.navigator.pushPage({component:I,props:{key:"LOCATIONS_PAGE",token:this.state.token}})}},{key:"handleLogin",value:function(){var e=this,t=this.state,a=(t.errors,t.token,Object(c.a)(t,["errors","token"]));P.a.post("https://cors-anywhere.herokuapp.com/http://159.203.3.180/api/users/login",a).then(function(t){e.setState({token:t.data.token}),localStorage.setItem("scavengerHuntTkn",e.state.token),e.openLocationsPage()}).catch(function(t){return e.setState({errors:t.response.data})})}},{key:"openSignUpPage",value:function(){this.setState({email:"",password:"",errors:[]}),this.props.navigator.pushPage({component:T,props:{key:"SIGNUP_PAGE"}})}},{key:"render",value:function(){var e=this;return i.a.createElement(s.Page,null,i.a.createElement("div",{className:"LoginPage"},i.a.createElement("img",{src:"sask-polytech-logo-compressed.png",width:"200",alt:"Saskatchewan Polytechnic"}),i.a.createElement("section",{className:"LoginPage-form"},i.a.createElement("p",{className:"LoginPage-title"},"Scavenger Hunt"),i.a.createElement(s.Input,{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},type:"email","disable-auto-styling":!0,placeholder:"Email",className:"LoginPage-input"}),i.a.createElement(s.Input,{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},type:"password","disable-auto-styling":!0,placeholder:"Password",className:"LoginPage-input"}),this.state.errors&&this.state.errors.map(function(e,t){return i.a.createElement(g,{key:t,message:e})}),i.a.createElement(s.Button,{modifier:"large",className:"LoginPage-login_btn",onClick:this.handleLogin},"SIGN IN"),i.a.createElement(s.Button,{modifier:"large--quiet",className:"LoginPage-signup_btn",onClick:this.openSignUpPage},"or create new account")),i.a.createElement("img",{src:"team-logo-white.png",className:"LoginPage-logo_bottom",width:"100",alt:"OOWEE"})))}}]),t}(n.Component)),R=(a(73),function(e,t){var a=e.props||{};return a.navigator=t,i.a.createElement(e.component,a)}),M=function(){return i.a.createElement(s.Navigator,{initialRoute:{component:B,props:{key:"LOGIN_PAGE"}},renderPage:R,onDeviceBackButton:function(){return!1}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.052eda99.chunk.js.map