!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){void function(a,c){"object"==typeof b&&"object"==typeof b.exports?b.exports=c(a,!0):c(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a,b){var c,d=p.create("canvas");return d.width="50",d.height="20",d.style.display="none",i.appendChild(d),c=d.getContext("2d"),c.textBaseline="top",c.font="15px "+b+", sans-serif",c.fillStyle="black",c.strokeStyle="black",c.fillText(a,0,0),[d,c]}function d(a,b,d){var e,a=a,b=b,d=d||"\u8fadQ";try{b=c(d,b||"sans-serif"),a=c(d,a);for(var f=1;20>=f;f++)for(var g=1;50>=g;g++){if("undefined"!==e&&a[1].getImageData(g,f,1,1).data[3]!==b[1].getImageData(g,f,1,1).data[3]){e=!0;break}if(e)break;50!==g||20!==f||e||(e=!1)}return p.remove(b[0]),p.remove(a[0]),b=null,a=null,e}catch(h){return!1}}function e(a,b,c){var d=p.create("ru"),b=p.clone(b),c=c||{};return Array.isArray(a)?d.innerHTML=a.map(function(a){return"undefined"==typeof a?"":a.outerHTML}).join(""):d.appendChild(p.clone(a)),d.appendChild(b),c.annotation=b.textContent,p.setAttr(d,c),d}function f(a,b){var c,d,e,f,a=p.clone(a),g=p.create("ru"),h=p.create("zhuyin"),i=p.create("yin"),j=p.create("diao"),k=b.textContent;return c=k.replace(o.zhuyin.diao,""),f=c?c.length:0,d=k.replace(c,"").replace(/[\u02C5]/g,"\u02c7").replace(/[\u030D]/g,"\u0358"),e=k.replace(o.zhuyin.form,function(a,b,c){return[a?"S":null,b?"J":null,c?"Y":null].join("")}),j.innerHTML=d,i.innerHTML=c,h.appendChild(i),h.appendChild(j),g.appendChild(a),g.appendChild(h),p.setAttr(g,{zhuyin:"",diao:d,length:f,form:e}),g}var g=a.document,h=g.documentElement,i=g.body,j="3.1.1",k=["initCond","renderElem","renderJiya","renderHWS","correctBasicBD","substCombLigaWithPUA"],l=function(a,b){return new l.fn.init(a,b)},m=function(){return arguments[0]&&(this.context=arguments[0]),arguments[1]&&(this.condition=arguments[1]),this};l.version=j,l.fn=l.prototype={version:j,constructor:l,context:i,condition:h,routine:k,init:m,setRoutine:function(a){return Array.isArray(a)&&(this.routine=a),this},render:function(a){var b=this,a=Array.isArray(a)?a:this.routine;return a.forEach(function(a){try{"string"==typeof a?b[a]():Array.isArray(a)&&b[a.shift()].apply(b,a)}catch(c){}}),this}},l.fn.init.prototype=l.fn,l.init=function(){return l.init=l().render()};var n={punct:{base:"[\u2026,.;:!?\u203d_]",sing:"[\u2010-\u2014\u2026]",middle:"[\\/~\\-&\u2010-\u2014_]",open:"['\"\u2018\u201c\\(\\[\xa1\xbf\u2e18\xab\u2039\u201a\u201c\u201e]",close:"['\"\u201d\u2019\\)\\]\xbb\u203a\u201b\u201d\u201f]",end:"['\"\u201d\u2019\\)\\]\xbb\u203a\u201b\u201d\u201f\u203c\u203d\u2047-\u2049,.;:!?]"},biaodian:{base:"[\ufe30\uff0e\u3001\uff0c\u3002\uff1a\uff1b\uff1f\uff01\u30fc]",liga:"[\u2014\u2026\u22ef]",middle:"[\xb7\uff3c\uff0f\uff0d\u30a0\uff06\u30fb\uff3f]",open:"[\u300c\u300e\u300a\u3008\uff08\u3014\uff3b\uff5b\u3010\u3016]",close:"[\u300d\u300f\u300b\u3009\uff09\u3015\uff3d\uff5d\u3011\u3017]",end:"[\u300d\u300f\u300b\u3009\uff09\u3015\uff3d\uff5d\u3011\u3017\ufe30\uff0e\u3001\uff0c\u3002\uff1a\uff1b\uff1f\uff01\u30fc]"},hanzi:{base:"[\u4e00-\u9fff\u3400-\u4db5\u31c0-\u31e3\u3007\ufa0e\ufa0f\ufa11\ufa13\ufa14\ufa1f\ufa21\ufa23\ufa24\ufa27-\ufa29]|[\ud800-\udbff][\udc00-\udfff]",desc:"[\u2ff0-\u2ffa]",radical:"[\u2f00-\u2fd5\u2e80-\u2ef3]"},latin:{base:"[A-Za-z0-9\xc0-\xff\u0100-\u017f\u0180-\u024f\u2c60-\u2c7f\ua720-\ua7ff\u1e00-\u1eff]",combine:"[\u0300-\u0341\u1dc0-\u1dff]"},ellinika:{base:"[0-9\u0370-\u03ff\u1f00-\u1fff]",combine:"[\u0300-\u0345\u1dc0-\u1dff]"},kirillica:{base:"[0-9\u0400-\u0482\u048a-\u04ff\u0500-\u052f\ua640-\ua66e\ua67e-\ua697]",combine:"[\u0483-\u0489\u2de0-\u2dff\ua66f-\ua67d\ua69f]"},kana:{base:"[\u30a2\u30a4\u30a6\u30a8\u30aa-\u30fa\u3042\u3044\u3046\u3048\u304a-\u3094\u309f\u30ff]|\ud82c[\udc00-\udc01]",small:"[\u3041\u3043\u3045\u3047\u3049\u30a1\u30a3\u30a5\u30a7\u30a9\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u31f0-\u31ff]",combine:"[\u3099-\u309c]",half:"[\uff66-\uff9f]",mark:"[\u30a0\u309d\u309e\u30fb-\u30fe]"},eonmun:{base:"[\uac00-\ud7a3]",letter:"[\u1100-\u11ff\u314f-\u3163\u3131-\u318e\ua960-\ua97c\ud7b0-\ud7fb]",half:"[\uffa1-\uffdc]"},zhuyin:{base:"[\u3105-\u312d\u31a0-\u31ba]",initial:"[\u3105-\u3119\u312a-\u312c\u31a0-\u31a3]",medial:"[\u3127-\u3129]","final":"[\u311a-\u3129\u312d\u31a4-\u31b3\u31b8-\u31ba]",tone:"[\u02d9\u02ca\u02c5\u02c7\u02cb\u02ea\u02eb]",ruyun:"[\u31b4-\u31b7][\u0358\u030d]?"}},o=function(){var a="[\\x20\\t\\r\\n\\f]",b=n.punct.open,c=(n.punct.close,n.punct.end),d=n.punct.middle,e=n.punct.sing,f=b+"|"+c+"|"+d,g=n.biaodian.open,h=n.biaodian.close,i=n.biaodian.end,j=n.biaodian.middle,k=n.biaodian.liga+"{2}",l=g+"|"+i+"|"+j,m=n.kana.base+n.kana.combine+"?",o=n.kana.small+n.kana.combine+"?",p=(n.kana.half,n.eonmun.base+"|"+n.eonmun.letter),q=n.eonmun.half,r=n.hanzi.base+"|"+n.hanzi.desc+"|"+n.hanzi.radical+"|"+m,s=n.ellinika.combine,t=n.latin.base+s+"*",u=n.ellinika.base+s+"*",v=n.kirillica.combine,w=n.kirillica.base+v+"*",x=t+"|"+u+"|"+w,y="['\u2019]",z=r+"|("+x+"|"+y+")+",A=n.zhuyin.initial,B=n.zhuyin.medial,C=n.zhuyin["final"],D=n.zhuyin.tone+"|"+n.zhuyin.ruyun;return{"char":{punct:{all:new RegExp("("+f+")","g"),open:new RegExp("("+b+")","g"),end:new RegExp("("+c+")","g"),sing:new RegExp("("+e+")","g")},biaodian:{all:new RegExp("("+l+")","g"),open:new RegExp("("+g+")","g"),close:new RegExp("("+h+")","g"),end:new RegExp("("+i+")","g"),liga:new RegExp("("+k+")","g"),group:[new RegExp("("+g+"|"+j+"|"+i+"){2,}","g"),new RegExp("("+k+g+")","g")]},hanzi:{individual:new RegExp("("+r+")","g"),group:new RegExp("("+r+")+","g")},word:new RegExp("("+t+"|"+u+"|"+w+"|"+f+")+","ig"),alphabet:{latin:new RegExp("("+t+")","ig"),ellinika:new RegExp("("+u+")","ig"),kirillica:new RegExp("("+w+")","ig"),kana:new RegExp("("+m+")","g"),smallkana:new RegExp("("+o+")","g"),eonmun:new RegExp("("+p+")","g"),halfeonmun:new RegExp("("+q+")","g")}},jinze:{touwei:new RegExp("("+g+"+)("+z+")("+i+"+)","ig"),tou:new RegExp("("+g+"+)("+z+")","ig"),wei:new RegExp("("+z+")("+i+"+)","ig"),middle:new RegExp("("+z+")("+j+")("+z+")","ig")},zhuyin:{form:new RegExp("^\u02d9?("+A+")?("+B+")?("+C+")?("+D+")?$"),diao:new RegExp("("+D+")","g")},hws:{base:[new RegExp("("+r+")("+x+"|"+b+")","ig"),new RegExp("("+x+"|"+c+")("+r+")","ig")],strict:[new RegExp("("+r+")"+a+"?("+x+"|"+b+")","ig"),new RegExp("("+x+"|"+c+")"+a+"?("+r+")","ig")]},"display-as":{"ja-font-for-hant":["\u67e5 \u67fb","\u555f \u5553","\u9109 \u9115","\u503c \u5024","\u6c61 \u6c5a"],"comb-liga-pua":[["a[\u030d\u0358]","\udb80\udc61"],["e[\u030d\u0358]","\udb80\udc65"],["i[\u030d\u0358]","\udb80\udc69"],["o[\u030d\u0358]","\udb80\udc6f"],["u[\u030d\u0358]","\udb80\udc75"],["\u31b4[\u030d\u0358]","\udb8c\uddb4"],["\u31b5[\u030d\u0358]","\udb8c\uddb5"],["\u31b6[\u030d\u0358]","\udb8c\uddb6"],["\u31b7[\u030d\u0358]","\udb8c\uddb7"]]},"inaccurate-char":[["[\u2022\u2027]","\xb7"],["\u22ef\u22ef","\u2026\u2026"],["\u2500\u2500","\u2014\u2014"],["\u2035","\u2018"],["\u2032","\u2019"],["\u2036","\u201c"],["\u2033","\u201d"]]}}();l.UNICODE=n,l.TYPESET=o,l.UNICODE.cjk=l.UNICODE.hanzi,l.UNICODE.greek=l.UNICODE.ellinika,l.UNICODE.cyrillic=l.UNICODE.kirillica,l.UNICODE.hangul=l.UNICODE.eonmun,l.TYPESET["char"].cjk=l.TYPESET["char"].hanzi,l.TYPESET["char"].alphabet.greek=l.TYPESET["char"].alphabet.ellinika,l.TYPESET["char"].alphabet.cyrillic=l.TYPESET["char"].alphabet.kirillica,l.TYPESET["char"].alphabet.hangul=l.TYPESET["char"].alphabet.eonmun;var p={id:function(a,b){return(b||g).getElementById(a)},tag:function(a,b){return this.makeArray((b||g).getElementsByTagName(a))},qsa:function(a,b){return this.makeArray((b||g).querySelectorAll(a))},create:function(a,b){var a="!"===a?g.createDocumentFragment():""===a?g.createTextNode(b||""):g.createElement(a);try{b&&(a.className=b)}catch(c){}return a},clone:function(a,b){return a.cloneNode(b||!0)},remove:function(a,b){return(b||a.parentNode).removeChild(a)},setAttr:function(a,b){if("object"==typeof b){var c=b.length;if("object"==typeof b[0]&&"name"in b[0])for(var d=0;c>d;d++)void 0!==b[d].value&&a.setAttribute(b[d].name,b[d].value);else for(var e in b)b.hasOwnProperty(e)&&void 0!==b[e]&&a.setAttribute(e,b[e]);return a}},isIgnorable:function(a){return"WBR"===a.nodeName||a.nodeType===Node.COMMENT_NODE},makeArray:function(a){return Array.prototype.slice.call(a)},extend:function(a,b){var c="object"==typeof a||"function"==typeof a||"object"==typeof b;if(c){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a}}},q=function(b){function c(a,b,c){var d=Element.prototype,e=d.matches||d.mozMatchesSelector||d.msMatchesSelector||d.webkitMatchesSelector;return a instanceof Element?e.call(a,b):c&&/^[39]$/.test(a.nodeType)?!0:!1}var d="0.1.2",e="style, script, head title",f=a||{},g=f.document||void 0;if("undefined"==typeof g)throw new Error("Fibre requires a DOM-supported environment.");var h=function(a){return new h.fn.init(a)};return h.version=d,h.matches=c,h.fn=h.prototype={constructor:h,version:d,context:void 0,contextSelector:null,finder:[],init:function(a){if(!a)throw new Error("A context is required for Fibre to initialise.");return a instanceof Node?this.context=a:"string"==typeof a&&(this.contextSelector=a,this.context=g.querySelector(a)),this},filterElemFn:function(a){return c(a,this.filterSelector,!0)&&!c(a,this.filterOutSelector)},filterSelector:"*",filter:function(a){switch(typeof a){case"string":this.filterSelector=a;break;case"function":this.filterElemFn=a;break;default:return this}return this},filterOutSelector:e,filterOut:function(a,b){switch(typeof a){case"string":"undefined"!=typeof b&&b===!0?this.filterOutSelector+=", "+a:this.filterOutSelector=a;break;default:return this}return this},replace:function(a,c,d){var e=this,d=d||"retain";return e.finder.push(b(e.context,{find:a,replace:c,filterElements:function(a){return e.filterElemFn(a)},portionMode:d})),e},wrap:function(a,c,d){var e=this,d=d||"retain";return e.finder.push(b(e.context,{find:a,wrap:c,filterElements:function(a){return e.filterElemFn(a)},portionMode:d})),e},revert:function(a){var b=this.finder.length,a=Number(a)||(0===a?Number(0):"all"===a?b:1);if("undefined"==typeof b||0===b)return this;a>b&&(a=b);for(var c=a;c>0;c--)this.finder.pop().revert();return this}},h.fn.init.prototype=h.fn,h}(function(){function a(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function b(){return c.apply(null,arguments)||d.apply(null,arguments)}function c(a,c,e,f,g){if(c&&!c.nodeType&&arguments.length<=2)return!1;var h="function"==typeof e;h&&(e=function(a){return function(b,c){return a(b.text,c.startIndex)}}(e));var i=d(c,{find:a,wrap:h?null:e,replace:h?e:"$"+(f||"&"),prepMatch:function(a,b){if(!a[0])throw"findAndReplaceDOMText cannot handle zero-length matches";if(f>0){var c=a[f];a.index+=a[0].indexOf(c),a[0]=c}return a.endIndex=a.index+a[0].length,a.startIndex=a.index,a.index=b,a},filterElements:g});return b.revert=function(){return i.revert()},!0}function d(a,b){return new e(a,b)}function e(a,b){b.portionMode=b.portionMode||f,this.node=a,this.options=b,this.prepMatch=b.prepMatch||this.prepMatch,this.reverts=[],this.matches=this.search(),this.matches.length&&this.processMatches()}{var f="retain",h="first",i=g;({}).toString}return b.Finder=e,e.prototype={search:function(){var b,c=0,d=this.options.find,e=this.getAggregateText(),f=[];if(d="string"==typeof d?RegExp(a(d),"g"):d,d.global)for(;b=d.exec(e);)f.push(this.prepMatch(b,c++));else(b=e.match(d))&&f.push(this.prepMatch(b,0));return f},prepMatch:function(a,b){if(!a[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return a.endIndex=a.index+a[0].length,a.startIndex=a.index,a.index=b,a},getAggregateText:function(){function a(c){if(3===c.nodeType)return c.data;if(b&&!b(c))return"";var d="";if(c=c.firstChild)do d+=a(c);while(c=c.nextSibling);return d}var b=this.options.filterElements;return a(this.node)},processMatches:function(){var a,b,c,d=this.matches,e=this.node,f=this.options.filterElements,g=[],h=e,i=d.shift(),j=0,k=0,l=0,m=[e];a:for(;;){if(3===h.nodeType&&(!b&&h.length+j>=i.endIndex?b={node:h,index:l++,text:h.data.substring(i.startIndex-j,i.endIndex-j),indexInMatch:j-i.startIndex,indexInNode:i.startIndex-j,endIndexInNode:i.endIndex-j,isEnd:!0}:a&&g.push({node:h,index:l++,text:h.data,indexInMatch:j-i.startIndex,indexInNode:0}),!a&&h.length+j>i.startIndex&&(a={node:h,index:l++,indexInMatch:0,indexInNode:i.startIndex-j,endIndexInNode:i.endIndex-j,text:h.data.substring(i.startIndex-j,i.endIndex-j)}),j+=h.data.length),c=1===h.nodeType&&f&&!f(h),a&&b){if(h=this.replaceMatch(i,a,g,b),j-=b.node.data.length-b.endIndexInNode,a=null,b=null,g=[],i=d.shift(),l=0,k++,!i)break}else if(!c&&(h.firstChild||h.nextSibling)){h.firstChild?(m.push(h),h=h.firstChild):h=h.nextSibling;continue}for(;;){if(h.nextSibling){h=h.nextSibling;break}if(h=m.pop(),h===e)break a}}},revert:function(){for(var a=this.reverts.length;a--;)this.reverts[a]();this.reverts=[]},prepareReplacementString:function(a,b,c){var d=this.options.portionMode;return d===h&&b.indexInMatch>0?"":(a=a.replace(/\$(\d+|&|`|')/g,function(a,b){var d;switch(b){case"&":d=c[0];break;case"`":d=c.input.substring(0,c.startIndex);break;case"'":d=c.input.substring(c.endIndex);break;default:d=c[+b]}return d}),d===h?a:b.isEnd?a.substring(b.indexInMatch):a.substring(b.indexInMatch,b.indexInMatch+b.text.length))},getPortionReplacementNode:function(a,b,c){var d=this.options.replace||"$&",e=this.options.wrap;if(e&&e.nodeType){var f=i.createElement("div");f.innerHTML=e.outerHTML||(new XMLSerializer).serializeToString(e),e=f.firstChild}if("function"==typeof d)return d=d(a,b,c),d&&d.nodeType?d:i.createTextNode(String(d));var g="string"==typeof e?i.createElement(e):e;return d=i.createTextNode(this.prepareReplacementString(d,a,b,c)),d.data&&g?(g.appendChild(d),g):d},replaceMatch:function(a,b,c,d){var e,f,g=b.node,h=d.node;if(g===h){var j=g;b.indexInNode>0&&(e=i.createTextNode(j.data.substring(0,b.indexInNode)),j.parentNode.insertBefore(e,j));var k=this.getPortionReplacementNode(d,a);return j.parentNode.insertBefore(k,j),d.endIndexInNode<j.length&&(f=i.createTextNode(j.data.substring(d.endIndexInNode)),j.parentNode.insertBefore(f,j)),j.parentNode.removeChild(j),this.reverts.push(function(){e===k.previousSibling&&e.parentNode.removeChild(e),f===k.nextSibling&&f.parentNode.removeChild(f),k.parentNode.replaceChild(j,k)}),k}e=i.createTextNode(g.data.substring(0,b.indexInNode)),f=i.createTextNode(h.data.substring(d.endIndexInNode));for(var l=this.getPortionReplacementNode(b,a),m=[],n=0,o=c.length;o>n;++n){var p=c[n],q=this.getPortionReplacementNode(p,a);p.node.parentNode.replaceChild(q,p.node),this.reverts.push(function(a,b){return function(){b.parentNode.replaceChild(a.node,b)}}(p,q)),m.push(q)}var r=this.getPortionReplacementNode(d,a);return g.parentNode.insertBefore(e,g),g.parentNode.insertBefore(l,g),g.parentNode.removeChild(g),h.parentNode.insertBefore(r,h),h.parentNode.insertBefore(f,h),h.parentNode.removeChild(h),this.reverts.push(function(){e.parentNode.removeChild(e),l.parentNode.replaceChild(g,l),f.parentNode.removeChild(f),r.parentNode.replaceChild(h,r)}),r}},b}());p.extend(q.fn,{jinzify:function(){var a=this.filterOutSelector;return this.filterOutSelector+=", jinze",this.replace(o.jinze.touwei,function(a,b){var c=b[0],d=p.create("",c),e=p.create("jinze","touwei");return e.appendChild(d),0===a.index&&a.isEnd||1===a.index?e:""}).replace(o.jinze.wei,function(a,b){var c=b[0],d=p.create("",c),e=p.create("jinze","wei");return e.appendChild(d),0===a.index?e:""}).replace(o.jinze.tou,function(a,b){var c=b[0],d=p.create("",c),e=p.create("jinze","tou");return e.appendChild(d),0===a.index&&a.isEnd||1===a.index?e:""}).replace(o.jinze.middle,function(a,b){var c=b[0],d=p.create("",c),e=p.create("jinze","middle");return e.appendChild(d),0===a.index&&a.isEnd||1===a.index?e:""}),this.filterOutSelector=a,this},groupify:function(){return this.wrap(o["char"].biaodian.group[0],p.clone(p.create("char_group","biaodian cjk"))).wrap(o["char"].biaodian.group[1],p.clone(p.create("char_group","biaodian cjk"))),this},charify:function(a){var a=p.extend({hanzi:"individual",liga:"liga",word:"group",latin:"group",ellinika:"group",kirillica:"group",kana:"none",eonmun:"none"},a||{});return"group"===a.hanzi&&this.wrap(o["char"].hanzi.group,p.clone(p.create("char_group","hanzi cjk"))),"individual"===a.hanzi&&this.wrap(o["char"].hanzi.individual,p.clone(p.create("char","hanzi cjk"))),("individual"===a.hanzi||"biaodian"===a.hanzi||"liga"===a.liga)&&("none"!==a.hanzi&&this.replace(o["char"].biaodian.all,function(a,b){var c=b[0],d=p.create("",c),e="biaodian cjk "+(c.match(o["char"].biaodian.open)?"open":c.match(o["char"].biaodian.close)?"close end":c.match(o["char"].biaodian.end)?"end":""),f=p.create("char",e),g=c.charCodeAt(0).toString(16);return f.setAttribute("unicode",g),f.appendChild(d),f}),this.replace("liga"===a.liga?o["char"].biaodian.liga:new RegExp("("+n.biaodian.liga+")","g"),function(a,b){var c=b[0],d=p.create("",c),e=p.create("char","biaodian liga cjk"),f=c.charCodeAt(0).toString(16);return e.setAttribute("unicode",f),e.appendChild(d),e})),"none"!==a.word&&this.wrap(o["char"].word,p.clone(p.create("word"))),("none"!==a.latin||"none"!==a.ellinika||"none"!==a.kirillica)&&this.wrap(o["char"].punct.all,p.clone(p.create("char","punct"))),"individual"===a.latin&&this.wrap(o["char"].alphabet.latin,p.clone(p.create("char","alphabet latin"))),"individual"===a.ellinika&&this.wrap(o["char"].alphabet.ellinika,p.clone(p.create("char","alphabet ellinika greek"))),"individual"===a.kirillica&&this.wrap(o["char"].alphabet.kirillica,p.clone(p.create("char","alphabet kirillica cyrillic"))),this}}),l.find=q,void["replace","wrap","revert","jinzify","charify"].forEach(function(a){l.fn[a]=function(){return this.finder||(this.finder=l.find(this.context)),this.finder[a](arguments[0],arguments[1]),this}});var r={};r.detectFont=d,r.support=function(){function b(a){var b,c=a.charAt(0).toUpperCase()+a.slice(1),d=(a+" "+e.join(c+" ")+c).split(" ");return d.forEach(function(a){"string"==typeof f.style[a]&&(b=!0)}),b||!1}function c(a,b){var c,d,e,f=i||p.create("body"),g=p.create("div"),j=i?g:f,b="function"==typeof b?b:function(){};return c=["<style>",a,"</style>"].join(""),j.innerHTML+=c,f.appendChild(g),i||(f.style.background="",f.style.overflow="hidden",e=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),d=b(j,a),p.remove(j),i||(h.style.overflow=e),!!d}function d(b,c){var d;return a.getComputedStyle?d=g.defaultView.getComputedStyle(b,null).getPropertyValue(c):b.currentStyle&&(d=b.currentStyle[c]),d}var e="Webkit Moz ms".split(" "),f=p.create("_");return{ruby:function(){var a,b=p.create("ruby"),c=p.create("rt"),e=p.create("rp");return b.appendChild(e),b.appendChild(c),h.appendChild(b),a="none"===d(e,"display")||"ruby"===d(b,"display")&&"ruby-text"===d(c,"display")?!0:!1,h.removeChild(b),b=null,c=null,e=null,a}(),fontface:function(){var a;return c('@font-face { font-family: font; src: url("//"); }',function(b,c){var d=p.qsa("style",b)[0],e=d.sheet||d.styleSheet,f=e?e.cssRules&&e.cssRules[0]?e.cssRules[0].cssText:e.cssText||"":"";a=/src/i.test(f)&&0===f.indexOf(c.split(" ")[0])}),a}(),unicoderange:function(){var a;return c('@font-face{font-family:test-for-unicode-range;src:local(Arial),local("Droid Sans")}@font-face{font-family:test-for-unicode-range;src:local("Times New Roman"),local(Times),local("Droid Serif");unicode-range:U+270C}',function(){a=!r.detectFont("test-for-unicode-range",'Arial, "Droid Sans"',"Q")}),a}(),columnwidth:b("columnWidth"),textemphasis:b("textEmphasis"),writingmode:b("writingMode")}}(),r.initCond=function(a){var b,a=a||h,c="";for(var d in r.support)b=(r.support[d]?"":"no-")+d,a.classList.add(b),c+=b+" ";return c},p.extend(r,{renderElem:function(a){this.renderRuby(a),this.renderDecoLine(a),this.renderDecoLine(a,"s, del"),this.renderEm(a)},renderDecoLine:function(a,b){var b=b||"u, ins",c=p.qsa(b,a),d=new RegExp("^("+b.replace(/\,\s?/g,"|")+")$","ig");c.forEach(function(a){var b;do if(b=(b||a).nextSibling,!b)return;while(p.isIgnorable(b));b.nodeName.match(d)&&b.classList.add("adjacent")})},renderEm:function(a,b){var c=b?"qsa":"tag",b=b||"em",d=p[c](b,a);d.forEach(function(a){var b=q(a);r.support.textemphasis||b.jinzify(),b.groupify().charify(r.support.textemphasis?{hanzi:"biaodian",word:"punctuation"}:{latin:"individual",ellinika:"individual",kirillica:"individual"})})},renderRuby:function(a,b){var c=b?"qsa":"tag",b=b||"ruby",d=p[c](b,a),g=p.qsa(b+", rtc",a);g.forEach(function(a){var b=a.classList;b.contains("pinyin")?b.add("romanization"):b.contains("mps")&&b.add("zhuyin"),b.contains("romanization")&&b.add("annotation")}),d.forEach(function(a){var c,d,g,h,i,j,k=a.classList,l=!r.support.ruby||k.contains("zhuyin")||k.contains("complex")||k.contains("rightangle");l&&(c=p.create("!"),c.appendChild(p.clone(a)),d=p.qsa(b,c)[0],(!r.support.ruby||k.contains("zhuyin"))&&p.tag("rt",d).forEach(function(a){var b,c=p.create("!"),d=[];do{if(b=(b||a).previousSibling,!b||b.nodeName.match(/(r[ubt])/i))break;c.insertBefore(p.clone(b),c.firstChild),d.push(b)}while(!b.nodeName.match(/(r[ubt])/i));h=k.contains("zhuyin")?f(c,a):e(c,a);try{a.parentNode.replaceChild(h,a),d.forEach(function(a){p.remove(a)})}catch(g){}}),(k.contains("complex")||k.contains("rightangle"))&&(g=h=p.tag("rb",d),i=g.length,!function(b){b&&(h=p.tag("rt",b).map(function(a,b){if(g[b]){var c=f(g[b],a);try{g[b].parentNode.replaceChild(c,g[b])}catch(d){}return c}}),p.remove(b),a.setAttribute("rightangle",""))}(d.querySelector("rtc.zhuyin")),p.qsa("rtc:not(.zhuyin)",d).forEach(function(b,c){var d;d=p.tag("rt",b).map(function(b){var d,f,g=Number(b.getAttribute("rbspan")||1),j=0,l=[];g>i&&(g=i);do{try{d=h.shift(),l.push(d)}catch(m){}if("undefined"==typeof d)break;j+=Number(d.getAttribute("span")||1)}while(g>j);if(j>g){if(l.length>1)return void console.error("An impossible `rbspan` value detected.",a);l=p.tag("rb",l[0]),h=l.slice(g).concat(h),l=l.slice(0,g),j=g}f=e(l,b,{"class":k,span:j,order:c});try{l[0].parentNode.replaceChild(f,l.shift()),l.forEach(function(a){p.remove(a)})}catch(m){}return f}),h=d,p.remove(b)})),j=p.create("hruby"),j.innerHTML=c.firstChild.innerHTML,p.setAttr(j,a.attributes),j.normalize(),a.parentNode.replaceChild(j,a))})}}),l.normalize=r,l.localize=r,l.support=r.support,l.detectFont=r.detectFont,l.fn.initCond=function(){return this.condition.classList.add("han-js-rendered"),l.normalize.initCond(this.condition),this},void["Elem","DecoLine","Em","Ruby"].forEach(function(a){var b="render"+a;l.fn[b]=function(a){return l.normalize[b](this.context,a),this}}),p.extend(l.support,{heiti:!0,songti:l.detectFont('"Han Songti"'),"songti-gb":l.detectFont('"Han Songti GB"'),kaiti:l.detectFont('"Han Kaiti"'),fangsong:l.detectFont('"Han Fangsong"')});var s,t="* > hws:first-child, * > wbr:first-child + hws, wbr:first-child + wbr + hws",u=function(){var a=p.create("div");return a.appendChild(p.create("","0-")),a.appendChild(p.create("","2")),a.normalize(),2!==a.firstChild.length}();s=p.create("hws"),s.innerHTML=" ",p.extend(l,{isNodeNormalizeNormal:u,renderHWS:function(a,b){var a=a||g,c=b?"strict":"base",d=l.find(a);return b?d.filterOut("textarea, code, kbd, samp, pre",!0):d.filterOut("textarea",!0),d.replace(l.TYPESET.hws[c][0],"$1<hws/>$2").replace(l.TYPESET.hws[c][1],"$1<hws/>$2").replace(/(['"]+)<hws\/>(.+?)<hws\/>\1/gi,"$1$2$1").replace("<hws/>",function(){return p.clone(s)}),p.qsa(t,a).forEach(function(a){for(var b=a.parentNode,c=b.firstChild;p.isIgnorable(c);)if(c=c.nextSibling,!c)return;for(;"HWS"===c.nodeName&&(p.remove(c,b),c=b.parentNode.insertBefore(p.clone(s),b),b=b.parentNode,u&&b.normalize(),c===b.firstChild););}),u&&a.normalize(),d}}),p.extend(l.fn,{HWS:null,renderHWS:function(a){return l.renderHWS(this.context,a),this.HWS=p.tag("hws",this.context),this},revertHWS:function(){return this.HWS.forEach(function(a){p.remove(a)}),this}}),l.renderJiya=function(a){var a=a||g,b=[l.find(a)];return b[0].filterOut("textarea, code, kbd, samp, pre, jinze, em",!0),b[0].groupify(),p.qsa("char_group.biaodian",a).forEach(function(a){b.push(l(a).charify({hanzi:"biaodian",liga:"liga",word:"none",latin:"none",ellinika:"none",kirillica:"none"}))}),b},p.extend(l.fn,{jiya:null,renderJiya:function(){return this.jiya=l.renderJiya(this.context),this},revertJiya:function(){try{this.jiya.revert("all")}catch(a){}return this}});var v;v=p.create("char","biaodian cjk middle"),v.setAttribute("unicode","b7"),l.correctBasicBD=function(a,b){if(!l.support.unicoderange||b){var c,a=a||g;c=l.find(a),c.wrap(/\u00B7/g,p.clone(v)).charify({liga:"liga",hanzi:"none",word:"none",latin:"none",ellinika:"none",kirillica:"none"})}},p.extend(l.fn,{basicBD:null,correctBasicBD:function(a){return this.basicBD=l.correctBasicBD(this.context,a),this},revertBasicBD:function(){try{this.basicBD.revert("all")}catch(a){}return this}});var w="ru[annotation]",x="textarea, code, kbd, samp, pre",y=function(){var a,b,c,d=i||p.create("body"),e=p.create("div"),f=p.create("span"),g=i?e:d;return i?i.appendChild(g):(d.style.background="",d.style.overflow="hidden",b=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),f.innerHTML="&#x0069;&#x030D;",f.style.fontFamily="sans-serif",f.style.display="inline-block",a=p.clone(f),a.style.fontFamily='"Romanization Sans"',g.appendChild(f),g.appendChild(a),c=f.clientWidth!==a.clientWidth,p.remove(g),i||(h.style.overflow=b),c}(),z=l.TYPESET["display-as"]["comb-liga-pua"],A=l.TYPESET["inaccurate-char"],B=p.create("char","comb-liga"),C=p.create("inner");return p.extend(l,{isCombLigaNormal:y,substCombLigaWithPUA:function(a){if(!y){var a=a||g,b=l.find(a);return b.filterOut(x,!0),z.forEach(function(a){b.replace(new RegExp(a[0],"ig"),function(b,c){var d=p.clone(B),e=p.clone(C);return e.innerHTML=c[0],d.appendChild(e),d.setAttribute("display-as",a[1]),0===b.index?d:""})}),p.qsa(w,a).forEach(function(a){var b=a.getAttribute("annotation");z.slice(0,5).forEach(function(a){b=b.replace(new RegExp(a[0],"ig"),a[1])}),a.setAttribute("annotation",b)}),b}},substInaccurateChar:function(a){var a=a||g,b=l.find(a);b.filterOut(x,!0),A.forEach(function(a){b.replace(new RegExp(a[0],"ig"),a[1])})}}),p.extend(l.fn,{"comb-liga":null,"inaccurate-char":null,substCombLigaWithPUA:function(){return this["comb-liga"]=l.substCombLigaWithPUA(this.context),this},revertCombLigaWithPUA:function(){try{this["comb-liga"].revert("all")}catch(a){}return this},substInaccurateChar:function(){return this["inaccurate-char"]=l.substInaccurateChar(this.context),this},revertInaccurateChar:function(){try{this["inaccurate-char"].revert("all")}catch(a){}return this}}),a.addEventListener("DOMContentLoaded",function(){var a;h.classList.contains("han-init")?l.init():(a=g.querySelector(".han-init-context"))&&(l.init=l(a).render())}),"function"==typeof define&&define.amd?define(function(){return l}):("undefined"==typeof b||b===!1)&&(a.Han=l),l})},{}],2:[function(a,b){b.exports=a("./dist/han")},{"./dist/han":1}],3:[function(a){(function(){var b;b=a("../index"),b().render()}).call(this)},{"../index":2}]},{},[3]);