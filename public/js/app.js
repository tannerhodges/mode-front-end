!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=24)}([function(t,e){t.exports=function(){function t(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.msMatchesSelector||t.matchesSelector;return!!n&&n.call(t,e)}return t}()},function(t,e,n){var r=n(3);t.exports=function(){function t(t,e){if("function"==typeof jQuery&&t instanceof jQuery&&(t=t[0]),!t)return!1;var n=t.getBoundingClientRect(),o=r.width(),i=r.height();if(e){var u=n.top>=i&&n.bottom>=i||n.top<=0&&n.bottom<=0,c=n.left>=o&&n.right>=o||n.left<=0&&n.right<=0;return!(u||c)}return n.top>=0&&n.left>=0&&n.bottom<=r.height()&&n.right<=r.width()}return t}()},function(t,e,n){var r=n(1);t.exports=function(){function t(t){"function"==typeof jQuery&&t instanceof jQuery&&(t=t[0]);var e=t.getBoundingClientRect(),n=e.width>0&&e.height>0;return n&&r(t,!0)}return t}()},function(t,e){t.exports=function(){function t(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function e(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}return{width:t,height:e}}()},function(t,e){t.exports=function(t){function e(e){var n="";return e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/),e[2]!==t?(n=e[2].split(/[^0-9a-z_\-]/i),n=n[0]):n=e,n}return e}()},function(t,e){t.exports=function(t,e,n){var r=function(){var t=[],e=!1;return function(n,r){if(n===!0)for(e=!0;t.length;)t.shift()();else"function"==typeof n&&(e?n():t[r?"unshift":"push"](n))}}();return t.onYouTubeIframeAPIReady=function(){r(!0)},function(){var t=e.createElement("script");t.src="https://www.youtube.com/iframe_api";var n=e.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}(),r}(window,document)},function(t,e,n){t.exports=function(){return{getYouTubeId:n(4),player:n(23),youTubeReady:n(5)}}()},function(t,e){t.exports=function(){function t(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Array.prototype.map.apply(t,e)}return t}()},function(t,e,n){var r,o;!function(i,u){r=u,o="function"==typeof r?r.call(e,n,e,t):r,!(void 0!==o&&(t.exports=o))}(this,function(){function t(t,e){var n=Object.prototype.toString.call(t),r="[object Array]"===n||"[object NodeList]"===n||"[object HTMLCollection]"===n||"undefined"!=typeof jQuery&&t instanceof jQuery||"undefined"!=typeof Elements&&t instanceof Elements,o=0,i=t.length;if(r)for(;o<i;o++)e(t[o]);else e(t)}var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,20)},n=function(r,o){function i(){var t=[];this.add=function(e){t.push(e)};var e,n;this.call=function(){for(e=0,n=t.length;e<n;e++)t[e].call()},this.remove=function(r){var o=[];for(e=0,n=t.length;e<n;e++)t[e]!==r&&o.push(t[e]);t=o},this.length=function(){return t.length}}function u(t,e){return t.currentStyle?t.currentStyle[e]:window.getComputedStyle?window.getComputedStyle(t,null).getPropertyValue(e):t.style[e]}function c(t,n){if(t.resizedAttached){if(t.resizedAttached)return void t.resizedAttached.add(n)}else t.resizedAttached=new i,t.resizedAttached.add(n);t.resizeSensor=document.createElement("div"),t.resizeSensor.className="resize-sensor";var r="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",o="position: absolute; left: 0; top: 0; transition: 0s;";t.resizeSensor.style.cssText=r,t.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+r+'"><div style="'+o+'"></div></div><div class="resize-sensor-shrink" style="'+r+'"><div style="'+o+' width: 200%; height: 200%"></div></div>',t.appendChild(t.resizeSensor),"static"==u(t,"position")&&(t.style.position="relative");var c=t.resizeSensor.childNodes[0],s=c.childNodes[0],a=t.resizeSensor.childNodes[1],f=function(){s.style.width=1e5+"px",s.style.height=1e5+"px",c.scrollLeft=1e5,c.scrollTop=1e5,a.scrollLeft=1e5,a.scrollTop=1e5};f();var l=!1,d=function(){t.resizedAttached&&(l&&(t.resizedAttached.call(),l=!1),e(d))};e(d);var p,h,y,v,g=function(){(y=t.offsetWidth)==p&&(v=t.offsetHeight)==h||(l=!0,p=y,h=v),f()},m=function(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n)};m(c,"scroll",g),m(a,"scroll",g)}t(r,function(t){c(t,o)}),this.detach=function(t){n.detach(r,t)}};return n.detach=function(e,n){t(e,function(t){t.resizedAttached&&"function"==typeof n&&(t.resizedAttached.remove(n),t.resizedAttached.length())||t.resizeSensor&&(t.removeChild(t.resizeSensor),delete t.resizeSensor,delete t.resizedAttached)})},n})},function(t,e,n){var r=n(2);t.exports=function(t,e,n){"use strict";function o(t,e){this.remaining=t,this.callback=e,this.loop.call(this)}return!(!t.requestAnimationFrame||!e.documentElement.classList)&&(o.prototype.loop=function(){this.remaining=this.check(this.remaining),this.remaining.length>0&&requestAnimationFrame(this.loop.bind(this))},o.prototype.check=function(t){for(var e=this,n=[],o=0;o<t.length;o++)r(t[o])?e.callback(t[o]):n.push(t[o]);return n},o)}(window,document)},function(t,e,n){var r=n(0);t.exports=function(){function t(t,e,n,o){return o=o||0,t===e?o:(n?r(t,n)&&o++:o++,t.parentNode&&this.childDepth(t.parentNode,e,n,o))}return t}()},function(t,e){function n(){return"dom-"+(new Date).getTime()}t.exports=function(){function t(t,e){if(!e)return t.children;var r=n();t.setAttribute(r,"");var o=t.parentNode.querySelectorAll("["+r+"] "+e);return t.removeAttribute(r),o}return t}()},function(t,e){t.exports=function(){function t(t,e,n){"undefined"==typeof n&&(n="add"),Array.isArray(e)||(e=e.split(/\s+/)),e.forEach(function(e){t.classList[n](e)})}return t}()},function(t,e,n){var r=n(0);t.exports=function(){function t(t,e){for(;t&&!r(t,e);)t=t.parentNode;return t||null}return t}()},function(t,e){t.exports=function(){function t(t){for(var e=0;t=t.previousElementSibling;)e++;return e}return t}()},function(t,e,n){t.exports=function(){return{childDepth:n(10),children:n(11),classList:n(12),closest:n(13),getIndex:n(14),isInBounds:n(16),isInViewport:n(1),isVisible:n(2),matches:n(0),offset:n(17),outerHeight:n(18),outerWidth:n(19),parents:n(20),position:n(21),ResizeSensor:n(8),Visibility:n(9),window:n(3)}}()},function(t,e){t.exports=function(){function t(t,e){"function"==typeof jQuery&&(t instanceof jQuery&&(t=t[0]),e instanceof jQuery&&(e=e[0]));var n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right}return t}()},function(t,e){t.exports=function(){function t(t){return null!==t&&t===t.window}function e(e){return t(e)?e:9===e.nodeType&&e.defaultView}function n(t){var n,r,o={top:0,left:0},i=t&&t.ownerDocument;return n=i.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(o=t.getBoundingClientRect()),r=e(i),{top:o.top+r.pageYOffset-n.clientTop,left:o.left+r.pageXOffset-n.clientLeft}}return n}()},function(t,e){t.exports=function(){function t(t){var e,n=t.parentNode,r=[],o=window.getComputedStyle(t);if("none"!=t.style.display||t.offsetHeight>0)return t.offsetHeight;for(r.push(o.getPropertyValue("height"));;){e=window.getComputedStyle(n);var i=e.getPropertyValue("height");{if(!(i.indexOf("%")>-1))break;r.push(i),n=n.parentNode}}var u=parseFloat(e.getPropertyValue("height"));return r.forEach(function(t){t=parseFloat(t),t<100&&(u-=u*(parseFloat(t)/100))}),u}return t}()},function(t,e){t.exports=function(){function t(t){var e,n=t.parentNode,r=[],o=window.getComputedStyle(t);if("none"!=t.style.display||t.offsetWidth>0)return t.offsetWidth;for(r.push(o.getPropertyValue("width"));;){e=window.getComputedStyle(n);var i=e.getPropertyValue("width");{if(!(i.indexOf("%")>-1))break;r.push(i),n=n.parentNode}}var u=parseFloat(e.getPropertyValue("width"));return r.forEach(function(t){t=parseFloat(t),t<100&&(u-=u*(parseFloat(t)/100))}),u}return t}()},function(t,e,n){var r=n(0);t.exports=function(){function t(t,e){for(var n=!0,o=[];1===t.nodeType;)!n&&r(t,e)&&o.push(t),n=!1,t=t.parentNode;return o}return t}()},function(t,e){t.exports=function(){function t(t){for(var e=0,n=0;t;)e+=t.offsetLeft-t.scrollLeft+t.clientLeft,n+=t.offsetTop-t.scrollTop+t.clientTop,t=t.offsetParent;return{x:e,y:n}}return t}()},function(t,e){t.exports=function(){function t(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}return t}()},function(t,e,n){var r=n(15),o=n(7),i=n(22),u=n(4),c=n(5);t.exports=function(t,e,n){function s(t,e){return!(!t||"function"!=typeof t.setPlaybackQuality)&&(e=i({quality:"hd720",breakpoint:768},e),r.window.width()>=e.breakpoint&&t.setPlaybackQuality(e.quality),!0)}function a(n){var c,a,p,h,y=t.YT,v=r.closest(n,".js-video-wrapper");return"undefined"!=typeof y&&(!!n.id&&(c=i({url:!1,gaEventCategory:!1},JSON.parse(n.getAttribute("data-video")||"{}")),!!c.url&&(a=u(c.url),p={videoId:a,playerVars:{autohide:1,autoplay:0,controls:1,enablejsapi:1,modestbranding:1,rel:0,showinfo:0},events:{}},c.width&&(p.width=c.width),c.height&&(p.height=c.height),p.events.onReady=function(r){s(r.target,d);var i=e.querySelectorAll('.js-video-open[data-video="#'+n.id+'"]');o(i,function(t){return t.addEventListener("click",function(t){h&&h.playVideo()})}),v.addEventListener("mouseover",function(){o(i,function(t){return t.classList.add(l)})}),v.addEventListener("mouseout",function(){o(i,function(t){return t.classList.remove(l)})}),t.addEventListener("click",function(t){h&&(h.pauseVideo(),v.classList.remove(l))}),v.classList.add(f),o(i,function(t){return t.classList.add(f)})},p.events.onStateChange=function(t){t.data===y.PlayerState.BUFFERING&&s(t.target,d),t.data!==y.PlayerState.BUFFERING&&t.data!==y.PlayerState.PLAYING||v.classList.add(l),t.data===y.PlayerState.ENDED&&v.classList.remove(l)},h=new y.Player(n,p))))}var f="is-ready",l="is-active",d={quality:"hd720",breakpoint:768};return{init:function(){return c(function(){return o(e.querySelectorAll(".js-video"),a)})}}}(window,document)},function(t,e,n){var r=n(6);r.player.init()}]);