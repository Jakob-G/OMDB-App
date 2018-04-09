var users = JSON.parse(document.getElementById('users').value);



document.getElementById('login_submit').addEventListener('click', function(){
	for(key in users){
		if (key == document.getElementById('user_inp').value){
			if(users[key].passwd ==  document.getElementById('pass_inp').value){
				document.getElementById('loginForm').submit()
			}
		}
	}
})

