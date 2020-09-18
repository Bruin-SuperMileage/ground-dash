(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{15:function(e,t){},17:function(e,t,a){e.exports=a(34)},22:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),i=a.n(s),l=(a(22),a(3)),c=a(4),m=a(6),o=a(5),p=a(15),u=a(11),d=a.n(u),v={apiKey:p.apiKeyHidden,authDomain:"smv-daq.firebaseapp.com",databaseURL:"https://smv-daq.firebaseio.com",projectId:"smv-daq",storageBucket:"bucket.appspot.com"};d.a.initializeApp(v);var h,f=d.a,b=(a(33),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:"",time:"",daysLeft:0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}));var t=new Date,a=t.toDateString(),n=new Date(2020,3,1),r="Days to Competition: "+Math.ceil((n.getTime()-t.getTime())/864e5);this.setState({date:a,daysLeft:r})}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleTimeString()})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar is-fixed-top is-dark color-dark",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"https://www.bruinracing.com/smv/"},r.a.createElement("h1",null,"Bruin Racing | Super Mileage Vehicle"))),r.a.createElement("div",{className:"navbar-end is-hidden-touch"},r.a.createElement("div",{className:"navbar-item"},"Made by A. Nagarajan, Continued by K. Nguyen"),r.a.createElement("div",{className:"navbar-item"},this.state.daysLeft),r.a.createElement("div",{className:"navbar-item"},this.state.date),r.a.createElement("div",{className:"navbar-item"},this.state.time)))}}]),a}(r.a.Component)),E=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card driver"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"card-content column"},r.a.createElement("div",null,r.a.createElement("figure",{className:"image is-96x96"},r.a.createElement("img",{src:"./images/Caroline.jpg",alt:""})),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},"Caroline"),r.a.createElement("p",{className:"title is-6"},"@CarolineDriver")),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"title is-6"},"I Believe In You!!!")))),r.a.createElement("div",{className:"column"},r.a.createElement("img",{className:"car-image is-pulled-right",src:"./images/car.png",alt:""}))))}}]),a}(r.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"joulemeter"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Accelerometer"),r.a.createElement("p",{className:"subtitle is-6"},"Acceleration X: ",this.props.accelerometer["acceleration x"]," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Acceleration Y: ",this.props.accelerometer["acceleration y"]," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Acceleration Z: ",this.props.accelerometer["acceleration z"]," m/s\xb2")))}}]),a}(r.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"battery"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Environment"),r.a.createElement("p",{className:"subtitle is-6"},"Altitude: ",this.props.environment.altitude," m"),r.a.createElement("p",{className:"subtitle is-6"},"Temperature: ",this.props.environment.temperature," \xb0C")))}}]),a}(r.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"speed"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},"Speed: ",this.props.halleffect.speed," m/s"),r.a.createElement("p",{className:"title speed-title is-6 is-spaced"},"RPM: ",this.props.halleffect.rpm," rpm"),r.a.createElement("p",{className:"subtitle speed-title is-6 is-spaced"},"Throttle: ",this.props.halleffect.throttle,"%")))}}]),a}(r.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"battery"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Magnetometer"),r.a.createElement("p",{className:"subtitle is-6"},"Magnetism X: ",this.props.magnetometer.MagX," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Magnetism Y: ",this.props.magnetometer.MagY," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Magnetism Z: ",this.props.magnetometer.MagZ," m/s\xb2")))}}]),a}(r.a.Component),T=(r.a.Component,r.a.Component,function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"joulemeter"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Gyroscope"),r.a.createElement("p",{className:"subtitle is-6"},"Heading: ",this.props.imu.heading,"\xb0"),r.a.createElement("p",{className:"subtitle is-6"},"Gyroscopic X: ",this.props.imu.GyX," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Gyroscopic Y: ",this.props.imu.GyY," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Gyroscopic Z: ",this.props.imu.GyZ," m/s\xb2"),r.a.createElement("p",{className:"subtitle is-6"},"Pitch: ",this.props.imu.pitch,"\xb0"),r.a.createElement("p",{className:"subtitle is-6"},"Roll: ",this.props.imu.roll,"\xb0")))}}]),a}(r.a.Component)),y=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"joulemeter"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},"Joulemeter"),r.a.createElement("p",{className:"title is-6"},this.props.joulemeter.voltage," V | ",this.props.joulemeter.current," A"),r.a.createElement("p",{className:"title is-6 is-spaced"},"Power: ",this.props.joulemeter.power," W")))}}]),a}(r.a.Component),k=(r.a.Component,function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card car"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(y,{joulemeter:this.props.joulemeter}),r.a.createElement(N,{accelerometer:this.props.accelerometer}),r.a.createElement(g,{environment:this.props.environment})),r.a.createElement("div",{className:"column"},r.a.createElement(j,{halleffect:this.props.halleffect}),r.a.createElement(O,{magnetometer:this.props.magnetometer}),r.a.createElement(T,{imu:this.props.imu}))))}}]),a}(r.a.Component)),S=a(8),L=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={timerOn:!1,timerStart:0,timerStart2:0,timerTime:0,timerTimeReset:0,isRunning:"False",lapNumber:1},n.startTimer=function(){n.setState({timerOn:!0,timerTime:n.state.timerTime,timerTimeReset:n.state.timerTimeReset,timerStart:Date.now()-n.state.timerTime,timerStart2:Date.now()-n.state.timerTimeReset}),n.timer=setInterval((function(){n.setState({timerTime:Date.now()-n.state.timerStart,timerTimeReset:Date.now()-n.state.timerStart2})}),10)},n.stopTimer=function(){n.setState({timerOn:!1}),clearInterval(n.timer)},n.resetTimer=function(){n.setState({timerStart:Date.now(),timerTime:0})},n.resetTimer2=function(){n.setState({timerStart2:Date.now(),timerTimeReset:0})},n.componentDidMount=function(){"True"===n.props.lap.drivingLap&&("True"===n.props.lap.drivingLap?(n.resetTimer(),n.startTimer(),n.setState({isRunning:"True"})):"False"===n.props.lap.drivingLap&&(n.stopTimer(),n.setState({isRunning:"False"})))},n.componentDidUpdate=function(){var e=n.state,t=e.isRunning,a=e.lapNumber;t!==n.props.lap.drivingLap&&("True"===n.props.lap.drivingLap?(n.startTimer(),n.resetTimer(),n.setState({isRunning:"True"})):"False"===n.props.lap.drivingLap&&(n.stopTimer(),n.setState({isRunning:"False"}))),a!==n.props.lap.Lap&&(n.resetTimer2(),n.setState({lapNumber:n.props.lap.Lap}))},n.startTimer=n.startTimer.bind(Object(S.a)(n)),n.stopTimer=n.stopTimer.bind(Object(S.a)(n)),n.resetTimer=n.resetTimer.bind(Object(S.a)(n)),n.resetTimer2=n.resetTimer2.bind(Object(S.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e,t,a={},n=f.database();n.ref("Latest Trial").on("value",(function(t){e=t.val()})),n.ref(e).on("value",(function(e){t=e.child("lap times").exists()})),n.ref(e+"/lap times").on("value",(function(e){a=e.val()}));var s="",i="",l="0",c="0";!0===t&&(l=a.Slowest,c=a.Fastest,s=a[l],i=a[c]);var m=this.state,o=m.timerTime,p=m.timerTimeReset,u=("0"+Math.floor(p/10)%100).slice(-2),d=("0"+Math.floor(p/1e3)%60).slice(-2),v=("0"+Math.floor(p/6e4)%60).slice(-2),h=18e5-o,b=("0"+Math.floor(h/10)%100).slice(-2),E=("0"+Math.floor(h/1e3)%60).slice(-2),N=("0"+Math.floor(h/6e4)%60).slice(-2);return r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-6"},"Lap: ",this.props.lap.Lap),r.a.createElement("p",{className:"subtitle is-6"},"Lap Time: ",v,":",d,".",u," "),r.a.createElement("p",{className:"subtitle is-6"},"Time Remaining: ",N,":",E,".",b," "))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"subtitle is-6"},"Slowest Lap: ",l," ",s),r.a.createElement("p",{className:"subtitle is-6"},"Fastest Lap: ",c," ",i)))))}}]),a}(r.a.Component),w=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"GPS"},r.a.createElement("div",{className:"card-content GPS"},r.a.createElement("p",{className:"title is-6"},"Latitude: ",this.props.gps.lat),r.a.createElement("p",{className:"title is-6"},"Longitude: ",this.props.gps.long)))}}]),a}(r.a.Component),M=a(12),C="",D="",R="",x="",G=[],F=[],I=[];function A(e){var t,a,n;return a=Math.floor(e/1e3),t=Math.floor(a/60),a%=60,n=e%1e3,(t%=60).pad(2)+":"+a.pad(2)+"."+n.pad(3)}Number.prototype.pad=function(e){for(var t=String(this);t.length<(e||2);)t="0"+t;return t};var P=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).lap=n.lap.bind(Object(S.a)(n)),n.start=n.start.bind(Object(S.a)(n)),n.stop=n.stop.bind(Object(S.a)(n)),n}return Object(c.a)(a,[{key:"lap",value:function(){var e,t=f.database();t.ref("Latest Trial").on("value",(function(t){e=t.val()})),t.ref("Lap").on("value",(function(e){h=e.val()}));var a={};a.Lap=h+1;var n,r=Date.now();G.push(r),n=1===G.length?r-C:r-G[G.length-2],F.push(n);var s={};s.Fastest=F.indexOf(Math.min.apply(Math,Object(M.a)(F)))+1,s.Slowest=F.indexOf(Math.max.apply(Math,Object(M.a)(F)))+1;var i=A(n);I.push(i),f.database().ref().update(a),s[h-1]=i,f.database().ref(e+"/lap times").update(s),this.forceUpdate()}},{key:"start",value:function(){var e={drivingLap:"True",Lap:1};f.database().ref().update(e),C=Date.now();var t=new Date(C);D=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),R="",x="",G=[],F=[],I=[],this.forceUpdate()}},{key:"stop",value:function(){var e={drivingLap:"False"};f.database().ref().update(e),R=Date.now(),x=A(R-C),this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-fifth"},r.a.createElement("button",{onClick:this.start,className:"button is-primary control-button"},"Start")),r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"title is-5"},"Time: ",D))),r.a.createElement("hr",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-fifth"},r.a.createElement("button",{onClick:this.stop,className:"button is-danger control-button"},"Stop")),r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"title is-5"},"Time: ",x))),r.a.createElement("hr",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-fifth"},r.a.createElement("button",{onClick:this.lap,className:"button is-info control-button"},"Lap")),r.a.createElement("div",{className:"column padding-left"},r.a.createElement("ol",{className:"numInside"},r.a.createElement("p",{className:"title is-5"},"Time: ",I.map((function(e){return r.a.createElement("li",null,e)}))))))))}}]),a}(r.a.Component),Y=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card track"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},"Parking Garage"),r.a.createElement("p",{className:"title is-6"},this.props.track["Latest Trial"]," ")),r.a.createElement(w,{gps:this.props.gps}))),r.a.createElement(L,{lap:this.props.lap}),r.a.createElement("div",{className:"card-image"},r.a.createElement(P,null)))}}]),a}(r.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={all:{},latestTime:"",latestTrial:"",latestData:{},accelerometer:{},battery:{},environment:{},gps:{},halleffect:{},imu:{},joulemeter:{},lap:{},lapTimes:{},magnetometer:{},motor:{},speed:{},track:{}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=f.database();t.ref().on("value",(function(t){var a=t.val();e.setState({all:a})})),t.ref("Latest Time").on("value",(function(a){var n=a.val();t.ref("Latest Trial").on("value",(function(a){var r=a.val();t.ref(r).child(n).on("value",(function(t){var a,n,r,s,i,l,c,m,o,p,u,d,v={};!0===t.exists()?(console.log("if"),a=(v=t.val()).accelerometer,n=v.battery,r=v.environment,s=v.gps,i=v["hall-effect"],l=v.gyroscope,c=v.joulemeter,m=v.lap,o=v["lap times"],p=v.magnetometer,u=v.motor,d=v.speed):(console.log("else"),a=0,n=0,r=0,s=0,i=0,l=0,c=0,m=0,o=0,p=0,u=0,d=0),e.setState({latestData:v,accelerometer:a,battery:n,environment:r,gps:s,halleffect:i,imu:l,joulemeter:c,lap:m,lapTimes:o,magnetometer:p,motor:u,speed:d})})),e.setState({latestTrial:r})})),e.setState({latestTime:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"canvas color-dark",style:{paddingTop:"45px"}},r.a.createElement(b,null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement(E,null),r.a.createElement(k,{joulemeter:this.state.joulemeter,environment:this.state.environment,magnetometer:this.state.magnetometer,imu:this.state.imu,accelerometer:this.state.accelerometer,halleffect:this.state.halleffect})),r.a.createElement("div",{className:"column"},r.a.createElement(Y,{gps:this.state.gps,lap:this.state.all,track:this.state.all}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c2459fac.chunk.js.map