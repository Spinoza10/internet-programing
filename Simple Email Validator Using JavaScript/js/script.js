function checkEmail(){
	var email=document.getElementById('email').value;
	
	if(email==""){
		alert("Please enter something first!");
	}else{
		var emailValidate=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
		if(emailValidate.test(email)){
			document.getElementById('result').innerHTML="<center><h5 class='text-success'>Email validated!</h2></center>";
		}else{
			document.getElementById('result').innerHTML="<center><h5 class='text-danger'>Email verification failed!</h2></center>";
		}
	}	
}
