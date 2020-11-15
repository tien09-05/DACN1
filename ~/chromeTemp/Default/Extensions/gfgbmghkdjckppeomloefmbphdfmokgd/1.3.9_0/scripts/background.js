!function(t){function e(t,n,r,i){function s(s){if(void 0===s||""===s)e(t,n,r,i);else{if(_.NEW_API_AND_CHINESE)try{s=JSON.parse(s)}catch(t){s={}}r.resolve(s)}}if(0!==i.length){var c=i.shift(),o=t.replace(c[0],c[1]);""===c[0]||o!==t?_.NEW_API_AND_CHINESE?chrome.dictionary.translate({word:o,from:n,to:"vi"},s):chrome.dictionary.translate(o,s):e(t,n,r,i)}else r.reject()}function n(t,n){var r=new l;return e(t,n,r,f.concat()),r}function r(t){return t=t.toLowerCase(),t=t.replace(/[‘’′´]/g,"'"),t=t.replace(/[–‑—‒]/g,"-"),(t=t.replace(/[\r\n]+/g," ")).replace(/^[¡!¿?“”‛‟‚„″˝…\x20-\x40\x5b-\x60\x7b-\x7e]+|[¡!¿?“”‛‟‚„″˝…\x20-\x40\x5b-\x60\x7b-\x7e]+$/g,"")}function i(t,e,i){var o="en";if(t&&!t.notify){var a=t.text,u=r(a),l=h.getEntry(u);if(!l){if(u.match(/^[\u4E00-\uFA29]+$/i)&&_.NEW_API_AND_CHINESE)o="zh";else if(!u.match(/^[a-z\-\']+$/i))return void s({text:u,originalText:a,error:"NOT_SUPPORTED_PHRASES"},i,null);var f=n(u,o),m=new Date;return f.fail(function(){s({text:u,originalText:a,error:"NOT_FOUND"},i,{start:m})}).success(function(t){s({text:u,langSrc:"zh"===o?"zh-CN":"en-GB",originalText:a,translation:c(t)},i,{start:m})}),!0}s(l,i,null)}else s({originalText:a,error:"NOTIFY"},i,null)}function s(t,e,n){var r=t.error;if(Boolean(t.text)&&h.saveEntry(t.text,t),u(!r),e&&e(t),n&&n.start){var i=r?"WordUnsuccessfulLookup":"WordSuccessfullLookup";metrics.recordTime(i,new Date-n.start)}}function c(t){function e(t){return"-"===t[0]&&(t=t.substring(1)),";"===t[t.length-1]&&(t=t.substring(0,t.length-1)),t=t.trim()}if(!_.NEW_API_AND_CHINESE){var n={word:"",pronunciations:[],translations:[],links:[]};t=t.replace(/\\n/gm,"\n");var r=/^@([^\n\s\/]+)/gm.exec(t);r&&r[1]&&(n.word=r[1]);var i=/^@[^\/\n]+(\/[^\n]+\/$)/gm.exec(t);i&&i[1]&&(n.pronunciations=[{type:"UK",text:i[1]}]);var s=/(^XEMBEGIN[\w\W]+XEMEND)/gm.exec(t);if(s&&s[1]){t=t.replace(s[1],"");var c=/^XEMBEGIN\s([^@\/\n\s]+)/gm.exec(s[1])[1];n.link=c}var o=t.match(/^[\*\-][^\*]+/gm);return o&&o.forEach(function(t){var r={type:"",meaning:[]},i=/^\*\s+([^\n]+)/g.exec(t);i&&i[1]&&(r.type=i[1]);var s=t.match(/^\-\s+[^\n]+$/gm);s&&(s.forEach(function(t,n){s[n]=e(t)}),r.meaning=r.meaning.concat(s)),n.translations.push(r)}),n}return t&&Array.isArray(t.pronunciations)&&t.pronunciations.forEach(function(e,n){"US"===e.type&&t.pronunciations.splice(n,1)}),t}function o(t){var e="http://coccoc.com/webhp?cmd=get_finance&money="+t;return window.fetch(e).then(function(t){return t.json()})}function a(t,e){var n="";Object.keys(e).forEach(function(t){var r=e[t];n+="&"+t+"="+r}),window.fetch("https://coccoc.com/log?en2viAction="+t+n)}function u(t){chrome.contextMenus.update(m,{enabled:t})}var l=function(t){if(0===arguments.length)return this._init(),this;if(t instanceof l)return t;var e=new l;return e.resolve(t),e};l.RUNNING=0,l.RESOLVED=1,l.FAILED=2,l.prototype={constructor:l,_init:function(){this._results=[],this._subscribers=[],this.state=l.RUNNING},_notify:function(){var t=this;this._subscribers.forEach(function(e){e.apply(t,t._results)}),this._subscribers=[]},resolve:function(){return this.state=l.RESOLVED,this._results=arguments,this._notify(),this},reject:function(){return this.state=l.FAILED,this._results=arguments,this._notify(),this},subscribe:function(t){this.state!==l.RUNNING?t.apply(this,this._results):this._subscribers.push(t)},done:function(t){return this.subscribe(t),this},success:function(t){var e=this;return this.subscribe(function(){e.state===l.RESOLVED&&t.apply(e,e._results)}),this},fail:function(t){var e=this;return this.subscribe(function(){e.state===l.FAILED&&t.apply(e,e._results)}),this},bind:function(t){return(t=new l(t)).success(this.resolve.bind(this)).fail(this.reject.bind(this)),this}},l.when=function(){var t=[];return t=Array.isArray(arguments[0])?arguments[0]:Utils.toArray(arguments),new l.When(t)},l.When=function(t){this._doneCallbacks=[],this._successCallbacks=[],this._failCallbacks=[],this._state=l.RUNNING,this._thingsToDo=t.length,this._results=Array(this._thingsToDo),this._init(t)},l.When.prototype={constructor:l.When,_init:function(t){var e=this;t.forEach(function(t,n){(t=new l(t)).subscribe(function(){t.state===l.FAILED&&(e._state=l.FAILED),e._results[n]=Utils.toArray(arguments),e._thingsToDo--,e._checkIsDone()})}),this._checkIsDone()},_checkIsDone:function(){if(0!==this._thingsToDo)return!1;var t=[];this._results.forEach(function(e){t=t.concat(e)}),this._state===l.FAILED?this._runCallbacks(this._failCallbacks,t):this._runCallbacks(this._successCallbacks,t),this._runCallbacks(this._doneCallbacks,t),this._doneCallbacks=[],this._successCallbacks=[],this._failCallbacks=[]},_runCallbacks:function(t,e){t.forEach(function(t){t.apply(this,e)})},done:function(t){return this._doneCallbacks.push(t),this._checkIsDone(),this},success:function(t){return this._successCallbacks.push(t),this._checkIsDone(),this},fail:function(t){return this._failCallbacks.push(t),this._checkIsDone(),this}},l.chain=function(){function t(e){if(!e.length)return n.resolve.apply(n,r);var i=e.shift();"function"==typeof i?l(i()).done(function(n){r.push(n),t(e)}):(r.push(i),t(e))}var e,n=new l,r=[];return e=Array.isArray(arguments[0])?arguments[0]:Utils.toArray(arguments),t(e),n},window.Promise=l,chrome.metricsPrivate||(chrome.metricsPrivate={recordSmallCount:console.warn.bind(console,"Metrics.recordCount:"),recordTime:console.warn.bind(console,"Metrics.recordTime:"),recordCustomData:console.warn.bind(console,"Metric.recordCustomData:")}),["recordSmallCount","recordTime"].forEach(function(t){var e=chrome.metricsPrivate[t];e&&(chrome.metricsPrivate[t]=function(){var t=Array.prototype.slice.call(arguments);return t[0]="Dictionary."+t[0],e.apply(this,t)})}),window.metrics=chrome.metricsPrivate,metrics.POPUP_OPENED_SELECTION=10,metrics.POPUP_OPENED_DOUBLECLICK=11,metrics.POPUP_OPENED_CONTEXTMENU=12,metrics.POPUP_OPENED_NOTENPAGE=13,metrics.POPUP_OPENED_ENPAGE=14,metrics.POPUP_OPENED_DEFAULTSIZE=15,metrics.POPUP_OPENED_SCROLLSIZE=16,metrics.POPUP_ACTION_SPEAKER=0,metrics.POPUP_ACTION_OPENLINK=1,metrics.POPUP_ACTION_SYNONYM=2,metrics.POPUP_ACTION_SCROLL=3,metrics.CONVERSION_ONBOARDING_ALREADY=1,metrics.CONVERSION_ONBOARDING_TRY=2;var h={_lastKey:null,_lastEntry:null,saveEntry:function(t,e){this._lastKey=t,this._lastEntry=e},getEntry:function(t){return t===this._lastKey?this._lastEntry:null}},_=function(){function t(t,e){var n=t[0]-e[0];return 0!==n?n:0!=(n=t[1]-e[1])?n:0!=(n=t[2]-e[2])?n:n=t[3]-e[3]}var e=!1,n=!1,r=window.navigator.userAgent.match(/Chrome\/([\d.]+)/);return r&&r[1]&&(t(r=[+(r=r[1].split("."))[0],+r[1],+r[2],+r[3]],[64,4,3282,212])>=0&&chrome.dictionary&&chrome.dictionary.translate&&(e=!0),t(r,[64,4,3282,236])>=0&&(n=!0)),{NEW_API_AND_CHINESE:e,CUSTOME_METRIC_JSON:n}}(),f=[["",""],[new RegExp("^([^']+)'?s$",""),"$1"],[/^(.*)ies$/,"$1y"],[/^(.*)ed$/,"$1"],[/^(.*)ed$/,"$1e"],[/^(.*)ing$/,"$1e"],[/^(.*)ying$/,"$1ie"],[/^(.*)ing$/,"$1"],[/^(.*e)r$/,"$1"],[/^(.*e)st$/,"$1"]];chrome.dictionary&&chrome.dictionary.translate||("object"!=typeof DICT&&(DICT={}),chrome.dictionary={translate:function(t,e){setTimeout(function(){e(DICT[t])},10*Math.random())}}),chrome.runtime.onMessage.addListener(function(t,e,n){switch(t.type){case"on_selection":return i(t.data,e.tab.id,n);case"close_popups":chrome.tabs.sendMessage(e.tab.id,{type:"close_popup"});break;case"report_small_count":metrics.recordSmallCount(t.name,t.value);break;case"report_custom_data":_.CUSTOME_METRIC_JSON&&metrics.recordCustomData([{key:"en2vi_popup_shown",value:JSON.stringify(t.value)}]);break;case"report_conversion_shown":a("conversion_show",t.data);break;case"report_time":metrics.recordTime(t.name,t.value);break;case"disable_menu":u(!1);break;case"current_tab":n({tab:e.tab});break;case"get_language":if(!e||!e.tab||!e.tab.id)return;return chrome.tabs.detectLanguage(e.tab.id,function(t){n(chrome.runtime.lastError?{lang:"un"}:{lang:t})}),!0;case"is_panel":var r=-1===e.tab.index&&e.tab.active;n({isPanel:r});break;case"speak":return chrome.tts&&chrome.tts.speak(t.word,{enqueue:!1,lang:t.lang,onEvent:function(t){["end","interrupted","cancelled","error"].includes(t.type)&&n("end")}}),!0;case"stop_speaking":return void(chrome.tts&&chrome.tts.isSpeaking(chrome.tts.stop()));case"get_exchange_rate":return o(t.money).then(function(t){var e={};t&&t.finance?(t.finance.data.forEach(function(t){var n=t.name.split("/")[1];e[n]=t.price}),n(e)):n(null)}),!0}});var m=chrome.contextMenus.create({title:chrome.i18n.getMessage("context_menu_translate"),contexts:["selection"],enabled:!1});chrome.contextMenus.onClicked.addListener(function(t,e){e&&e.id&&t.menuItemId==m&&i({text:t.selectionText,notify:!1},e.id,function(t){chrome.tabs.sendMessage(e.id,{type:"on_context_menu",data:t})})}),chrome.tabs.onActivated.addListener(function(){u(!1)});var p=document.querySelector("#popup-template").innerHTML,d=document.querySelector("#tooltip-main").innerHTML,E=document.querySelector("#tooltip-more-currencies").innerHTML,b=document.querySelector("#tooltip-add-currencies").innerHTML,y=document.querySelector("#tooltip-notification").innerHTML,v=document.querySelector("#tooltip-wave-focusing").innerHTML;chrome.storage.local.set({popup_template:p,tooltip_main:d,tooltip_more_currencies:E,tooltip_add_currencies:b,tooltip_notification:y,tooltip_wave_focusing:v})}("undefined"==typeof global?global={}:global);