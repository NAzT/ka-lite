(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$.extend(KhanUtil,{getCipherMessage:function(e){return[i18n._("i have learned all kinds of different things from using khan academy"),i18n._("the world is filled with secrets and mysteries just waiting to be discovered"),i18n._("when a message contains a single character by itself, it is most likely either the letter i or a"),i18n._("words which have repeating letters like too and all can also give a hint to what the secret message is"),i18n._("you have just cracked a caesar cipher and obtained the title of code breaker")][e-1]},applyCaesar:function(e,t){for(var n="",r="abcdefghijklmnopqrstuvwxyz",i="ABCDEFGHIJKLMNOPQRSTUVWXYZ",a=0,o=e.length;o>a;a++)n+=e[a]>="a"&&e[a]<="z"?r[(r.indexOf(e[a])+t)%26]:e[a]>="A"&&e[a]<="Z"?i[(i.indexOf(e[a])+t)%26]:e[a];return n},applyVigenere:function(e,t){for(var n="",r=0,i=0,a="abcdefghijklmnopqrstuvwxyz",o="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=t.toLowerCase(),h=0,l=e.length,f=s.length;l>h;h++)r=a.indexOf(s[i%f]),e[h]>="a"&&e[h]<="z"?(n+=a[(a.indexOf(e[h])+r)%26],i++):e[h]>="A"&&e[h]<="Z"?(n+=o[(o.indexOf(e[h])+r)%26],i++):n+=e[h];return n},normEnglishLetterFreq:function(e){for(var t=[.08167,.01492,.02782,.04253,.12702,.02228,.02015,.06094,.06966,.00154,.00772,.04024,.02406,.06749,.07507,.01929,95e-5,.05987,.06327,.09056,.02758,.00978,.0236,.0015,.01974,74e-5],n=0,r=t.length;r>n;n++)t[n]=t[n]*e;return t},normCipherLetterFreq:function(e,t){for(var n=e.toLowerCase(),r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=0,a="abcdefghijklmnopqrstuvwxyz",o=0,s=n.length;s>o;o++)n[o]>="a"&&n[o]<="z"&&(r[a.indexOf(n[o])]++,i++);for(var o=0,s=r.length;s>o;o++)r[o]=r[o]/i*t;return r}});
},{}]},{},[1]);