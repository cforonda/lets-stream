(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{49:function(e,t,n){e.exports=n(98)},54:function(e,t,n){},55:function(e,t,n){},85:function(e,t){},88:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(42),c=n.n(r),i=(n(54),n(55),n(46)),l=n(43),u=n.n(l),d=n(44),s=n(48),m=n(47),p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){if(window.YT)e.loadVideo();else{var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=e.loadVideo;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}},e.loadVideo=function(){var t=e.props.id;e.player=new window.YT.Player("youtube-player-".concat(t),{videoId:t,events:{onReady:e.onPlayerReady}})},e.onPlayerReady=function(e){e.target.playVideo()},e.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"youtube-player-".concat(e.props.id)}))},e}return n}(o.a.PureComponent);n(88),n(89).config();var f=function(e){e.routerProps;var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object({NODE_ENV:"production",PUBLIC_URL:"/lets-watch-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_ENDPOINT||"https://lets-watch-backend.herokuapp.com/";return console.log(l),Object(a.useEffect)((function(){u()(l).on("FromAPI",(function(e){c(e)}))}),[]),o.a.createElement("div",{className:"screen"},o.a.createElement("p",null,"It's ",o.a.createElement("time",{dateTime:r},r)),o.a.createElement(p,{id:"Qll7IHN0I4Q"}))},h=n(1);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(f,{routerProps:e})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(22);n(96);var w=function(){return o.a.createElement("header",null,"Let's Watch Something Together!")};n(97);var y=function(){return o.a.createElement("footer",null,"Let's Watch - Created by Stephen White and Champ Foronda \xa9",(new Date).getFullYear())};c.a.render(o.a.createElement(E.a,{basename:"/lets-watch-frontend"},o.a.createElement(w,null),o.a.createElement(v,null),o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.71c131b4.chunk.js.map