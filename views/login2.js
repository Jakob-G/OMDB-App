const logged_in = true;

document.addEventListener("click",function(e){
  	if(e.target.className == 'thumb'){
    	document.getElementById('title').value = e.target.id
  	}
})

document.getElementById('buy_but').addEventListener("click",function(){
  	if(document.getElementById('title').value != ''){
  		document.getElementById('buyForm').submit()
  	}
  	else{
  		alert('you need to chose a movie before reserving seats')
  	}
})
