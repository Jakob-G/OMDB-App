
document.getElementById('signup_submit').addEventListener("click",function(){
  	if(document.getElementById('pass_inp2').value == document.getElementById('pass2_inp2').value &&
  		document.getElementById('fname_inp').value != '' &&
  		document.getElementById('lname_inp').value != '' &&
  		document.getElementById('email_inp').value != '' &&
  		document.getElementById('pass_inp2').value != ''){
  		document.getElementById('signupForm').submit()
  	}
  	else{
  		alert('all feilds must be filled and passwords must match')
  	}
})