const fs = require('fs')

//variables //
var logged_in = false
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

