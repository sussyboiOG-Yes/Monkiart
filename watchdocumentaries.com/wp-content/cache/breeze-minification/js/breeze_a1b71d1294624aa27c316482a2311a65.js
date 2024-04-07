
"use strict";var punycode=new function(){this.utf16={decode:function(r){for(var e,o,t=[],n=0,f=r.length;n<f;){if(55296==(63488&(e=r.charCodeAt(n++)))){if(o=r.charCodeAt(n++),55296!=(64512&e)||56320!=(64512&o))throw new RangeError("UTF-16(decode): Illegal UTF-16 sequence");e=((1023&e)<<10)+(1023&o)+65536}t.push(e)}return t},encode:function(r){for(var e,o=[],t=0,n=r.length;t<n;){if(55296==(63488&(e=r[t++])))throw new RangeError("UTF-16(encode): Illegal UTF-16 value");65535<e&&(e-=65536,o.push(String.fromCharCode(e>>>10&1023|55296)),e=56320|1023&e),o.push(String.fromCharCode(e))}return o.join("")}};var v=36,A=2147483647;this.decode=function(r,e){var o,t,n,f,h,a,i,c,l=[],u=[],d=r.length,s=128,g=0,C=72,p=r.lastIndexOf("-");for(p<0&&(p=0),t=0;t<p;++t){if(e&&(u[l.length]=r.charCodeAt(t)-65<26),128<=r.charCodeAt(t))throw new RangeError("Illegal input >= 0x80");l.push(r.charCodeAt(t))}for(n=0<p?p+1:0;n<d;){for(f=g,h=1,a=v;;a+=v){if(d<=n)return;if(c=r.charCodeAt(n++),v<=(c=c-48<10?c-22:c-65<26?c-65:c-97<26?c-97:v))return;if(c>Math.floor((A-g)/h))return;if(g+=c*h,c<(c=a<=C?1:C+26<=a?26:a-C))break;if(h>Math.floor(A/(v-c)))return;h*=v-c}if(C=function(r,e,o){var t;for(r=o?Math.floor(r/700):r>>1,r+=Math.floor(r/e),t=0;455<r;t+=v)r=Math.floor(r/35);return Math.floor(t+36*r/(r+38))}(g-f,o=l.length+1,0===f),Math.floor(g/o)>A-s)return;s+=Math.floor(g/o),g%=o,e&&u.splice(g,0,r.charCodeAt(n-1)-65<26),l.splice(g,0,s),g++}if(e)for(g=0,i=l.length;g<i;g++)u[g]&&(l[g]=String.fromCharCode(l[g]).toUpperCase().charCodeAt(0));return this.utf16.encode(l)},this.toUnicode=function(r){for(var e=r.split("."),o=[],t=0;t<e.length;++t){var n=e[t];o.push(n.match(/^xn--/)?punycode.decode(n.slice(4)):n)}return o.join(".")}};