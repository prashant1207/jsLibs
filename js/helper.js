$(document).ready(function(){
    var msg = document.getElementById('message');
	document.getElementById('btnTest').addEventListener('click',btnTestListener,false);
	
	function btnTestListener(){
		alert('testing');
	}
})
