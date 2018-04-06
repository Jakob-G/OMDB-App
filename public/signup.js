(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// variables //
const fs = require('fs')
const users = require('users.json')

// functions //
function addUser(user, contents){
	var string = fs.readFileSync(users,function (err) {
  		if (err) {
  			throw err
  		}
  	});
	var note = JSON.parse(string)
	if (key in note) {
		alert('that username is taken')
	}
	else{
		note[user] = password
		note = JSON.stringify(note)
		fs.writeFileSync(users, note,function (err) {
  			if (err) {
  				throw err
  			}
  		});
  	}
}

function makeContents(){
	if (document.getElementById('pass_inp2').value == document.getElementById('pass2_inp2').value &&
		document.getElementById('pass_inp2').value != '' && 
		document.getElementById('email_inp').value != '' &&
		document.getElementById('fname_inp').value != '' &&
		document.getElementById('lname_inp').value != '' &&
		document.getElementById('user_inp2').value != ''){
		var contents = {
			'password': document.getElementById('pass_inp2').value,
			'email':document.getElementById('email_inp').value,
			'first name':document.getElementById('fname_inp').value,
			'last name':document.getElementById('lname_inp').value,
			'movies':{}
		}
		addUser(document.getElementById('user_inp2').value, contents)
	}
}
// event listeners //


document.getElementById('signup_submit').addEventListener('click', function(){
	makeContents()
})


},{"fs":1}]},{},[2]);
