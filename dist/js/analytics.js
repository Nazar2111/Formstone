/*! formstone v1.0.1 [analytics.js] 2016-04-02 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){u=b.$body}function d(){r.scrollDepth&&k()}function e(){if(arguments.length&&"object"!==a.type(arguments[0]))if("destroy"===arguments[0])g.apply(this);else{var b=Array.prototype.slice.call(arguments,1);switch(arguments[0]){case"pageview":n.apply(this,b);break;case"event":m.apply(this,b)}}else f.apply(this,arguments);return null}function f(b){!x&&u.length&&(x=!0,r=a.extend(r,b||{}),r.autoEvents&&u.find("a").not("["+z+"]").each(h),r.scrollDepth&&(k(),t.on(w.scroll,i).one(w.load,d)),u.on(w.click,"*["+z+"]",l))}function g(){x&&u.length&&(t.off(w.namespace),u.off(w.namespace),x=!1)}function h(){var b,c=a(this),d="undefined"!==a.type(c[0].href)?c[0].href:"",e=document.domain.split(".").reverse(),f=null!==d.match(e[1]+"."+e[0]);if(d.match(/^mailto\:/i))b="Email, Click, "+d.replace(/^mailto\:/i,"");else if(d.match(/^tel\:/i))b="Telephone, Click, "+d.replace(/^tel\:/i,"");else if(d.match(r.fileTypes)){var g=/[.]/.exec(d)?/[^.]+$/.exec(d):void 0;b="File, Download:"+g[0]+", "+d.replace(/ /g,"-")}else f||(b="ExternalLink, Click, "+d);b&&c.attr(z,b)}function i(){v.startTimer(B,250,j)}function j(){for(var a,c=t.scrollTop()+b.windowHeight,d=1/r.scrollStops,e=d,f=1;f<=r.scrollStops;f++)a=Math.round(100*e).toString(),!A[C][a].passed&&c>A[C][a].edge&&(A[C][a].passed=!0,m({eventCategory:"ScrollDepth",eventAction:C,eventLabel:a,nonInteraction:!0})),e+=d}function k(){var b,c=a.mediaquery("state"),d=u.outerHeight(),e={},f=1/r.scrollStops,g=f,h=0;c.minWidth&&(C="MinWidth:"+c.minWidth+"px");for(var i=1;i<=r.scrollStops;i++)h=parseInt(d*g),b=Math.round(100*g).toString(),e[b]={edge:"100"===b?h-10:h,passsed:A[C]&&A[C][b]?A[C][b].passed:!1},g+=f;A[C]=e}function l(b){var c=a(this),d=c.attr("href"),e=c.data(y).split(",");r.eventCallback&&b.preventDefault();for(var f in e)e.hasOwnProperty(f)&&(e[f]=a.trim(e[f]));m({eventCategory:e[0],eventAction:e[1],eventLabel:e[2]||d,eventValue:e[3],nonInteraction:e[4]},c)}function m(b,c){var d=(s.location,a.extend({hitType:"event"},b));if("undefined"!==a.type(c)&&!c.attr("data-analytics-stop")){var e="undefined"!==a.type(c[0].href)?c[0].href:"",f=!e.match(/^mailto\:/i)&&!e.match(/^tel\:/i)&&e.indexOf(":")<0?s.location.protocol+"//"+s.location.hostname+"/"+e:e;if(""!==f){var g=c.attr("target");if(g)s.open(f,g);else if(r.eventCallback){var h="hitCallback";d[h]=function(){D&&(v.clearTimer(D),p(f))},D=v.startTimer(D,r.eventTimeout,d[h])}}}o(d)}function n(b){var c=a.extend({hitType:"pageview"},b);o(c)}function o(b){if("function"===a.type(s.ga)&&"function"===a.type(s.ga.getAll))for(var c=s.ga.getAll(),d=0,e=c.length;e>d;d++)s.ga(c[d].get("name")+".send",b)}function p(a){document.location=a}var q=b.Plugin("analytics",{methods:{_setup:c,_resize:d},utilities:{_delegate:e}}),r={autoEvents:!1,fileTypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,eventCallback:!1,eventTimeout:1e3,scrollDepth:!1,scrollStops:5},s=b.window,t=b.$window,u=null,v=q.functions,w=q.events,x=!1,y="analytics-event",z="data-"+y,A={},B=null,C="Site",D=null});