(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(4),c=t.n(i),l=(t(10),t(2)),s=t(1);function o(e){if(null===e)return null;var a=Math.floor(e).toString().padStart(2,"0");return"".concat(a,":00")}var u=function(e){var a,t=e.isTimerRunning,n=e.session,i=e.playPause,c=e.focusMinusClickHandler,s=e.breakMinusClickHandler,u=e.focusPlusClickHandler,m=e.breakPlusClickHandler,b=e.stopClickHandler;return r.a.createElement("div",{className:"pomodoro"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",o(n.focusDuration)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",onClick:c,disabled:n.label},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",onClick:u,disabled:n.label},r.a.createElement("span",{className:"oi oi-plus"}))))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",o(n.breakDuration)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:s,disabled:n.label},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:m,disabled:n.label},r.a.createElement("span",{className:"oi oi-plus"}))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:i},r.a.createElement("span",{className:(a={oi:!0,"oi-media-play":!t,"oi-media-pause":t},Object.entries(a).reduce((function(e,a){var t=Object(l.a)(a,2),n=t[0],r=t[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"stop",title:"Stop the session",onClick:b,disabled:!n.label},r.a.createElement("span",{className:"oi oi-media-stop"}))))))};var m=function(e){var a=e.session,t=e.timerText,n=e.isTimerRunning;return a.label?r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},a.label," for ",o(t)," minutes"),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},function(e){var a=Math.floor(e%3600/60).toString().padStart(2,"0"),t=Math.round(e%60).toString().padStart(2,"0");return"".concat(a,":").concat(t)}(a.timeRemaining)," remaining"),r.a.createElement("p",{hidden:!(a&&!n)},"PAUSED")):null};var b=function(e){var a=e.session,t=e.isTimerRunning,n="Focusing"===a.label?a.focusDuration:a.breakDuration,i=function(e){return"Focusing"===a.label?100*((60*a.focusDuration-e)/(60*a.focusDuration)):100*((60*a.breakDuration-e)/(60*a.breakDuration))};return r.a.createElement("div",{hidden:!a.label},r.a.createElement("div",{className:"row mb-2"},r.a.createElement(m,{session:a,timerText:n,isTimerRunning:t})),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":i(a.timeRemaining),style:{width:"".concat(i(a.timeRemaining),"%")}})))))};function d(e){var a=Math.max(0,e.timeRemaining-1);return Object(s.a)(Object(s.a)({},e),{},{timeRemaining:a})}var p=function(){var e={label:null,timeRemaining:null,focusDuration:25,breakDuration:5},a=Object(n.useState)(!1),t=Object(l.a)(a,2),i=t[0],c=t[1],o=Object(n.useState)(Object(s.a)({},e)),m=Object(l.a)(o,2),p=m[0],f=m[1];return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){return 0===p.timeRemaining?(new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play(),f(function(e){return function(a){return"Focusing"===a.label?Object(s.a)(Object(s.a)({},e),{},{label:"On Break",timeRemaining:60*e.breakDuration}):Object(s.a)(Object(s.a)({},e),{},{label:"Focusing",timeRemaining:60*e.focusDuration})}}(p))):f(d)}),i?1e3:null),r.a.createElement("div",null,r.a.createElement(u,{isTimerRunning:i,session:p,playPause:function(){c((function(e){var a=!e;return a&&f(Object(s.a)(Object(s.a)({},p),{},{label:"Focusing",timeRemaining:60*p.focusDuration})),a}))},focusMinusClickHandler:function(){return f(Object(s.a)(Object(s.a)({},p),{},{focusDuration:Math.max(5,p.focusDuration-5)}))},breakMinusClickHandler:function(){return f(Object(s.a)(Object(s.a)({},p),{},{breakDuration:Math.max(1,p.breakDuration-1)}))},focusPlusClickHandler:function(){return f(Object(s.a)(Object(s.a)({},p),{},{focusDuration:Math.min(60,p.focusDuration+5)}))},breakPlusClickHandler:function(){return f(Object(s.a)(Object(s.a)({},p),{},{breakDuration:Math.min(15,p.breakDuration+1)}))},stopClickHandler:function(){f(Object(s.a)({},e)),c(!1)}}),r.a.createElement(b,{session:p,isTimerRunning:i}))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(p,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},5:function(e,a,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.fe6d492a.chunk.js.map