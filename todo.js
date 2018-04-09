const fs = require('fs');


var loadFile = () => {
	try {
		var usersArr = JSON.parse(fs.readFileSync('accounts.json'));
		return usersArr
	}
	catch (exception) { 
		if(exception.code === 'ENOENT') {
			fs.writeFileSync('accounts.json', '[]');
			usersArr =  JSON.parse(fs.readFileSync('accounts.json'));
		}else {
			//window.alert(exception)
		}
	}
};

var duplicateUsers = (usersArr, username) => {
	loadFile(usersArr);
	for (var i = 0; i < usersArr.length; i++) {
		if(username == usersArr[i].user) {
			alert('Username already existed')
			return false
		}else {
			return true
		}
	}
}

var loginCheck = (usersArr, username, password) => {
	loadFile(usersArr);
	for (var i = 0; i < usersArr.length; i++) {
		if(username != usersArr[i].user || password != usersArr[i].pass) {
			alert('Incorrect Username or Password')
			return false
		}else {
			return true
		}
	}
}

var passCheck = (pass1, pass2) => {
	if(pass1 != pass2) {
		alert('Passwords did not match');
		return false
	}else {
		return true
	}
}

var writeFile = (usersArr) => {
	fs.writeFileSync('accounts.json', JSON.stringify(usersArr));
};


var addUser = (username, info) => {

	var account = loadFile();
	console.log(account);
	account[username] = info
	//usersArr.push(account);
	writeFile(account);
	
	module.exports = {
		loadFile, writeFile, addUser
	};
};
module.exports = {
	loadFile, writeFile, addUser
	};

