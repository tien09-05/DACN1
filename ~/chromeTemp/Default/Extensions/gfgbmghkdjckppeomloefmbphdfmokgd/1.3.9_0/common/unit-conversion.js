"undefined"==typeof global?global={}:global,function(){var e=function(){this._init()},t={CONVERSION_ACTION_MORECURRENCY:0,CONVERSION_ACTION_COPYFIRSTCURRENCY:1,CONVERSION_ACTION_COPYSECONDCURRENCY:2,CONVERSION_ACTION_VIEWCOPYTEXT:3,CONVERSION_ACTION_CLICKCOPYTEXT:4,CONVERSION_ACTION_OTHERS:5,CONVERSION_ACTION_BACK:6,CONVERSION_ACTION_EXIT:7,CONVERSION_OPENED_SELECTION:0,CONVERSION_OPENED_DBLCLICK:1};e.prototype={_init:function(){this.TOOLTIP_MAIN=options.get("tooltip_main"),this.TOOLTIP_MORE_CURRENCIES=options.get("tooltip_more_currencies"),this.TOOLTIP_ADD_CURRENCIES=options.get("tooltip_add_currencies"),this._moneySymbolMap={$:"USD","€":"EUR","￥":"JPY","¥":"CNY","₫":"VND"},this._setupMain(),this._setupMoreCurrencies(),this._setupAddCurrencies(),window.addEventListener("pagehide",this._destroy.bind(this))},_setupMain:function(){var e=document.createElement("div");e.className="coccoc-money-main hidden",e.addEventListener("click",function(e){var o=e.target;switch(o.className){case"coccoc-btn-currencies":var i=this._tooltipMain.offsetLeft;this._tooltipMoreCurrencies.style.left=i+"px",this._tooltipMain.classList.add("hidden"),this._tooltipMoreCurrencies.classList.remove("hidden"),this._reportConversionAction(t.CONVERSION_ACTION_MORECURRENCY);break;case"coccoc-value":var s=o.innerText;this._copy(s);var n=o.parentNode;"coccoc-value-from"===n.className?this._reportConversionAction(t.CONVERSION_ACTION_COPYFIRSTCURRENCY):"coccoc-value-to"===n.className&&this._reportConversionAction(t.CONVERSION_ACTION_COPYSECONDCURRENCY),n.classList.add("copied"),setTimeout(function(){n.classList.remove("copied")},400);var c=this._tooltipMain.querySelector(".coccoc-btn-copy");c&&c.classList.remove("coccoc-copied");break;case"coccoc-btn-copy":this._reportConversionAction(t.CONVERSION_ACTION_CLICKCOPYTEXT),this._copy(this._selectionData.text),o.classList.add("coccoc-copied"),setTimeout(function(){o.classList.remove("coccoc-copied")},400);break;case"coccoc-btn-close":this._reportConversionAction(t.CONVERSION_ACTION_EXIT),this.hide()}}.bind(this)),e.addEventListener("mouseover",function(t){var o=t.target,i=e.querySelector(".coccoc-conversion");if(i)switch(o.className){case"coccoc-btn-info":i.classList.add("show-info");break;case"coccoc-btn-currencies":case"coccoc-btn-copy":case"coccoc-btn-close":i.classList.remove("show-info")}}),e.addEventListener("mouseleave",function(){var t=e.querySelector(".coccoc-conversion");t&&t.classList.remove("show-info")}),this._tooltipMain=e},_copy:function(e){var t=document.createElement("textarea");t.textContent=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.blur(),document.body.removeChild(t)},_setupMoreCurrencies:function(){var e=document.createElement("div");e.className="coccoc-more-currencies hidden",e.addEventListener("click",function(e){var o=e.target;switch(o.className){case"coccoc-more-back":this._reportConversionAction(t.CONVERSION_ACTION_BACK),this._tooltipMain.classList.remove("hidden"),this._tooltipMoreCurrencies.classList.add("hidden");break;case"coccoc-more-add":this._reportConversionAction(t.CONVERSION_ACTION_OTHERS),this._tooltipMoreCurrencies.classList.add("hidden"),this._tooltipAddCurrencies.classList.remove("hidden");break;case"coccoc-currency-value":case"coccoc-currency-sign":var i=o.parentNode,s=i.innerText;s=s.replace(/\n/g," "),this._copy(s);var n=i.parentNode;n.classList.add("copied"),setTimeout(function(){n.classList.remove("copied")},400)}}.bind(this)),this._tooltipMoreCurrencies=e},_setupAddCurrencies:function(){var e=document.createElement("div");e.className="coccoc-add-currencies hidden",this._tooltipAddCurrencies=e},_setStyle:function(){this._tooltipMain.classList.add("coccoc-dark-theme"),this._tooltipMoreCurrencies.classList.add("coccoc-dark-theme"),this._tooltipAddCurrencies.classList.add("coccoc-dark-theme")},set coords(e){var t,o,i=document.scrollingElement.scrollTop||window.pageYOffset,s=(document.scrollingElement.scrollLeft||window.pageXOffset,window.innerHeight,window.innerWidth);t=e.top-45;var n=this._selectionData.copy?380:260;this._tooltipMain.style.top=(t>=0?t+i:e.top+i+e.height+8+1)+"px",o=Math.max(e.left+e.width/2+n/2+20-s,0);var c=Math.max(e.left+e.width/2-n/2-o,20);this._tooltipMain.style.left=c+"px",t=e.top-130-8-1,this._tooltipMoreCurrencies.style.top=(t>=0?t+i:e.top+i+e.height+8+1)+"px",o=Math.max(e.left+e.width/2+82.5+20-s,0),c=Math.max(e.left+e.width/2-82.5-o,20),this._tooltipMoreCurrencies.style.left=c+"px",t=e.top-45-8-1,this._tooltipAddCurrencies.style.top=(t>=0?t+i:e.top+i+e.height+8+1)+"px",o=Math.max(e.left+e.width/2+143.5+20-s,0),c=Math.max(e.left+e.width/2-143.5-o,20),this._tooltipAddCurrencies.style.left=c+"px"},_format:function(e,t){var o=/\d(?=(\d{3})+(?:\.|$))/g,i=e.toString().split("."),s=i[0].replace(o,"$&,")+"."+(i[1]||"00"),n="";if("VND"===t){for(;e>=1e9;)e/=1e9,n=" tỷ"+n;""!==n&&e>=1e6&&(e/=1e6,n=" triệu"+n),""!==n&&e>=1e3&&(e/=1e3,n=" nghìn"+n),n=e<1e3?e.toFixed(2).substr(0,e>=100?3:4)+n:e.toFixed(0).replace(o,"$&,")}else n=e.toFixed(2).replace(o,"$&,");return{exact:s,semantic:n}},_extractInputData:function(e){var t=/(C\$|HK\$|S\$|[$€￥¥円圓元£₩฿원]|USD|EUR|GBP|JPY|CNY|RMB|FR.|SFR.|CHF|CAD|HKD|SGD|KRW|THB|บาท)[^\S\r\n]?([1-9][0-9]{0,2}(?:,[0-9]{3})+(?:\.[0-9]{1,})?|[1-9][0-9]{1,2}(?:\.[0-9]+)+(?:,[0-9]{1,})?|[0-9]+(?:[.,][0-9]{1,})?)|([1-9][0-9]{0,2}(?:,[0-9]{3})+(?:\.[0-9]{1,})?|[1-9][0-9]{1,2}(?:\.[0-9]+)+(?:,[0-9]{1,})?|[0-9]+(?:[.,][0-9]{1,})?)[^\S\r\n]?(C\$|HK\$|S\$|[$€￥¥円圓元£₩฿원]|USD|EUR|GBP|JPY|CNY|RMB|FR.|SFR.|CHF|CAD|HKD|SGD|KRW|THB|บาท|GAL|US GAL LQD|GALLON LIQUID US|US GAL|MPH|MILE PER HOUR|MPG|MILE PER GALLON|MILES|MI|YARD|YARDS|YD|INCHES|IN|''|”|"|FEET|FEETS|FT|'|POUND|POUNDS|LB|OUNCE|OUNCES|OZ|TAEL|KWH|KW\/H)?/g,o=/(?:[0-9]{1,3}(?:,[0-9]{3})+(?:\.[0-9]{1,})?|[0-9]+(?:\.[0-9]{1,}))(\n|$)/g,i=null,s="",n="units";if(/[\d.,]+\s?(?:''|”|"|INCHES|IN|FEETS|FT|')?(?:\s?[X*]\s?[\d.,]+\s?(?:''|”|"|INCHES|IN|FEETS|FT|')?){1,2}/g.test(e.conversionText))for(var c=null;c=t.exec(e.conversionText);){var a=c[2]||c[3];(i=i||[]).push(a),s=s||c[1]||c[4]}else(c=t.exec(e.conversionText))&&c.length&&(i=[c[2]||c[3]],s=s||c[1]||c[4]);if(!i||!s)return null;for(var r=["vi","de","fr","id","it","ru"],d=0;d<i.length;d++)o.test(i[d])&&r.indexOf(e.siteLang)<0?i[d]=i[d].replace(/,/g,""):i[d]=i[d].replace(/\./g,"").replace(/,/,"."),o.lastIndex=0;return-1!==["C$","HK$","S$","$","€","￥","¥","円","圓","元","£","₩","원","฿","บาท","USD","EUR","GBP","JPY","CNY","RMB","FR.","SFR.","CHF","CAD","HKD","SGD","KRW","THB"].indexOf(s)&&(n="currency"),{type:n,value:i,sign:s}},_convertData:function(e){var t=new Promise;return"currency"===e.type?this._convertCurrency(e).success(function(e){t.resolve(e)}):this._convertUnit(e).success(function(e){t.resolve(e)}),t},_convertCurrency:function(e){var t=new Promise,o=this._standardSymbol(e.sign);return chrome.runtime.sendMessage({type:"get_exchange_rate",money:o},function(i){if(i){var s={type:"currency",inputData:{rawSign:e.sign,abbr:o,text:e.sign+" "+this._format(parseFloat(e.value[0])).exact},outputData:{},currencies:[]},n=this._calculateExchangeReturn(i,e.value[0]);s.outputData.semantic=n.vndValue.semantic+(-1!==n.vndValue.semantic.indexOf("tỷ")?" VNĐ":" ₫"),s.outputData.exact=n.vndValue.exact+" ₫",s.currencies=n.currencies,t.resolve(s)}else t.resolve(null)}.bind(this)),t},_convertUnit:function(e){var t=new Promise,o=this._standardSymbol(e.sign),i={MILES:[1.60934,"km"],YARDS:[.9144,"m"],FEETS:[.3048,"m"],INCHES:[2.54,"cm"],POUNDS:[.453592,"kg"],OUNCES:[28.3495,"g"],TAEL:[37.7994,"g"],GAL:[3.78541,"l"],MPH:[1.61,"km/h"],MPG:[.42514,"km/l"],"KW/H":[1e3,"W/h"]},s={type:"unit",inputData:{rawSign:e.sign,abbr:o,text:""},outputData:{}};-1!==['"',"”","''","'"].indexOf(e.sign)?s.inputData.text=e.value.join(e.sign+" x ")+e.sign:s.inputData.text=e.value.join(" x ")+" "+e.sign.toLowerCase();var n=[];return e.value.forEach(function(e){n.push(this._format(parseFloat(i[o][0])*parseFloat(e)).semantic)}.bind(this)),s.outputData.semantic=n.join(" x ")+" "+i[o][1],s.outputData.exact=n.join(" x ")+" "+i[o][1],t.resolve(s),t},_standardSymbol:function(e){var t="";switch(e){case"¥":case"￥":t="zh"===this._selectionData.siteLang?"CNY":"JPY";break;case"元":case"CNY":case"RMB":t="CNY";break;case"圓":case"円":case"JPY":t="JPY";break;case"$":case"USD":t="USD";break;case"€":case"EUR":t="EUR";break;case"£":case"GBP":t="GBP";break;case"FR.":case"SFR.":case"CHF":t="CHF";break;case"C$":case"CAD":t="CAD";break;case"HK$":case"HKD":t="HKD";break;case"S$":case"SGD":t="SGD";break;case"₩":case"원":case"KRW":t="KRW";break;case"฿":case"บาท":case"THB":t="THB";break;case"''":case"”":case'"':case"IN":case"INCHE":case"INCHES":t="INCHES";break;case"'":case"FT":case"FTS":case"FEET":case"FEETS":t="FEETS";break;case"LB":case"LBS":case"POUND":case"POUNDS":t="POUNDS";break;case"MI":case"MILES":t="MILES";break;case"YD":case"YARD":t="YARDS";break;case"OZ":case"OUNCE":case"OUNCES":t="OUNCES";break;case"KWH":case"KW/H":t="KW/H";break;case"MPH":case"MILE PER HOUR":t="MPH";break;case"GAL":case"GALLON":case"GALLONS":case"US GAL":case"GALLON LIQUID US":case"US GAL LQD":t="GAL";break;case"MPG":case"MILE PER GALLON":t="MPG";break;default:t=e}return t},_calculateExchangeReturn:function(e,t){var o={vndValue:{},currencies:[]};return Object.keys(this._moneySymbolMap).forEach(function(i){"₫"!==i?o.currencies.push({short:this._moneySymbolMap[i],value:this._format(parseFloat(e[this._moneySymbolMap[i]]||1)*parseFloat(t),this._moneySymbolMap[i]).semantic,sign:this._moneySymbolMap[i]===t.currency?t.symbol:i}):o.vndValue=this._format(parseFloat(e.VND)*parseFloat(t),"VND")}.bind(this)),o},show:function(e){this._selectionData=e;var o=this._extractInputData(e);o&&(this._convertData(o).success(function(o){var i={isCurrencyConvert:"currency"===o.type,value_from:o.inputData.text,value_to:o.outputData,btn_copy:e.copy,currencies:o.currencies,rate_source:"CNY"===o.inputData.abbr?"www.bidv.com.vn":"www.vietcombank.com.vn"};this._tooltipMain.innerHTML=Mustache.render(this.TOOLTIP_MAIN,i),this._tooltipMoreCurrencies.innerHTML=Mustache.render(this.TOOLTIP_MORE_CURRENCIES,i),this._tooltipAddCurrencies.innerHTML=Mustache.render(this.TOOLTIP_ADD_CURRENCIES,i),this._setStyle(),this.coords=e.coords,this._tooltipMain.classList.remove("hidden"),this.isShown=!0,popup._rootNode.hidden=!1,this._reportConversionOpened(e.dblclickConversion?t.CONVERSION_OPENED_DBLCLICK:t.CONVERSION_OPENED_SELECTION),e.copy&&this._reportConversionAction(t.CONVERSION_ACTION_VIEWCOPYTEXT),this._reportConversionData(Date.now(),o.type),this._reportNotification()}.bind(this)),this._injected||(popup._shadowRoot.appendChild(this._tooltipMain),popup._shadowRoot.appendChild(this._tooltipMoreCurrencies),popup._shadowRoot.appendChild(this._tooltipAddCurrencies),document.documentElement.appendChild(popup._rootNode,document.body),this._injected=!0))},hide:function(e){this.isShown&&(this._tooltipMain.classList.add("hidden"),this._tooltipMoreCurrencies.classList.add("hidden"),this._tooltipAddCurrencies.classList.add("hidden"),this.isShown=!1,e&&this._reportConversionAction(t.CONVERSION_ACTION_EXIT))},_destroy:function(){this._tooltipMain&&(this._tooltipMain.remove(),this._tooltipMain=null),this._tooltipMoreCurrencies&&(this._tooltipMoreCurrencies.remove(),this._tooltipMoreCurrencies=null),this._tooltipAddCurrencies&&(this._tooltipAddCurrencies.remove(),this._tooltipAddCurrencies=null)},_reportConversionAction:function(e){chrome.runtime.sendMessage({type:"report_small_count",name:"ConversionAction",value:e})},_reportConversionOpened:function(e){chrome.runtime.sendMessage({type:"report_small_count",name:"ConversionOpened",value:e})},_reportConversionData:function(e,t){var o={timestamp_ms:e,page_url:window.location.href,type:"converter:"+t};chrome.runtime.sendMessage({type:"report_custom_data",value:o})},_reportNotification:function(){var e=options.get("conversion_notification_last"),t=options.get("conversion_notification_user"),o=Date.now();if(t&&e&&!(e&&o-e>864e5)){var i={user_group:t};chrome.runtime.sendMessage({type:"report_conversion_shown",data:i})}}},document.addEventListener("mousedown",function(e){!Utils.getNearest(e.target,".corom-element")&&window.unitConversion&&window.unitConversion.isShown&&window.unitConversion.hide(!0)}),window.addEventListener("DOMContentLoaded",function(){window.unitConversion=new e})}();