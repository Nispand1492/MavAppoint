function(){return function(){var d=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function ba(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}function f(a,b){function c(){}c.prototype=b.prototype;a.d=b.prototype;a.prototype=new c;a.c=function(a,c,n){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};var ca=window;function g(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}
function k(a,b){for(var c=0,e=g(String(a)).split("."),h=g(String(b)).split("."),n=Math.max(e.length,h.length),x=0;0==c&&x<n;x++){var ga=e[x]||"",ha=h[x]||"",ia=RegExp("(\\d*)(\\D*)","g"),ja=RegExp("(\\d*)(\\D*)","g");do{var p=ia.exec(ga)||["","",""],q=ja.exec(ha)||["","",""];if(0==p[0].length&&0==q[0].length)break;c=l(0==p[1].length?0:parseInt(p[1],10),0==q[1].length?0:parseInt(q[1],10))||l(0==p[2].length,0==q[2].length)||l(p[2],q[2])}while(0==c)}return c}function l(a,b){return a<b?-1:a>b?1:0};function m(a){if(Error.captureStackTrace)Error.captureStackTrace(this,m);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}f(m,Error);var r;a:{var s=d.navigator;if(s){var t=s.userAgent;if(t){r=t;break a}}r=""};var u=-1!=r.indexOf("Opera")||-1!=r.indexOf("OPR"),v=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),w=-1!=r.indexOf("Gecko")&&-1==r.toLowerCase().indexOf("webkit")&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE")),y=-1!=r.toLowerCase().indexOf("webkit");function z(){var a=d.document;return a?a.documentMode:void 0}
var A=function(){var a="",b;if(u&&d.opera)return a=d.opera.version,"function"==aa(a)?a():a;w?b=/rv\:([^\);]+)(\)|;)/:v?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:y&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(r))?a[1]:"");return v&&(b=z(),b>parseFloat(a))?String(b):a}(),B={},C=d.document,da=C&&v?z()||("CSS1Compat"==C.compatMode?parseInt(A,10):5):void 0;var D,E,F,G,H,I,J;J=I=H=G=F=E=D=!1;var K=r;K&&(-1!=K.indexOf("Firefox")?D=!0:-1!=K.indexOf("Camino")?E=!0:-1!=K.indexOf("iPhone")||-1!=K.indexOf("iPod")?F=!0:-1!=K.indexOf("iPad")?G=!0:-1!=K.indexOf("Chrome")?I=!0:-1!=K.indexOf("Android")?H=!0:-1!=K.indexOf("Safari")&&(J=!0));var ea=D,fa=E,ka=F,la=G,L=H,ma=I,M=J;function N(a){return(a=a.exec(r))?a[1]:""}var na=function(){if(ea)return N(/Firefox\/([0-9.]+)/);if(v||u)return A;if(ma)return N(/Chrome\/([0-9.]+)/);if(M)return N(/Version\/([0-9.]+)/);if(ka||la){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(r))return a[1]+"."+a[2]}else{if(L)return(a=N(/Android\s+([0-9.]+)/))?a:N(/Version\/([0-9.]+)/);if(fa)return N(/Camino\/([0-9.]+)/)}return""}();var oa={},O;function P(a){return pa?O(a):L?0<=k(qa,a):0<=k(na,a)}var pa=function(){if(!w)return!1;var a=d.Components;if(!a)return!1;try{if(!a.classes)return!1}catch(b){return!1}var c=a.classes,a=a.interfaces,e=c["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),h=c["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo).version;O=function(a){return 0<=e.compare(h,""+a)};return!0}(),Q;if(L){var R=/Android\s+([0-9\.]+)/.exec(r);Q=R?R[1]:"0"}else Q="0";var qa=Q;L&&P(2.3);
L&&P(4);M&&P(6);function S(a){m.call(this,a)}f(S,m);function T(a,b){return(new RegExp(a)).test(b)}function U(a,b){return(new RegExp(a,"i")).test(b)}function V(a){a=a.replace(/([.^$+(){}\[\]\\|])/g,"\\$1");a=a.replace(/\?/g,"(.|[\r\n])");return a=a.replace(/\*/g,"(.|[\r\n])*")}var W={exact:function(a,b){return-1!=b.indexOf(a)},glob:function(a,b){return(new RegExp("^"+V(a)+"$")).test(b)},globcontains:function(a,b){return(new RegExp(V(a))).test(b)},regex:T,regexi:U,regexpi:U,regexp:T};
function ra(a){var b="glob",c=/^([a-zA-Z-]+):(.*)/.exec(a);if(c){var e=c[1],c=c[2];W[e.toLowerCase()]&&(b=e.toLowerCase(),a=c)}e=W[b];if(!e)throw new S("Cannot find pattern matching strategy: "+b);"glob"==b?(0==a.indexOf("glob:")&&(a=a.substring(5)),e=W.glob):"exact"==b&&0==a.indexOf("exact:")&&(a=a.substring(6));a=ba(e,a);a.a=b;return a};if(w||v){var X;if(X=v)X=v&&9<=da;X||w&&(B["1.9.1"]||(B["1.9.1"]=0<=k(A,"1.9.1")))}v&&(B["9"]||(B["9"]=0<=k(A,"9")));function sa(a,b){if(a.style&&("hidden"==a.style.visibility||"none"==a.style.display))return"";var c;if(3==a.nodeType)return c=a.data,b||(c=c.replace(/\n|\r|\t/g," ")),c.replace(/&nbsp/," ");if(1==a.nodeType&&"SCRIPT"!=a.nodeName){var e=b||"PRE"==a.tagName;c="";for(var h=0;h<a.childNodes.length;h++){var n=a.childNodes.item(h);n&&(c+=sa(n,e))}if("P"==a.tagName||"BR"==a.tagName||"HR"==a.tagName||"DIV"==a.tagName)c+="\n";c=c.replace(/&nbsp/," ");oa.b&&P(9)&&(c=c.replace(/&#100;/," "));return c}return""}
;function ta(a){var b;if(b=ca.document.body){var c="";w&&"1.8"<=A||y||u||v?c=sa(b,!1):b.textContent?c=b.textContent:b.innerText&&(c=b.innerText);c=c.replace(/\r\n|\r/g,"\n");b=c.replace(/\ +/g," ");c=new RegExp(String.fromCharCode(160),"g");if(y)for(c=String.fromCharCode(160);-1!=b.indexOf(c);)b=b.replace(c," ");else b=b.replace(c," ");b=g(b)}else b="";c=ra(a);"glob"==c.a&&(0==a.indexOf("glob:")&&(a=a.substring(5)),c=ra("globContains:"+a));return c(b)}var Y=["_"],Z=d;
Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)Y.length||void 0===ta?Z=Z[$]?Z[$]:Z[$]={}:Z[$]=ta;; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}