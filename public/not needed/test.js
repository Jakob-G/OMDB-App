const fs = require('fs')

var addNote = (user, password) => {
	var string = fs.readFileSync('note.json',function (err) {
  		if (err) {
  			throw err
  		}
  	});
	var note = JSON.parse(string)
	note[user] = password
	note = JSON.stringify(note)
	fs.writeFileSync('note.json', note,function (err) {
  		if (err) {
  			throw err
  		}
  	});
}

var findAll = () =>{
	var readNote = fs.readFileSync('note.json');
	var note = JSON.parse(readNote);
	console.log(note)
}



addNote('jakob', 'garricks')
findAll()

