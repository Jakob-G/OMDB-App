(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const fs = require('fs')

//variables //

// functions//
function addNote(user, password){
	var string = fs.readFileSync('users.json',function (err) {
  		if (err) {
  			throw err
  		}
  	});
	var note = JSON.parse(string)
	note[user] = password
	note = JSON.stringify(note)
	fs.writeFileSync('users.json', note,function (err) {
  		if (err) {
  			throw err
  		}
  	});
}

// event listeners //


},{"fs":1}]},{},[2]);