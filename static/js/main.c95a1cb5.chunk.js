(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(75),s=a.n(i),l=(a(87),a(44)),c=a.n(l),o=a(76),m=a(1),p=a(4),u=a(5),d=a(3),v=a(2),h=a(77),f=a(45),b=a.n(f),g=(a(18),{apiKey:h.apiKeyHidden,authDomain:"smv-daq.firebaseapp.com",databaseURL:"https://smv-daq.firebaseio.com",projectId:"smv-daq",storageBucket:"bucket.appspot.com"});b.a.initializeApp(g);var E,N=b.a,T=(a(90),r.a.Component,function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={date:"",time:"",daysLeft:0},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}));var t=new Date,a=t.toDateString(),n=new Date(2022,4,9),r="Days to Competition: "+Math.ceil((n.getTime()-t.getTime())/864e5);this.setState({date:a,daysLeft:r})}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleTimeString()})}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar is-fixed-top is-dark color-dark",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"https://www.bruinracing.com/smv/"},r.a.createElement("h1",null,"Bruin SuperMileage"))),r.a.createElement("div",{className:"navbar-end is-hidden-touch"},r.a.createElement("div",{className:"navbar-item"},this.state.daysLeft),r.a.createElement("div",{className:"navbar-item"},this.state.date),r.a.createElement("div",{className:"navbar-item"},this.state.time)))}}]),a}(r.a.Component)),j=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card driver"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"card-content column"},r.a.createElement("div",null,r.a.createElement("figure",{className:"image is-96x96"},r.a.createElement("img",{src:"/ground-dash/images/Caroline.jpg",alt:""})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},"Caroline"),r.a.createElement("p",{className:"title is-6"},"@CarolineDriver")),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"title is-6"},"I Believe In You!!!")))),r.a.createElement("div",{className:"column"},r.a.createElement("img",{className:"car-image is-pulled-right",src:"/ground-dash/images/car.png",alt:"Not found"}))))}}]),a}(r.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=Math.pow(Math.pow(this.props.accelerometer["acceleration x"],2)+Math.pow(this.props.accelerometer["acceleration y"],2)+Math.pow(this.props.accelerometer["acceleration z"],2),.5).toFixed(3);return r.a.createElement("div",{className:"joulemeter"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Accelerometer"),r.a.createElement("p",{className:"subtitle is-6"},"Acceleration X: ",this.props.accelerometer["acceleration x"]," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Acceleration Y: ",this.props.accelerometer["acceleration y"]," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Acceleration Z: ",this.props.accelerometer["acceleration z"]," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Acceleration: ",e," m/s\xb2")))}}]),a}(r.a.Component),S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"battery"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Environment"),r.a.createElement("p",{className:"subtitle is-6"},"Altitude: ",this.props.environment.altitude," m"),r.a.createElement("p",{className:"subtitle is-6"},"Temperature: ",this.props.environment.temperature," \xb0C")))}}]),a}(r.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"speed"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},"Speed: ",this.props.halleffect.speed," m/s"),r.a.createElement("p",{className:"title speed-title is-6 is-spaced"},"RPM: ",this.props.halleffect.rpm," rpm"),r.a.createElement("p",{className:"subtitle speed-title is-6 is-spaced"},"Throttle: ",this.props.halleffect.throttle,"%")))}}]),a}(r.a.Component),w=(r.a.Component,function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"joulemeter"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Gyroscope"),r.a.createElement("p",{className:"subtitle is-6"},"Gyroscopic X: ",this.props.imu.GyX," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Gyroscopic Y: ",this.props.imu.GyY," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Gyroscopic Z: ",this.props.imu.GyZ," m/s\xb2")))}}]),a}(r.a.Component)),k=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"joulemeter"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},"Joulemeter"),r.a.createElement("p",{className:"title is-6"},this.props.joulemeter.voltage," V | ",this.props.joulemeter.current," A"),r.a.createElement("p",{className:"title is-6 is-spaced"},"Power: ",this.props.joulemeter.power," W")))}}]),a}(r.a.Component),D=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card car"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(k,{joulemeter:this.props.joulemeter}),r.a.createElement(O,{accelerometer:this.props.accelerometer}),r.a.createElement(S,{environment:this.props.environment})),r.a.createElement("div",{className:"column"},r.a.createElement(y,{halleffect:this.props.halleffect}),r.a.createElement(w,{imu:this.props.imu}))))}}]),a}(r.a.Component),L=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={timerOn:!1,timerStart:0,timerStart2:0,timerTime:0,timerTimeReset:0,isRunning:"False",lapNumber:1},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerTimeReset:n.state.timerTimeReset,timerStart:Date.now()-n.state.timerTime,timerStart2:Date.now()-n.state.timerTimeReset}),n.timer=setInterval((function(){n.setState({timerTime:Date.now()-n.state.timerStart,timerTimeReset:Date.now()-n.state.timerStart2})}),10)},n.stopTimer=function(){n.setState({timerOn:!1}),clearInterval(n.timer)},n.resetTimer=function(){n.setState({timerStart:Date.now(),timerTime:0})},n.resetTimer2=function(){n.setState({timerStart2:Date.now(),timerTimeReset:0})},n.componentDidMount=function(){"True"===n.props.lap.drivingLap&&("True"===n.props.lap.drivingLap?(n.resetTimer(),n.startTimer(),n.setState({isRunning:"True"})):"False"===n.props.lap.drivingLap&&(n.stopTimer(),n.setState({isRunning:"False"})))},n.componentDidUpdate=function(){var e=n.state,t=e.isRunning,a=e.lapNumber;t!==n.props.lap.drivingLap&&("True"===n.props.lap.drivingLap?(n.startTimer(),n.resetTimer(),n.setState({isRunning:"True"})):"False"===n.props.lap.drivingLap&&(n.stopTimer(),n.setState({isRunning:"False"}))),a!==n.props.lap.Lap&&(n.resetTimer2(),n.setState({lapNumber:n.props.lap.Lap}))},n.startTimer=n.startTimer.bind(Object(u.a)(n)),n.stopTimer=n.stopTimer.bind(Object(u.a)(n)),n.resetTimer=n.resetTimer.bind(Object(u.a)(n)),n.resetTimer2=n.resetTimer2.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"render",value:function(){var e,t,a={},n=N.database();n.ref("Latest Trial").on("value",(function(t){e=t.val()})),n.ref(e).on("value",(function(e){t=e.child("lap times").exists()})),n.ref(e+"/lap times").on("value",(function(e){a=e.val()}));var i="",s="",l="0",c="0";!0===t&&(l=a.Slowest,c=a.Fastest,i=a[l],s=a[c]);var o=this.state,m=o.timerTime,p=o.timerTimeReset,u=("0"+Math.floor(p/10)%100).slice(-2),d=("0"+Math.floor(p/1e3)%60).slice(-2),v=("0"+Math.floor(p/6e4)%60).slice(-2),h=18e5-m,f=("0"+Math.floor(h/10)%100).slice(-2),b=("0"+Math.floor(h/1e3)%60).slice(-2),g=("0"+Math.floor(h/6e4)%60).slice(-2);return r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-6"},"Lap: ",this.props.lap.Lap),r.a.createElement("p",{className:"subtitle is-6"},"Lap Time: ",v,":",d,".",u," "),r.a.createElement("p",{className:"subtitle is-6"},"Time Remaining: ",g,":",b,".",f," "))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle is-6"},"Slowest Lap: ",l," ",i),r.a.createElement("p",{className:"subtitle is-6"},"Fastest Lap: ",c," ",s)))))}}]),a}(r.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"GPS"},r.a.createElement("div",{className:"card-content GPS"},r.a.createElement("p",{className:"title is-6"},"Latitude: ",this.props.gps.latitude),r.a.createElement("p",{className:"title is-6"},"Longitude: ",this.props.gps.longitude)))}}]),a}(r.a.Component),M=a(47),R="",x="",F="",I="",V=[],G=[],U=[],A=N.database();function P(e){var t,a,n;return a=Math.floor(e/1e3),t=Math.floor(a/60),a%=60,n=e%1e3,(t%=60).pad(2)+":"+a.pad(2)+"."+n.pad(3)}Number.prototype.pad=function(e){for(var t=String(this);t.length<(e||2);)t="0"+t;return t};var z=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).lap=n.lap.bind(Object(u.a)(n)),n.start=n.start.bind(Object(u.a)(n)),n.stop=n.stop.bind(Object(u.a)(n)),n}return Object(p.a)(a,[{key:"lap",value:function(){var e;if(A.ref("Running").on("value",(function(t){e=t.val()})),"True"===e){var t;A.ref("Latest Trial").on("value",(function(e){t=e.val()})),A.ref("Lap").on("value",(function(e){E=e.val()}));var a={};a.Lap=E+1;var n,r=Date.now();V.push(r),n=1===V.length?r-R:r-V[V.length-2],G.push(n);var i={};i.Fastest=G.indexOf(Math.min.apply(Math,Object(M.a)(G)))+1,i.Slowest=G.indexOf(Math.max.apply(Math,Object(M.a)(G)))+1;var s=P(n);U.push(s),N.database().ref().update(a),i[E-1]=s,N.database().ref(t+"/lap times").update(i),this.forceUpdate()}}},{key:"start",value:function(){var e;if(A.ref("Running").on("value",(function(t){e=t.val()})),"True"===e){var t={drivingLap:"True",Lap:1};N.database().ref().update(t),R=Date.now();var a=new Date(R);x=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),F="",I="",V=[],G=[],U=[],this.forceUpdate()}}},{key:"stop",value:function(){var e,t;if(A.ref("Running").on("value",(function(t){e=t.val()})),A.ref("drivingLap").on("value",(function(e){t=e.val()})),"True"===e&&"True"===t){var a={drivingLap:"False"};N.database().ref().update(a),F=Date.now(),I=P(F-R),this.forceUpdate()}}},{key:"render",value:function(){return r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-fifth"},r.a.createElement("button",{onClick:this.start,className:"button is-primary control-button"},"Start")),r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"title is-5"},"Time: ",x))),r.a.createElement("hr",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-fifth"},r.a.createElement("button",{onClick:this.stop,className:"button is-danger control-button"},"Stop")),r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"title is-5"},"Time: ",I))),r.a.createElement("hr",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-fifth"},r.a.createElement("button",{onClick:this.lap,className:"button is-info control-button"},"Lap")),r.a.createElement("div",{className:"column padding-left"},r.a.createElement("ol",{className:"numInside"},r.a.createElement("p",{className:"title is-5"},"Time: ",U.map((function(e){return r.a.createElement("li",{key:e},e)}))))))))}}]),a}(r.a.Component),B=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card track"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},"Parking Garage"),r.a.createElement("p",{className:"title is-6"},this.props.track["Latest Trial"]," ")),r.a.createElement(C,{gps:this.props.gps}))),r.a.createElement(L,{lap:this.props.lap}),r.a.createElement("div",{className:"card-image"},r.a.createElement(z,null)))}}]),a}(r.a.Component),W=a(78);a(185),a(191),r.a.Component;function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Y=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){this.props.dialogState1.split("|")[1].split(" ").map(H).join(" "),this.props.dialogState2.split("|")[1].split(" ").map(H).join(" ");return r.a.createElement("div",{className:"groundDash canvas color-dark",style:{paddingTop:"45px"}},r.a.createElement(T,null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(j,null),r.a.createElement(D,{joulemeter:this.props.joulemeter,environment:this.props.environment,magnetometer:this.props.magnetometer,imu:this.props.imu,accelerometer:this.props.accelerometer,halleffect:this.props.halleffect})),r.a.createElement("div",{className:"column"},r.a.createElement(B,{gps:this.props.gps,lap:this.props.lap,track:this.props.track}))))}}]),a}(r.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={timerOn:!1,timerStart:0,timerTime:0,isRunning:"False",lapNumber:1},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerStart:Date.now()-n.state.timerTime,isRunning:"True"}),n.timer=setInterval((function(){n.setState({timerTime:Date.now()-n.state.timerStart})}),10)},n.stopTimer=function(){n.setState({timerOn:!1,isRunning:"False"}),clearInterval(n.timer)},n.resetTimer=function(){n.setState({timerStart:Date.now(),timerTime:0})},n.componentDidMount=function(){"True"===n.props.lap.drivingLap&&("True"===n.props.lap.drivingLap?(n.resetTimer(),n.startTimer()):"False"===n.props.lap.drivingLap&&n.stopTimer())},n.componentDidUpdate=function(){var e=n.state,t=e.isRunning,a=e.lapNumber;t!==n.props.lap.drivingLap&&("True"===n.props.lap.drivingLap?(n.startTimer(),n.resetTimer(),n.setState({isRunning:"True"})):"False"===n.props.lap.drivingLap&&(n.stopTimer(),n.setState({isRunning:"False"}))),a!==n.props.lap.Lap&&(n.resetTimer(),n.setState({lapNumber:n.props.lap.Lap}))},n.render=function(){var e=n.state.timerTime,t=("0"+Math.floor(e/10)%100).slice(-2),a=("0"+Math.floor(e/1e3)%60).slice(-2),i=("0"+Math.floor(e/6e4)%60).slice(-2),s=26e4-e,l=("0"+Math.floor(s/10)%100).slice(-2),c=("0"+Math.floor(s/1e3)%60).slice(-2),o=("0"+Math.floor(s/6e4)%60).slice(-2);return r.a.createElement("div",null,r.a.createElement("div",{className:"lap"},r.a.createElement("div",{className:"card-content columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Lap ",n.props.lap.Lap),r.a.createElement("p",null,"Remaining")),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,i," : ",a," : ",t),r.a.createElement("p",null,o," : ",c," : ",l)))))},n.startTimer=n.startTimer.bind(Object(u.a)(n)),n.stopTimer=n.stopTimer.bind(Object(u.a)(n)),n.resetTimer=n.resetTimer.bind(Object(u.a)(n)),n}return a}(r.a.Component),J=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"speed has-text-centered big"},parseFloat(2.23694*this.props.speed.speed).toFixed(1)),r.a.createElement("p",{className:"speed has-text-centered km"},"mph")))}}]),a}(r.a.Component),X=a(79),Z=a.n(X),K=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column has-text-centered"},r.a.createElement(Z.a,{minValue:0,maxValue:70,needleHeightRatio:.8,maxSegmentLabels:8,segments:5555,value:this.props.speedometer.speed,textColor:"white",width:1e3,height:450,needleTransition:"easePolyIn",ringWidth:120,paddingVertical:150,valueTextFontSize:"0",labelFontSize:"50",paddingHorizontal:100})))}}]),a}(r.a.Component),$=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"canvas color-dark driverDash",style:{paddingTop:"45px"}},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column is-one-third"},r.a.createElement(J,{speed:this.props.speed})),r.a.createElement("div",{className:"column"},r.a.createElement(K,{speedometer:this.props.speed}),r.a.createElement(q,{lap:this.props.lap}))))}}]),a}(r.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).checkDifference=function(){var e=N.database(),t=new Date;if(Math.abs(n.state.latestTimeUpdate-t)>2500){var a={Running:"False"};e.ref().update(a),n.setState({pause:!0})}},n.changeDialogState=n.changeDialogState.bind(Object(u.a)(n)),n.changeDialogStateTwo=n.changeDialogStateTwo.bind(Object(u.a)(n)),n.state={all:{},latestTime:"",latestTrial:"",latestData:{},accelerometer:{},environment:{},gps:{},halleffect:{},imu:{},joulemeter:{},lapTimes:{},magnetometer:{},motor:{},speed:{},track:{},latestTimeUpdate:new Date,which:"ground",labels:[],graphOneVals:0,graphTwoVals:0,dialogState1:"|Pick a graph!",dialogState2:"|Pick a graph!",currentLap:1,lapLabels:[],pause:!0},n}return Object(p.a)(a,[{key:"changeDialogState",value:function(e){this.setState({dialogState1:e.target.value})}},{key:"changeDialogStateTwo",value:function(e){this.setState({dialogState2:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=N.database()).ref().on("value",(function(e){var t=e.val(),n=t.Lap;a.setState({all:t,currentLap:n})})),t.ref("Running").on("value",(function(e){"True"===e.val()&&a.setState({pause:!1})})),t.ref("Latest Time").on("value",(function(e){var n=e.val();t.ref("Latest Trial").on("value",(function(e){var r=e.val();t.ref(r).child(n).on("value",(function(e){var t,r,i,s,l,c,o,m,p,u,d,v=a.state.labels,h=a.state.graphTwoVals;v.push(n),!0===e.exists()?(t=(d=e.val()).accelerometer,r=d.environment,i=d.gps,s=d["hall-effect"],l=d.gyroscope,c=d.joulemeter,o=d["lap times"],m=d.magnetometer,p=d.motor,u=d.speed):(t=0,r=0,i=0,s=0,l=0,c=0,o=0,m=0,p=0,u=0),a.setState({latestData:d,accelerometer:t,environment:r,gps:i,halleffect:s,imu:l,joulemeter:c,lapTimes:o,magnetometer:m,motor:p,speed:u,labels:v,graphTwoVals:h})})),a.setState({latestTrial:r,latestTime:n})}))})),this.interval=setInterval(this.checkDifference,5e3);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.which;var e=this.changeDialogState,t=this.changeDialogStateTwo;return r.a.createElement("div",null,r.a.createElement(_,{props:this,changeDialogState:e,changeDialogStateTwo:t}),void 0)}}]),a}(r.a.Component);function _(e){var t=e.props.state,a=t.which,n=t.joulemeter,i=t.environment,s=t.magnetometer,l=t.imu,c=t.accelerometer,o=t.halleffect,m=t.gps,p=t.all,u=t.labels,d=t.graphOneVals,v=t.graphTwoVals,h=t.dialogState1,f=t.dialogState2,b=t.lapLabels,g=t.pause,E=e.changeDialogState,N=e.changeDialogStateTwo;return"ground"===a?r.a.createElement(Y,{joulemeter:n,environment:i,magnetometer:s,imu:l,accelerometer:c,halleffect:o,gps:m,lap:p,track:p,labels:u,graphTwoVals:v,graphOneVals:d,changeDialogState:E,changeDialogStateTwo:N,dialogState1:h,dialogState2:f,lapLabels:b,pause:g}):"driver"===a?r.a.createElement($,{speed:o,speedometer:o,lap:p}):void 0}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t){},82:function(e,t,a){e.exports=a(209)},87:function(e,t,a){},90:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.c95a1cb5.chunk.js.map