/// vriables ///
var seat = 'screen'
/// functions ///
function resetSeat(id){
	document.getElementById(id).style.backgroundColor = ''
}
function highlightSeat(id){
	document.getElementById(id).style.backgroundColor = 'blue'
}
/// Event Listeners ///

document.addEventListener("click",function(e){
	if(e.target.className == 'seat'){
		resetSeat(seat)
		highlightSeat(e.target.id)
		seat = e.target.id
	}
});

