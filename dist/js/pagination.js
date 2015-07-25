/*! formstone v0.7.8 [pagination.js] 2015-07-24 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c="";c+='<button type="button" class="'+[m.control,m.control_previous].join(" ")+'">'+b.labels.previous+"</button>",c+='<button type="button" class="'+[m.control,m.control_next].join(" ")+'">'+b.labels.next+"</button>",c+='<div class="'+m.position+'">',c+='<span class="'+m.current+'">0</span>',c+=" "+b.labels.count+" ",c+='<span class="'+m.total+'">0</span>',c+="</div>",c+='<select class="'+m.select+'" tab-index="-1"></select>',this.addClass(m.base).wrapInner('<div class="'+m.pages+'"></div>').prepend(c),b.$controls=this.find(l.control),b.$pages=this.find(l.pages),b.$items=b.$pages.children().addClass(m.page),b.$position=this.find(l.position),b.$select=this.find(l.select),b.index=-1,b.total=b.$items.length-1;var d=b.$items.index(b.$items.filter(l.active));b.$items.eq(0).addClass(m.first).after('<span class="'+m.ellipsis+'">&hellip;</span>').end().eq(b.total).addClass(m.last).before('<span class="'+m.ellipsis+'">&hellip;</span>'),b.$ellipsis=b.$pages.find(l.ellipsis),j(b),this.on(n.clickTouchStart,l.page,b,g).on(n.clickTouchStart,l.control,b,e).on(n.clickTouchStart,l.position,b,h).on(n.change,l.select,f),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){b.$el.addClass(m.mobile)},leave:function(){b.$el.removeClass(m.mobile)}}),i(b,d)}function d(b){a.fsMediaquery("unbind",b.rawGuid),b.$controls.remove(),b.$ellipsis.remove(),b.$select.remove(),b.$position.remove(),b.$items.removeClass([m.page,m.active,m.visible,m.first,m.last].join(" ")).unwrap(),this.removeClass(m.base).off(n.namespace)}function e(b){o.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(m.control_previous)?-1:1);d>=0&&c.$items.eq(d).trigger(n.raw.click)}function f(b){o.killEvent(b);var c=b.data,d=a(b.currentTarget),e=parseInt(d.val(),10);c.$items.eq(e).trigger(n.raw.click)}function g(b){o.killEvent(b);var c=b.data,d=c.$items.index(a(b.currentTarget));i(c,d)}function h(a){o.killEvent(a);var c=a.data;if(b.isMobile&&!b.isFirefoxMobile){var d=c.$select[0];if(window.document.createEvent){var e=window.document.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}}function i(a,b){if(0>b&&(b=0),b>a.total&&(b=a.total),b!==a.index){a.index=b;var c=a.index-a.visible,d=a.index+(a.visible+1);0>c&&(c=0),d>a.total&&(d=a.total),a.$items.removeClass(m.visible).filter(l.active).removeClass(m.active).end().eq(a.index).addClass(m.active).end().slice(c,d).addClass(m.visible),a.$position.find(l.current).text(a.index+1).end().find(l.total).text(a.total+1),a.$select.val(a.index),a.$controls.removeClass(l.disabled),0===b&&a.$controls.filter(l.control_previous).addClass(m.disabled),b===a.total&&a.$controls.filter(l.control_next).addClass(m.disabled),a.$ellipsis.removeClass(m.visible),b>a.visible+1&&a.$ellipsis.eq(0).addClass(m.visible),b<a.total-a.visible-1&&a.$ellipsis.eq(1).addClass(m.visible),a.$el.trigger(n.update,[a.index])}}function j(a){for(var b="",c=0;c<=a.total;c++)b+='<option value="'+c+'"',c===a.index&&(b+='selected="selected"'),b+=">Page "+(c+1)+"</option>";a.$select.html(b)}var k=b.Plugin("pagination",{widget:!0,defaults:{ajax:!1,customClass:"",labels:{count:"of",next:"Next",previous:"Previous"},maxWidth:"740px",visible:2},classes:["pages","page","active","first","last","visible","ellipsis","control","control_previous","control_next","position","select","mobile","current","total"],events:{update:"update"},methods:{_construct:c,_destruct:d}}),l=k.classes,m=l.raw,n=k.events,o=k.functions}(jQuery,Formstone);