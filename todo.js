const fs = require('fs');
const request = require('request')

var getUsers = () =>{
	var users = loadFile()
	return users
}

var saveMovies = (user, title, seat) => {
	var account = loadFile();
	account[user].movies[title] = seat
	writeFile(account)
}

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


var writeFile = (usersArr) => {
	fs.writeFileSync('accounts.json', JSON.stringify(usersArr));
	var thing = loadFile()
	console.log(thing);
};


var addUser = (username, info) => {
	var account = loadFile();
	account[username] = info
	//usersArr.push(account);
	writeFile(account);
};

module.exports = {
	loadFile,
	writeFile, 
	addUser,
	getUsers,
	saveMovies
	};

