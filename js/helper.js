$(document).ready(function(){
    var msg = document.getElementById('message');
	document.getElementById('btnTest').addEventListener('click',btnTestListener,false);
	
	function btnTestListener(){
		var x=1;
		for(var i=1;i<10;i++){
			x=x*i;
		}
		
		msg.innerHTML=x;
	}
})
