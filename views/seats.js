/// vriables ///
var seat = 'screen'
/// functions ///
function resetSeat(id){
	document.getElementById(id).style.backgroundColor = ''
}
function highlightSeat(id){
	document.getElementById(id).style.backgroundColor = 'blue'
	document.getElementById('seat_inp').value = id
}
/// Event Listeners ///

document.addEventListener("click",function(e){
	if(e.target.className == 'seat'){
		resetSeat(seat)
		highlightSeat(e.target.id)
		seat = e.target.id
	}
});

document.getElementById('fake').addEventListener('click', function(){
	if (document.getElementById('seat_inp').value != null){
		if (confirm(`are you sure you want to buy seat ${document.getElementById('seat_inp').value}`)){
			document.getElementById('buy').submit()
		}
		else{
			alert('something went wrong')
		}
	}
})